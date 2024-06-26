// src/app/layout.tsx
import "./globals.css";
import { bangers } from "../utils/fonts";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={bangers.className}>
        <Navbar className={`px-6 py-4`}/>
        {children}
      </body>
    </html>
  );
}
