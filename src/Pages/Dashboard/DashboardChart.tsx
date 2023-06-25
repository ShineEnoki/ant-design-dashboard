//custom hooks
import { Card } from "antd";
import useDataFetch from "../../customHooks/useFetchData";
//chartjs2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Order Revenue",
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface CartType {
  userId?: number;
  discountedTotal?: number;
}

const DashboardChart = () => {
  const { data } = useDataFetch("https://dummyjson.com/carts");

  const labels =
    data &&
    data.carts &&
    data.carts.map((cart: CartType) => `User-${cart.userId}`);

  const revenuData =
    data &&
    data.carts &&
    data.carts.map((cart: CartType) => cart.discountedTotal);

  const dataSource = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: revenuData,
        backgroundColor: "rgba(255, 0, 0, 01)",
      },
    ],
  };
  return (
    <Card style={{width: '97%', height: 420, marginLeft: 'auto', paddingRight: 10}}>
      <Bar options={options} data={dataSource} />
    </Card>
  );
};

export default DashboardChart;
