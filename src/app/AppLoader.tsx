import {Provider} from 'react-redux'
import {store} from '../rtk/store.ts';
import {PropsWithChildren} from 'react';
import {ConfigProvider, theme} from 'antd';

export const AppLoader = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{algorithm: theme.darkAlgorithm,}}>
        {children}
      </ConfigProvider>
    </Provider>
  )
}
