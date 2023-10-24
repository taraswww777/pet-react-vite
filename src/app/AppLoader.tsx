import {Provider} from 'react-redux'
import './App.css'
import {store} from '../rtk/store.ts';
import {PropsWithChildren} from 'react';

export const AppLoader = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
