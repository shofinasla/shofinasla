import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'profile' | 'article';
  ogImage?: string;
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://ahmad.shofinasla.workers.dev/favicon.svg',
  schema
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper for meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let elem = document.querySelector(selector) as HTMLElement | null;
      if (!elem) {
        const isLink = selector.startsWith('link');
        elem = document.createElement(isLink ? 'link' : 'meta');
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) elem.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) elem.setAttribute('name', name);
        } else if (selector.includes('rel=')) {
          const rel = selector.match(/rel="([^"]+)"/)?.[1];
          if (rel) elem.setAttribute('rel', rel);
        }
        document.head.appendChild(elem);
      }
      elem.setAttribute(attr, value);
    };

    // 2. Meta description
    setMetaTag('meta[name="description"]', 'content', description);

    // 3. Canonical URL
    setMetaTag('link[rel="canonical"]', 'href', canonicalUrl);

    // 4. Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:site_name"]', 'content', 'Ahmad Shofi Nasla');
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', 'content', ogImage);
    }

    // 5. Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    if (ogImage) {
      setMetaTag('meta[name="twitter:image"]', 'content', ogImage);
    }

    // 6. Dynamic JSON-LD Schema
    let scriptElem = document.getElementById('dynamic-schema-jsonld') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptElem) {
        scriptElem = document.createElement('script');
        scriptElem.id = 'dynamic-schema-jsonld';
        scriptElem.type = 'application/ld+json';
        document.head.appendChild(scriptElem);
      }
      scriptElem.textContent = JSON.stringify(
        Array.isArray(schema)
          ? { '@context': 'https://schema.org', '@graph': schema }
          : schema
      );
    } else if (scriptElem) {
      scriptElem.remove();
    }
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
};
