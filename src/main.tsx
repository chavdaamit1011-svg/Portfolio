import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Primary Canonical Domain Redirection (chavdaamit.in) & Physical QR Code compatibility
if (typeof window !== 'undefined') {
  const hostname = window.location.hostname
  if (hostname === 'www.chavdaamit.in' || hostname === 'portfolio-kappa-eight-57.vercel.app') {
    const targetDomain = 'https://chavdaamit.in'
    const targetUrl = `${targetDomain}${window.location.pathname}${window.location.search}${window.location.hash}`
    window.location.replace(targetUrl)
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
