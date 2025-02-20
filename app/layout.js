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
        
        <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
