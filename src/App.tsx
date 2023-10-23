import {Provider} from 'react-redux'
import './App.css'
import {store} from './rtk/store.ts';
import {Counter} from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <h1>redux-toolkit</h1>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
