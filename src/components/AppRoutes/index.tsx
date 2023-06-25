import { Routes, Route } from "react-router-dom";

//component
import Dashboard from "../../Pages/Dashboard";
import Customers from "../../Pages/Customers";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default AppRoutes;
