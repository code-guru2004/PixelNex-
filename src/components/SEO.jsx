import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "PixelNex - Innovative Software Solutions for Modern Businesses",
  description = "PixelNex provides cutting-edge software development, web applications, mobile apps, and digital transformation solutions. Transform your business with our expert team.",
  keywords = "software development, web development, mobile apps, digital transformation, software solutions, custom software, PixelNex",
  canonicalUrl = "https://pixel-nex.vercel.app",
  ogImage = "/og-image.jpg",
  ogType = "website"
}) {
  const siteTitle = "PixelNex | Software Solutions";
  const fullTitle = title === siteTitle ? siteTitle : `${title} | PixelNex`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PixelNex" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PixelNex" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@pixelnex" />
      <meta name="twitter:creator" content="@pixelnex" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate URLs */}
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
      
      {/* Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-96x96.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PixelNex",
          "url": "https://pixel-nex.vercel.app",
          "logo": "https://pixel-nex.vercel.app/logo1.png",
          "description": description,
          "email": "contact@pixelnex.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://twitter.com/pixelnex",
            "https://linkedin.com/company/pixelnex",
            "https://github.com/pixelnex"
          ]
        })}
      </script>
    </Helmet>
  );
}