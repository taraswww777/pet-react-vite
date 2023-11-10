import {pokemonApi} from "../../../rtk/api/pokemonApi"
import {PokemonCard} from './PokemonCard.tsx';
import {Alert, Spin} from 'antd';

export const PokemonBulbasaur = () => {
  const {data, error, isLoading} = pokemonApi.useGetPokemonByNameQuery('bulbasaur')

  return (
    <div className="App">
      {error && (<Alert message="Oh no, there was an error" type={'error'} />)}
      {isLoading && <Spin />}
      {data && <PokemonCard pokemon={data} />}
    </div>
  )
}
