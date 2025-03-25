// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import Layout from "./components/Layout/Layout";
import PurchasingDashboard from "./pages/Purchasing/Dashboard";
import AccountingDashboard from "./pages/Accounting/Dashboard";
import AdminUserManagement from "./pages/Admin/UserManagement";
import AdminDashboard from "./pages/Administrative/Dashboard";
import OrderTracking from "./pages/Administrative/OrderTracking";
import Inventory from "./pages/Administrative/Inventory";
import History from "./pages/Administrative/History";
import PurchaseHistory from "./pages/Purchasing/PurchaseHistory";
import ActivityLog from "./pages/Admin/ActivityLog";
import Setting from "./pages/Admin/Setting";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          {/* Purchasing Department */}
          <Route path="/purchasing/dashboard" element={<PurchasingDashboard />} />
          <Route path="/purchasing/inventory" element={<Inventory />} />
          <Route path="/purchasing/history" element={<PurchaseHistory />} />

          {/* Accounting Department */}
          <Route path="/accounting/dashboard" element={<AccountingDashboard />} />
          <Route path="/accounting/history" element={<PurchaseHistory />} />

          {/* Administrative Department */}
          <Route path="/administrative/dashboard" element={<AdminDashboard />} />
          <Route path="/administrative/order-tracking" element={<OrderTracking />} />
          <Route path="/administrative/inventory" element={<Inventory />} />
          <Route path="/administrative/history" element={<History />} />

          {/* Admin */}
          <Route path="/admin/users" element={<AdminUserManagement />} />
          <Route path="/admin/activity-log" element={<ActivityLog />} />
          <Route path="/admin/settings" element={<Setting />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;