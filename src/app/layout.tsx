import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTCGP Trader",
  description: "Pokemon TCG Player Trader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

