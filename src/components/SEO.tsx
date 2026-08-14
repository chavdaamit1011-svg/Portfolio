import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
}

export default function SEO({ title, description, keywords, canonicalUrl = 'https://chavdaamit.in/' }: SEOProps) {
  useEffect(() => {
    // Dynamic Page Title
    if (title) {
      document.title = title
    }

    // Dynamic Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // Dynamic og:url Tag
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', canonicalUrl)

    // Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)

      let ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) {
        ogDesc.setAttribute('content', description)
      }
    }

    // Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords)
    }

    // Update Open Graph Title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', title)
      }
    }
  }, [title, description, keywords, canonicalUrl])

  return null
}

