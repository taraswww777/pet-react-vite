import {Counter} from '../components/Counter';
import {Pokemon} from '../components/Pokemon.tsx';
import {Posts} from '../components/Posts.tsx';
import {AppLoader} from './AppLoader.tsx';

export function App() {
  return (
    <AppLoader>
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
    </AppLoader>
  )
}
