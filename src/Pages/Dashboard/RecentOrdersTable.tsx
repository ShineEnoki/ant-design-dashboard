//antd
import { Card, Table, Typography } from "antd";
import useDataFetch from "../../customHooks/useFetchData";

interface DataTypeForTable {
  id?: string;
  title?: string;
  quantity?: number;
  discountedPrice?: number;
}

const RecentOrdersTable = () => {
  const { data, isLoading, error } = useDataFetch(
    "https://dummyjson.com/carts/1"
  );

  if (error) {
    alert(error.message);
  }

  const dataToShow: DataTypeForTable[] =
    data && data.products ? data.products.slice(0, 3) : [];

  return (
    <Card style={{ height: 420, minWidth: 500 }}>
      <Typography.Title level={4}> RecentOrdersTable </Typography.Title>
      
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
              dataIndex: "discountedPrice",
            },
          ]}
          dataSource={dataToShow.map((item) => ({ ...item, key: item.id }))}
          loading={isLoading}
        />
    </Card>
  );
};

export default RecentOrdersTable;
