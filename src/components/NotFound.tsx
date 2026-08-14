import React from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO'

export default function NotFound() {
  return (
    <div className="container py-5 text-center min-vh-75 d-flex flex-column align-items-center justify-content-center">
      <SEO 
        title="404 Page Not Found | Amit Chavda"
        description="The requested page could not be found. Return to Amit Chavda's portfolio homepage."
        canonicalUrl="https://chavdaamit.in/"
      />
      <div className="display-1 fw-bold text-gradient-cyan-purple mb-3">404</div>
      <h1 className="fs-3 fw-bold text-custom-heading mb-3">Page Not Found</h1>
      <p className="text-custom-muted mb-4 max-w-md mx-auto fs-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary-gradient rounded-pill px-4 py-2.5 font-semibold">
        <i className="bi bi-house-door-fill me-2"></i> Return to Homepage
      </Link>
    </div>
  )
}
