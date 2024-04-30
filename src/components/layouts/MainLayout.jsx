import Navbar from "../../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
