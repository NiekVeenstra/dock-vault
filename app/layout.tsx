import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.scss";

const siteUrl = "https://dockvault.nl";
const siteTitle = "Dock Vault | One Piece TCG voor verzamelaars";
const siteDescription =
  "Dock Vault is een plek voor One Piece TCG-verzamelaars: ontdek gidsen over bewaren, grading en verzamelen, volg het Logbook en verken The Vault.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Dock Vault",
  },
  description: siteDescription,
  applicationName: "Dock Vault",
  icons: {
    icon: [
      {
        url: "/favicon-32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Dock Vault",
    title: "Dock Vault | The Harbor Is Yours",
    description: siteDescription,
    locale: "nl_NL",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/dock-vault-logo.png",
        width: 1836,
        height: 856,
        alt: "Dock Vault | The Harbor Is Yours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dock Vault | The Harbor Is Yours",
    description: siteDescription,
    images: ["/images/dock-vault-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#06101A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
