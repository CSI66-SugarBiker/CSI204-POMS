import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex flex-col gap-4">
        {/* Links for All Roles */}
        <Link to="/purchasing/dashboard" className="text-white">
          Purchasing Dashboard
        </Link>
        <Link to="/purchasing/inventory" className="text-white">
          Purchasing Inventory
        </Link>
        <Link to="/purchasing/history" className="text-white">
          Purchasing History
        </Link>

        <Link to="/accounting/dashboard" className="text-white">
          Accounting Dashboard
        </Link>
        <Link to="/accounting/history" className="text-white">
          Accounting History
        </Link>

        <Link to="/administrative/dashboard" className="text-white">
          Administrative Dashboard
        </Link>
        <Link to="/administrative/order-tracking" className="text-white">
          Administrative Order Tracking
        </Link>
        <Link to="/administrative/inventory" className="text-white">
          Administrative Inventory
        </Link>
        <Link to="/administrative/history" className="text-white">
          Administrative History
        </Link>

        <Link to="/admin/users" className="text-white">
          Admin User Management
        </Link>
        <Link to="/admin/activity-log" className="text-white">
          Admin Activity Log
        </Link>
        <Link to="/admin/settings" className="text-white">
          Admin Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;