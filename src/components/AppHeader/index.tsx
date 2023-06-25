//sample image
import samuGirl from '../../assets/samu-girl.jpg';

//antd
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Image, Typography, Space, Badge, Drawer } from "antd";
import useDataFetch from '../../customHooks/useFetchData';
import { useState } from 'react';

function AppHeader() {
  const [ drawerOpen, setDrawerOpen ] = useState(false)
  const { data } = useDataFetch('https://dummyjson.com/comments');

  const numOfNoti: object[] = data.comments || [];
 
  return (
    <div className="AppHeader">
      <Image width={40} src={samuGirl} ></Image>

      <Typography.Title> Shine's Dashboard </Typography.Title>

      <Space >
        <Badge 
          count={4} 
          dot
          
        >
          <MailOutlined style={{ fontSize: 24 }} onClick={() => setDrawerOpen(true)} />
        </Badge>
        <Badge count={numOfNoti.length} >
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
      <Drawer 
        title={"Comments"} 
        open={drawerOpen}
        onClose={()=> setDrawerOpen(false)}
        maskClosable
      ></Drawer>
    </div>
  )
}

export default AppHeader;