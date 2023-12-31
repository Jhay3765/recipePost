import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "./context/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food It !",
  description: "Post your best meals ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
