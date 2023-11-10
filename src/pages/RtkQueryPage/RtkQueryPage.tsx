import {Col, Divider, Row} from 'antd';
import {Counter} from './components/Counter.tsx';
import {Pokemon} from './components/Pokemon.tsx';
import {Posts} from './components/Posts.tsx';
import {PokemonListWithDetailSubPage} from './subPages/PokemonListWithDetailSubPage';

const RtkQueryPage = () => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <h1>redux-toolkit</h1>
      </Col>
      {false && (
        <>
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
        </>
      )}

      <Col span={24}>
        <Divider orientation="left">PokemonListWithDetailSubPage</Divider>

        <PokemonListWithDetailSubPage />
      </Col>
    </Row>
  )
}

export default RtkQueryPage;
