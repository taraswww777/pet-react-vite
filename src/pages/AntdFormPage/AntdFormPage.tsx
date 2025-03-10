import {Col, Divider, Row} from 'antd';
import {MyForm} from './components/MyForm';

const AntdFormPage = () => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Divider orientation="left">MyForm</Divider>
        <MyForm />
      </Col>
    </Row>
  )
}

export default AntdFormPage;
