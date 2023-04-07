import React from 'react'
import { Row, Col, Layout} from 'antd';

const { Header} = Layout;

  
function Topnav() {
  return (
    <Header>
         <Row justify="space-around" align="middle">
      <Col span={4}>
        dasdas
      </Col>
      <Col span={4}>
        asda
      </Col>
      <Col span={4}>
        dasda
      </Col>
      <Col span={4}>
       dasdsa
      </Col>
    </Row>
    </Header>
  )
}

export default Topnav