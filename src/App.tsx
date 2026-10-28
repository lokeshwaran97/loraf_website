import { Route, Routes } from 'react-router-dom'
import { DataRetentionPolicyPage } from './pages/DataRetentionPolicyPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/data-retention-policy" element={<DataRetentionPolicyPage />} />
    </Routes>
  )
}
