import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Domonick Leffler | Author of the Mada Mariner Series", template: "%s | Domonick Leffler" },
  description: "The official website of fantasy author Domonick Leffler and the world of Mada Mariner.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
