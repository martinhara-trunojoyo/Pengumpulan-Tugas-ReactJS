import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";

const Layout = () => {
    return (
      <>
        <Header />
        <main className="container py-4">
          <Outlet /> {/* Ini tempat semua page muncul */}
        </main>
        <Footer />
      </>
    );
  };

  export default Layout;
