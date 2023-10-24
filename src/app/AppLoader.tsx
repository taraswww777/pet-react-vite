import {Provider} from 'react-redux'
import {store} from '../rtk/store.ts';
import {PropsWithChildren} from 'react';
import {ConfigProvider} from 'antd';

export const AppLoader = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ConfigProvider>
        {children}
      </ConfigProvider>
    </Provider>
  )
}
