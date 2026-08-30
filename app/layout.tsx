import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Dock Vault — The Harbor Is Yours",
  description:
    "A Harbor for One Piece collectors, built on care and guided by trust.",
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
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
