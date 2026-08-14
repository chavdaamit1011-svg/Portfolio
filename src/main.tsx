import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Physical QR Code compatibility redirect (portfolio-kappa-eight-57.vercel.app -> chavdaamit.in)
if (typeof window !== 'undefined') {
  const currentHost = window.location.hostname
  if (currentHost === 'portfolio-kappa-eight-57.vercel.app') {
    const targetUrl = `https://chavdaamit.in${window.location.pathname}${window.location.search}${window.location.hash}`
    window.location.replace(targetUrl)
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
