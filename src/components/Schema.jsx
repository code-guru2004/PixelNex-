import { Helmet } from 'react-helmet-async';

export default function Schema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "PixelNex Software Solutions",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "description": "Professional software development services for modern businesses.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "provider": {
            "@type": "Organization",
            "name": "PixelNex"
          }
        })}
      </script>
      
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://pixel-nex.vercel.app"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://pixel-nex.vercel.app/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Contact",
              "item": "https://pixel-nex.vercel.app/#contact"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}