import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Topnav from "./components/topnav/Topnav";
import { Layout, Space } from 'antd';
const {Footer, Content } = Layout;


const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};


const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sidebar/>
      <Layout>
       <Topnav/>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Space>
);
export default App;