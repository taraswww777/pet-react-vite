import {Col, Divider, Row} from 'antd';
import {Counter} from '../components/Counter';
import {Pokemon} from '../components/Pokemon.tsx';
import {Posts} from '../components/Posts.tsx';
import {AppLoader} from './AppLoader.tsx';

export function App() {
  return (
    <AppLoader>
      <Row gutter={16}>
        <Col span={24}>
          <h1>redux-toolkit</h1>
        </Col>
        <Col span={24}>
          <Divider orientation="left">Counter</Divider>
          <Counter />
        </Col>
        <Col span={24}>
          <Divider orientation="left">Pokemon</Divider>
          <Pokemon />
        </Col>
        <Col span={24}>
          <Divider orientation="left">Posts</Divider>
          <Posts />
        </Col>
      </Row>
    </AppLoader>
  )
}
