import useDataFetch from "../../customHooks/useFetchData";
import { Avatar, Space, Table, Typography } from "antd";

interface DataTypeForInventory {
  id: number;
}

const Customers = () => {
  const { data, isLoading } = useDataFetch(
    "https://dummyjson.com/users"
  );

  const dataToShow: DataTypeForInventory[] =
    data && data.users ? (data.users as DataTypeForInventory[]) : [];

  return (
    <Space size={20} direction="vertical" style={{ width: '100%'}}>
      <Typography.Title level={4}> Customer </Typography.Title>
      <Table
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => <Avatar src={link} size='large' />
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Gender",
            dataIndex: "gender",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => <span> {address.address}, {address.city} </span>

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

export default Customers;
