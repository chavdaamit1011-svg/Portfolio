import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Redirect old Vercel production URL (printed on QR code business cards) to custom domain chavdaamit.in
if (typeof window !== 'undefined' && window.location.hostname === 'portfolio-kappa-eight-57.vercel.app') {
  const targetDomain = 'https://chavdaamit.in'
  const targetUrl = `${targetDomain}${window.location.pathname}${window.location.search}${window.location.hash}`
  window.location.replace(targetUrl)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
