import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/css/Container";
import TopNav from "./components/navbar/TopNav";
import BottomNav from "./components/navbar/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <TopNav />
        <Container>
          {children}
          <BottomNav />
        </Container>
      </body>
    </html>
  );
}
