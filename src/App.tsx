import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PrescriptionReaderPage } from './pages/PrescriptionReaderPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/prescription-reader" element={<PrescriptionReaderPage />} />
    </Routes>
  )
}
