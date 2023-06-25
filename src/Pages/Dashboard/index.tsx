import { ReactNode } from "react";

//components
import RecentOrdersTable from "./RecentOrdersTable";

//antd
import { Space, Typography, Card, Statistic } from "antd";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DashboardChart from "./DashboardChart";

const Dashboard = () => {
  const iconStyle = {
    backgroundColor: "rgba(0, 255, 0, 0.25)",
    borderRadius: 20,
    fontSize: 24,
    padding: 8,
  };

  return (
    <Space size={12} direction="vertical" style={{width: '100%'}}>
      <Typography.Title level={3}> Dashboard </Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                ...iconStyle,
                color: "green",
              }}
            />
          }
          title="Order"
          value={5000}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                ...iconStyle,
                backgroundColor: "rgba(0, 0, 255, 0.25)",
                color: "blue",
              }}
            />
          }
          title="Inventory"
          value={2000}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                ...iconStyle,
                color: "purple",
                backgroundColor: "rgba(255, 0, 255, 0.25)",
              }}
            />
          }
          title="Customer"
          value={234}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                ...iconStyle,
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.25)",
              }}
            />
          }
          title="Revenue"
          value={600}
        />
      </Space>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "40%" }}>
          <RecentOrdersTable />
        </div>
        <div style={{ flex: 1 }}>
          <DashboardChart />
        </div>
      </div>
    </Space>
  );
};

interface DashboardCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
}

const DashboardCard = ({ icon, title, value }: DashboardCardProps) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};


export default Dashboard;
