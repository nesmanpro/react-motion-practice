import { Inter } from "next/font/google";
import Header from '../components/Header'
import "../styles/index.scss";
import Footer from "@/components/Footer";
import LocomotiveWrapper from "@/components/LocomotiveWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "Created by nesmanpro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LocomotiveWrapper>
          <Header />
          {children}
          <Footer />
        </LocomotiveWrapper>
      </body>
    </html>
  );
}
