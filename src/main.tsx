import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Physical QR Code compatibility & www redirection guard
// GUARANTEE: Never redirect if we are ALREADY on primary domain (chavdaamit.in)
if (typeof window !== 'undefined') {
  const currentHost = window.location.hostname
  const primaryHost = 'chavdaamit.in'

  // Only run redirect if we are NOT on the primary domain and NOT on local development
  if (currentHost !== primaryHost && currentHost !== 'localhost' && currentHost !== '127.0.0.1') {
    if (currentHost === 'www.chavdaamit.in' || currentHost === 'portfolio-kappa-eight-57.vercel.app') {
      const targetUrl = `https://${primaryHost}${window.location.pathname}${window.location.search}${window.location.hash}`
      window.location.replace(targetUrl)
    }
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
