# Loraf Intelligence Website

Static website for **Loraf Intelligence Private Ltd** — Robotics & AI solutions.

## Local Preview

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Deploy to Cloudflare Pages

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select this repository and configure:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**.

Your site will be live at `https://<project-name>.pages.dev`. You can add a custom domain under **Custom domains** in the Pages project settings.

## Project Structure

```
loraf_website/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Interactivity
├── assets/
│   └── logo.png        # Company logo
└── README.md
```

## Contact

- **Email:** info@lorafintel.com
- **Phone:** +91 79044 90811, +91 88709 72470
