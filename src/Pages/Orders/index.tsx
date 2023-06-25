import { useEffect, useState } from "react";
import { Space, Table, Typography } from "antd";
import axios from "axios";
import { DataTypeForProducts } from "../../Types/types";
//this page don't use custom hook for data fetching


const Orders = () => {
  const [data, setData] = useState<DataTypeForProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/carts/1");
        const fetchedData: DataTypeForProducts[] = response.data.products;
        setData(fetchedData);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Space size={20} direction="vertical" style={{ width: '100%'}}>
      <Typography.Title level={4}> Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span> $ {value}</span>
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => <span> $ {value}</span>

          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span> $ {value}</span>
          },
        ]}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          pageSize: 7,
        }}
        loading={isLoading}
      />
    </Space>
  );
};

export default Orders;
