
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ManaHub",
    template: "%s | ManaHub",
  },
  description:
    "Your cards. Your decks. Your community. A Magic: The Gathering marketplace and community platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
