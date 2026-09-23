# Pharmacy React UI Spec (API-driven)

Use this document as the **input prompt / product brief** to build a React web app for the pharmacy backend.

**Backend**

| Item         | Value                                                 |
| ------------ | ----------------------------------------------------- |
| Base URL     | `http://127.0.0.1:8000`                               |
| API prefix   | `/api/v1`                                             |
| OpenAPI      | `http://127.0.0.1:8000/docs`                          |
| Health       | `GET /health`                                         |
| Auth         | HTTP Basic — email + password (no JWT)                |
| Branch scope | Header `X-Branch-Id: <branch_id>` on shop-scoped APIs |

**Related backend docs:** [server.md](server.md), [schema/SCHEMA.md](schema/SCHEMA.md), [README.md](README.md)

---

## 1. Product summary

Indian multi-pharmacy retail UI where:

1. An owner **registers** a company + first shop.
2. Staff **sign in** with email/password (stored in browser for Basic Auth on every request).
3. User **selects active pharmacy branch** (multi-shop).
4. Staff manage catalog, stock, robot shelves, prescriptions/robot picks, purchases, and counter sales.

**Roles (from API):** `OWNER`, `PHARMACIST`, `CASHIER`, `INVENTORY` — hide/disable menus by role.

---

## 2. Recommended React stack

- React 18+ with Vite
- React Router
- TanStack Query (server state) + Zustand or Context (auth + selected branch)
- Axios or fetch wrapper that always attaches Basic Auth + `X-Branch-Id`
- Form library: React Hook Form + Zod
- UI: any simple system (MUI / Ant Design / shadcn) — prefer tables + forms for ops software

**Env**

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

---

## 3. Global client behaviour

### 3.1 Auth storage

On successful “login” (client-side only):

1. Save `email` and `password` in `sessionStorage` (or memory + optional “remember me” in localStorage).
2. Call `GET /api/v1/me` with Basic Auth.
3. Save `user`, `tenant`, `role_code`, `branches[]` in app state.
4. Set `selectedBranchId` to first branch (or default).

On every API call:

```http
Authorization: Basic base64(email:password)
X-Branch-Id: <selectedBranchId>   # when route needs branch
```

Optional: `X-Tenant-Id` if login returns multiple tenants for same email (rare).

### 3.2 Which routes need `X-Branch-Id`

| Needs branch header                                    | No branch header                                                                                               |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Stock, robot, prescriptions, purchases, sales, returns | Register, `/me`, branches list/create, users, lookups, manufacturers, medicines, suppliers, customers, doctors |

### 3.3 List response shape

Many list endpoints return:

```json
{ "items": [], "total": 0, "limit": 50, "offset": 0 }
```

Some return `{ "items": [] }` only (purchases/sales lists). Handle both.

### 3.4 Errors

- `401` → clear credentials, redirect to Login
- `403` → toast “Not allowed” / wrong branch
- `400` / `409` → show `detail` string from JSON

---

## 4. App routes (pages)

```text
/login
/register
/                     → redirect to /dashboard
/dashboard
/branches
/users                → OWNER only
/medicines
/manufacturers
/suppliers
/customers
/doctors
/stock
/stock/ledger
/robot/racks
/robot/shelves
/prescriptions
/prescriptions/:id
/purchases
/purchases/new
/purchases/:id
/sales
/sales/new
/sales/:id
/sales/h1-register
/purchase-returns/new
/sales-returns/new
```

**Shell layout (after login)**

- Top bar: app name, **branch switcher** (dropdown of `me.branches`), user name, Logout
- Left nav: Dashboard, Catalog, Stock, Robot, Prescriptions, Purchases, Sales, CRM, Settings (branches/users)
- Main content area

---

## 5. Screens and API mapping

### 5.1 Login

**UI:** email, password, Submit.

**Flow**

1. User enters credentials (no login API — validate via `GET /api/v1/me`).
2. On 200 → store auth + go to `/dashboard`.
3. On 401 → “Invalid email or password”.

**API:** `GET /api/v1/me`

**Response fields used:** `user`, `tenant`, `role_code`, `branches[]` (`branch_id`, `branch_name`, …)

---

### 5.2 Register (public)

**UI:** company signup form + first branch fields.

**API:** `POST /api/v1/auth/register`

**Body**

```json
{
  "owner_name": "string",
  "company_name": "string",
  "pan_number": "optional",
  "email": "string",
  "phone": "optional",
  "password": "string min 6",
  "branch": {
    "branch_name": "string",
    "gstin_number": "optional",
    "state_code": "33",
    "address": "optional",
    "city": "optional",
    "pincode": "optional",
    "pharmacist_name": "optional",
    "pharmacist_reg_no": "optional"
  }
}
```

