import {Provider} from 'react-redux'
import './App.css'
import {store} from './rtk/store.ts';
import {Counter} from './components/Counter';
import {Pokemon} from './components/Pokemon.tsx';
import {Posts} from './components/Posts.tsx';

function App() {
  return (
    <Provider store={store}>
      <h1>redux-toolkit</h1>
      <div>
        <Counter />
      </div>
      <div>
        <Pokemon />
      </div>
      <div>
        <Posts />
      </div>
    </Provider>
  )
}

export default App
