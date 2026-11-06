import "./globals.css";

export const metadata = {
  title: "HC International Digital Agency | We Build What Moves You Forward",
  description: "An independent digital partner for ambitious brands. Premium web experiences, commerce, automation and white-label digital delivery.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "HC International Digital Agency", description: "Your vision. Our expertise. Your brand.", type: "website" }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
