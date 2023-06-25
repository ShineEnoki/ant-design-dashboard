import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItems {
  label: string;
  key: string;
  icon: ReactNode;
}

const menuItems: MenuItems[] = [
  {
    label: "Dashboard",
    key: '/',
    icon: <AppstoreOutlined />,
  },
  {
    label: "Inventory",
    key: '/inventory',
    icon: <ShopOutlined />,
  },
  {
    label: "Orders",
    key: '/orders',
    icon: <ShoppingCartOutlined />
  },
  {
    label: "Customers",
    key: '/customers',
    icon: <UserOutlined />
  },
]

function SideMenu () {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="SideMenu">
      <Menu 
        mode="vertical"
        onClick={(item) => {
          navigate(item.key)
        }}
        items={menuItems}
        selectedKeys={[location.pathname]}
        className="SideMenuVertical"
      />
    </div>
  )
}

export default SideMenu;