**After success:** auto-login with same email/password → `/dashboard`.

Load `state_code` options from `GET /api/v1/lookups/states` only after login; for register, hardcode common codes or a static Indian states list in the UI.

---

### 5.3 Dashboard

**UI cards**

- Active branch name
- Quick links: New Sale, New Purchase, Robot shelves, Prescriptions (filter QUEUED)
- Optional: call `GET /api/v1/stock` and show count of low/near-expiry later

No dedicated dashboard API — compose from existing list endpoints.

---

### 5.4 Branches (`/branches`)

| Action                  | API                                  |
| ----------------------- | ------------------------------------ |
| List                    | `GET /api/v1/branches`               |
| Create (OWNER)          | `POST /api/v1/branches`              |
| Detail                  | `GET /api/v1/branches/{branch_id}`   |
| Update licences (OWNER) | `PATCH /api/v1/branches/{branch_id}` |

**Form fields (create/edit):** `branch_name`, `gstin_number`, `state_code`, `address`, `city`, `pincode`, `phone`, `pharmacist_name`, `pharmacist_reg_no`, DL/FSSAI fields on edit.

After create, refresh `/me` or branch list and allow switching to new branch.

---

### 5.5 Users (`/users`) — OWNER only

| Action       | API                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------- |
| List         | `GET /api/v1/users`                                                                            |
| Create       | `POST /api/v1/users` body: `full_name`, `email`, `password`, `role_code`, `phone?`             |
| Set branches | `PUT /api/v1/users/{user_id}/branches` body: `{ "branch_ids": [1,2], "default_branch_id": 1 }` |

**Role dropdown:** `GET /api/v1/lookups/roles` → `OWNER`, `PHARMACIST`, `CASHIER`, `INVENTORY`.

---

### 5.6 Catalog

#### Medicines `/medicines`

| Action      | API                                                               |
| ----------- | ----------------------------------------------------------------- |
| Search/list | `GET /api/v1/medicines?q=&barcode=&drug_schedule=&limit=&offset=` |
| Create      | `POST /api/v1/medicines`                                          |
| Detail      | `GET /api/v1/medicines/{id}`                                      |
| Update      | `PATCH /api/v1/medicines/{id}`                                    |
| Deactivate  | `DELETE /api/v1/medicines/{id}`                                   |

**Create form fields:** `medicine_name`, `generic_name`, `manufacturer_id`, `hsn_code`, `gst_rate`, `drug_schedule` (`NONE|OTC|H|H1|X`), `pack_type`, `units_per_pack`, `strength`, `form`, `barcode`, `category`, `rx_required`.

**UI rule:** if schedule is H/H1/X, force `rx_required = true`.

#### Manufacturers `/manufacturers`

`GET/POST /api/v1/manufacturers` — simple name list + create.

#### Suppliers `/suppliers`

`GET/POST /api/v1/suppliers`, `GET /api/v1/suppliers/{id}`.

Fields: `supplier_name`, `gstin_number`, `state_code`, `contact_number`, `address`, optional `branch_id`.

---

### 5.7 CRM

#### Customers `/customers`

`GET/POST /api/v1/customers` — name, phone, gstin, state, address, pincode.

#### Doctors `/doctors`

`GET/POST /api/v1/doctors` — name, registration_number, clinic_name, phone.

Used when creating prescriptions and H1 sales.

---

### 5.8 Stock `/stock`

Requires `X-Branch-Id`.

| Action  | API                                     |
| ------- | --------------------------------------- |
| List    | `GET /api/v1/stock?medicine_id=`        |
| One row | `GET /api/v1/stock/{stock_id}`          |
| Ledger  | `GET /api/v1/stock/ledger?medicine_id=` |

**Table columns:** medicine_id (resolve name via medicines cache), batch_number, expiry_date, mrp, purchase_rate, pack_qty, loose_qty, current_qty.

Highlight rows where `expiry_date` is within 90 days.

---

### 5.9 Robot warehouse

Requires `X-Branch-Id`.

#### Racks `/robot/racks`

| Action     | API                                                                   |
| ---------- | --------------------------------------------------------------------- |
| List       | `GET /api/v1/robot/racks`                                             |
| Create     | `POST /api/v1/robot/racks` `{ rack_number, row_count, column_count }` |
| Build grid | `POST /api/v1/robot/racks/{rack_id}/shelves`                          |

