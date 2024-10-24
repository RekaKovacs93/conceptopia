import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Conceptopia",
  description: "Conceptopia Kreatív Stúdió",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" 
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
