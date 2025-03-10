import {Col, Row, Spin} from 'antd';
import {AppLoader} from './AppLoader.tsx';
import { Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import {AntdFormPage, HomePage, RtkQueryPage} from '../pages';
import {MainMenu} from '../components/MainMenu.tsx';
import {PAGE_UI_LINKS} from '../constants/pageUiLinks.ts';
import {PAGE_NAMES} from '../constants/pageNames.ts';

export function App() {
  return (
    <AppLoader>
      <Row gutter={16}>
        <Col span={24}>
          <MainMenu />
        </Col>
        <Col span={24}>
          <Suspense fallback={<Spin />}>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path={PAGE_UI_LINKS[PAGE_NAMES.AntdForm]} Component={AntdFormPage} />
              <Route path={`${PAGE_UI_LINKS[PAGE_NAMES.RtkQuery]}`} Component={RtkQueryPage} />
            </Routes>
          </Suspense>
        </Col>
      </Row>
    </AppLoader>
  )
}
