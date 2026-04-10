import { Outlet } from "react-router-dom";
import DashboardFooter from "../../components/dashboard/dashboardFooter/DashboardFooter";
import Navbar from "../../components/navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Navbar />
          <Outlet />
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
