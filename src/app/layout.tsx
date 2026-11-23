import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dishaclasses.in"),
  title: "DISHA CLASSES | Your Future. Your Direction. Your Disha. | Wadala & Matunga, Mumbai",
  description:
    "Official website of Disha Classes (दिशा क्लासेज), Mumbai. Premier coaching institute in Wadala and Matunga guiding students towards academic excellence in School, Junior College (Science & Commerce), and Competitive Exams (JEE/NEET).",
  keywords: [
    "Disha Classes",
    "Disha Classes Wadala",
    "Disha Classes Matunga",
    "Coaching classes in Wadala",
    "Coaching classes in Matunga",
    "Tuition classes in Mumbai",
    "Science coaching in Mumbai",
    "Commerce coaching in Mumbai",
    "JEE NEET coaching Mumbai",
  ],
  authors: [{ name: "Disha Classes" }],
  icons: {
    icon: "/images/disha-logo.png",
    apple: "/images/disha-logo.png",
  },
  openGraph: {
    title: "DISHA CLASSES | Your Future. Your Direction. Your Disha.",
    description:
      "Premier coaching institute in Wadala & Matunga, Mumbai. Strong foundations, personal guidance, and consistent academic growth.",
    url: "https://dishaclasses.in",
    siteName: "Disha Classes",
    images: [
      {
        url: "/images/disha-logo.png",
        width: 611,
        height: 585,
        alt: "Disha Classes Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "DISHA CLASSES",
              alternateName: "दिशा क्लासेज",
              url: "https://dishaclasses.in",
              logo: "https://dishaclasses.in/images/disha-logo.png",
              slogan: "Your Future. Your Direction. Your Disha.",
              description:
                "Premier educational institute in Wadala and Matunga, Mumbai for School, Junior College (Science & Commerce), and Competitive Exams.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop Number 469, 7/40, Sir Pochkhan Wala Road, Bhaiya Saheb Nagar, Panchashila Nagar",
                addressLocality: "Wadala, Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400037",
                addressCountry: "IN",
              },
              telephone: "+919224657102",
              areaServed: ["Wadala", "Matunga", "Dadar", "Mumbai"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFDF7] text-[#292326] antialiased selection:bg-[#74151D] selection:text-[#FFFDF7] flex flex-col justify-between overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full relative">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
