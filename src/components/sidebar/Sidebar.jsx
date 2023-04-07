import React from 'react'
import SideMenu from "./SideMenu";
import SideLogo from "./SideLogo";
import { Layout } from 'antd';
const { Sider } = Layout;



const siderStyle = {
    textAlign: 'left',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  };

function sidebar() {
  return (
<Sider style={siderStyle}>
    <SideLogo/>
    <SideMenu/>
    </Sider>  )
}

export default sidebar