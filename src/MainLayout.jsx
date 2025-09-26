import { Outlet } from "react-router-dom"; // Use Outlet to render child components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <>
      <NavBar />
      <ScrollToTop />{" "}
      {/* This ensures that the page scrolls to top on route change */}
      <main>
        <Outlet /> {/* This renders the nested route components */}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default MainLayout;
