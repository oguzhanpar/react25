import { DashboardOutlined, UserOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SideMenu = () => { 
  const items = [
    {
      type: 'divider',
    }, 
    getItem('Genel', '1', <DashboardOutlined />),
    getItem('Cariler', '2', <UserOutlined />),
    getItem('Gelirler', '3', <ArrowDownOutlined />),
    getItem('Giderler', '4', <ArrowUpOutlined />),
    {
      type: 'divider',
    }, 
  ];
  
  return (
    <>
    <Menu
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
    </>
  );
};
export default SideMenu;