**UI:** After create rack, button “Generate shelves”.

#### Shelves `/robot/shelves`

| Action        | API                                                      |
| ------------- | -------------------------------------------------------- |
| List          | `GET /api/v1/robot/shelves?rack_id=&empty=&medicine_id=` |
| Place / clear | `PATCH /api/v1/robot/shelves/{shelf_id}`                 |

**Place body**

```json
{
  "medicine_id": 1,
  "stock_id": 10,
  "capacity_qty": 200,
  "current_qty": 50,
  "shelf_code": "R1-R1-C1"
}
```

**Clear:** `{ "clear": true }`

**UI suggestion:** grid view per rack (row × column cells). Empty cell = dashed box; occupied = medicine name + qty. Click cell → side drawer to assign stock (picker: medicines + stock batches for that medicine).

**Rule:** one medicine SKU per shelf.

---

### 5.10 Prescriptions + robot pick (core flow)

Requires `X-Branch-Id`.

#### List `/prescriptions`

`GET /api/v1/prescriptions?robot_status=QUEUED|PICKING|COMPLETED|FAILED`

Table: id, date, customer, doctor, robot_status, duration.

#### Create

`POST /api/v1/prescriptions`

```json
{
  "customer_id": 1,
  "doctor_id": 1,
  "prescription_date": "2026-08-24",
  "notes": "optional",
  "items": [
    {
      "medicine_id": 1,
      "dose": "1 SOS",
      "qty_authorised": 15,
      "duration": "3 days"
    }
  ]
}
```

Starts as `robot_status: QUEUED`.

#### Detail `/prescriptions/:id`

`GET /api/v1/prescriptions/{id}` → header + items + picks.

#### Robot actions (buttons by status)

| Button      | When visible      | API                                         |
| ----------- | ----------------- | ------------------------------------------- |
| Start pick  | QUEUED            | `POST .../robot/start`                      |
| Record pick | PICKING           | `POST .../robot/pick`                       |
| Complete    | PICKING           | `POST .../robot/complete`                   |
| Fail        | QUEUED or PICKING | `POST .../robot/fail` `{ "reason": "..." }` |

**Pick body**

```json
{
  "picks": [{ "prescription_item_id": 1, "shelf_id": 5, "qty_units": 10 }]
}
```

**UI for pick:** for each Rx line, show medicine + authorised qty; dropdown of shelves that have that `medicine_id` (`GET /robot/shelves?medicine_id=`); enter qty; submit.

**Complete response:** show `robot_duration_seconds` prominently (“Pick finished in 85s”).

---

### 5.11 Purchases

Requires `X-Branch-Id`.

| Screen        | API                                        |
| ------------- | ------------------------------------------ |
| List          | `GET /api/v1/purchases`                    |
| New           | Multi-line form → `POST /api/v1/purchases` |
| Detail        | `GET /api/v1/purchases/{id}`               |
| Post to stock | `POST /api/v1/purchases/{id}/post`         |
| Add payment   | `POST /api/v1/purchases/{id}/payments`     |

**Create body (simplified UI)**

- Header: supplier (select), invoice_number, invoice_date, GST amounts (cgst/sgst/igst), grand_total
- Lines: medicine, batch, expiry, qty_units, mrp, ptr, gst_percent, line_total

**GST UI rule:** either IGST **or** CGST+SGST, not both.

**Payment modes:** `GET /api/v1/lookups/payment-modes`.

After **Post**, stock list should show new batch — then user can place on robot shelf.

---

### 5.12 Sales (POS)

Requires `X-Branch-Id`.

| Screen      | API                                                    |
| ----------- | ------------------------------------------------------ |
| List        | `GET /api/v1/sales`                                    |
| New bill    | `POST /api/v1/sales` (creates invoice + deducts stock) |
| Detail      | `GET /api/v1/sales/{id}`                               |
| Pay         | `POST /api/v1/sales/{id}/payments`                     |
| Void        | `POST /api/v1/sales/{id}/void`                         |
| H1 register | `GET /api/v1/sales/h1-register`                        |

**New sale UI (counter)**

1. Optional customer select.
2. Add lines: search medicine → pick **stock batch** (`GET /stock?medicine_id=`) → qty → MRP/discount/GST.
3. If medicine `drug_schedule` is H/H1/X → require `prescription_id`.
4. Submit → show `invoice_number` + total.
5. Payment dialog (cash/UPI).

