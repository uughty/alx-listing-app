import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    <main className="min-h-screen p-4"> {children} </main>
    <Footer />
  </div>
);

export default Layout;