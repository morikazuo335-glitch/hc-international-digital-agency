import "./globals.css";

export const metadata = {
  title: "HC International Digital Agency | Websites, Social Commerce & Automation",
  description: "HC International Digital Agency delivers website design and development, Shopify e-commerce, TikTok Shop, Instagram Shop and Facebook Shop setup, business automation, AI workflows, mobile app experiences and white-label digital services for agencies.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "HC International Digital Agency",
    description: "Website development, social commerce, e-commerce, business automation and white-label digital delivery.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