**Sale line body fields:** `medicine_id`, `stock_id`, `batch_number`, `expiry_date`, `qty_units`, `mrp`, `gst_percent`, tax splits, `line_total`, optional `prescription_id`.

---

### 5.13 Returns (simple forms)

| Screen          | API                             |
| --------------- | ------------------------------- |
| Purchase return | `POST /api/v1/purchase-returns` |
| Sales return    | `POST /api/v1/sales-returns`    |

V1 UI: form with return_number, date, supplier/customer, line items (batch, qty, amounts). Keep secondary in nav under Purchases/Sales.

---

## 6. Navigation by role

| Menu                  | OWNER | PHARMACIST | CASHIER | INVENTORY |
| --------------------- | ----- | ---------- | ------- | --------- |
| Dashboard             | ✓     | ✓          | ✓       | ✓         |
| Branches / Users      | ✓     |            |         |           |
| Medicines / Suppliers | ✓     | ✓          | view    | ✓         |
| Stock                 | ✓     | ✓          | view    | ✓         |
| Robot                 | ✓     | ✓          |         | ✓         |
| Prescriptions         | ✓     | ✓          |         |           |
| Purchases             | ✓     |            |         | ✓         |
| Sales / H1            | ✓     | ✓          | ✓       |           |
| Customers / Doctors   | ✓     | ✓          | ✓       |           |

Enforce in UI; API also returns 403 for OWNER-only user APIs.

---

## 7. Suggested component tree

```text
src/
  api/
    client.ts          # axios instance: Basic Auth + X-Branch-Id
    auth.ts, medicines.ts, stock.ts, robot.ts, purchases.ts, sales.ts, ...
  store/
    authStore.ts       # email, password, user, tenant, role, branches, selectedBranchId
  layouts/
    AppShell.tsx       # nav + branch switcher
    AuthLayout.tsx
  pages/
    LoginPage.tsx
    RegisterPage.tsx
    DashboardPage.tsx
    MedicinesPage.tsx
    StockPage.tsx
    RobotShelvesPage.tsx
    PrescriptionDetailPage.tsx
    PurchaseFormPage.tsx
    SalePosPage.tsx
    ...
  components/
    DataTable.tsx
    BranchSwitcher.tsx
    MedicineSelect.tsx
    StockBatchSelect.tsx
    StatusBadge.tsx    # QUEUED / PICKING / COMPLETED
```

---

## 8. Priority build order (UI phases)

1. **Shell + auth:** Login, Register, Branch switcher, `/me`
2. **Catalog + CRM:** Medicines, Customers, Doctors, Suppliers
3. **Stock + Purchases:** Purchase create → post → stock table
4. **Robot:** Racks, shelf grid, place stock
5. **Prescriptions:** Create + start/pick/complete duration display
6. **Sales POS:** New sale + payment + H1 register page
7. **Returns + Users/Branches** polish

---

## 9. Sample credentials for local demo

After smoke test / register:

| Email                   | Password     | Notes                             |
| ----------------------- | ------------ | --------------------------------- |
| `smoke@caremed.example` | `Secret123!` | Created by `scripts/smoke_api.py` |

Or register a new account from `/register`.

---

## 10. Acceptance criteria for the React app

- [ ] Login works via Basic Auth (`/me`) without JWT
- [ ] Branch switcher changes `X-Branch-Id` for stock/robot/sales/purchases
- [ ] Can create medicine, purchase stock, place on shelf, complete robot Rx pick, and create a sale
- [ ] Scheduled drug sale blocks without prescription_id
- [ ] 401 redirects to login
- [ ] OWNER-only pages hidden for other roles

---

## 11. One-shot prompt you can paste into a React codegen agent

```text
Build a Vite + React + TypeScript pharmacy admin UI for this FastAPI backend:

Base URL: http://127.0.0.1:8000
API prefix: /api/v1
Auth: HTTP Basic (email + password on every request). No JWT.
Branch-scoped APIs require header X-Branch-Id.
OpenAPI: http://127.0.0.1:8000/docs

Implement:
1. Login (validate with GET /api/v1/me) and Register (POST /api/v1/auth/register)
2. App shell with sidebar + branch switcher from me.branches
3. Pages for medicines, customers, doctors, suppliers, stock, robot racks/shelves,
   prescriptions (robot start/pick/complete), purchases (create + post), sales POS
4. Use TanStack Query + React Router
5. Follow the screen/API mapping and build order in UI.md

Do not invent Bearer tokens. Persist email/password in sessionStorage for Basic Auth.
```

Use this file (`UI.md`) together with live OpenAPI at `/docs` for exact request/response schemas.
