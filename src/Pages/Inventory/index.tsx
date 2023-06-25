import useDataFetch from "../../customHooks/useFetchData";
import { Avatar, Rate, Space, Table, Typography } from "antd";

interface DataTypeForInventory {
  id: number;
}

const Inventory = () => {
  const { data, isLoading } = useDataFetch(
    "https://dummyjson.com/products"
  );

  const dataToShow: DataTypeForInventory[] =
    data && data.products ? (data.products as DataTypeForInventory[]) : [];

  return (
    <Space size={20} direction="vertical" style={{ width: '100%'}}>
      <Typography.Title level={4}> Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => <Avatar src={link} size='large' />
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span> $ {value}</span>
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (value) => <Rate value={value} allowHalf disabled />
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataToShow.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          pageSize: 7,
        }}
        loading={isLoading}
      />
    </Space>
  );
};

export default Inventory;
