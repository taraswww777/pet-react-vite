import {Provider} from 'react-redux'
import './App.css'
import {store} from './rtk/store.ts';

function App() {
  return (
    <Provider store={store}>
      <h1>redux-toolkit</h1>
    </Provider>
  )
}

export default App
