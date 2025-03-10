import {Provider} from 'react-redux'
import {store} from '../rtk/store.ts';
import {PropsWithChildren} from 'react';
import {ConfigProvider, theme} from 'antd';
import {BrowserRouter} from 'react-router-dom';

export const AppLoader = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{algorithm: theme.darkAlgorithm,}}>
        <BrowserRouter basename={'/'}>
          {children}
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  )
}
