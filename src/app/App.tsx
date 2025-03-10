import { Col, Row, Spin } from 'antd';
import { AppLoader } from './AppLoader.tsx';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react';
import { AntdFormPage, HomePage, RtkQueryPage } from '../pages';
import { MainMenu } from '../components/MainMenu.tsx';
import { PAGE_UI_LINKS } from '../constants/pageUiLinks.ts';
import { PAGE_NAMES } from '../constants/pageNames.ts';

export function App() {
  return (
    <AppLoader>
      <Row gutter={16}>
        <Col span={24}>
          <MainMenu />
        </Col>
        <Col span={24}>
          <Suspense fallback={<Spin />}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path={PAGE_UI_LINKS[PAGE_NAMES.AntdForm]}>
                <AntdFormPage />
              </Route>
              <Route path={`${PAGE_UI_LINKS[PAGE_NAMES.RtkQuery]}`}>
                <RtkQueryPage />
              </Route>
            </Switch>
          </Suspense>
        </Col>
      </Row>
    </AppLoader>
  );
}
