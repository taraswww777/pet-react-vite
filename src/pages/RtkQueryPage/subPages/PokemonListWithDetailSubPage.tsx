import {useAppSelector} from '../../../rtk/hooks';
import {pokemonApi} from '../../../rtk/api/pokemonApi';
import {Spin} from 'antd';
import {PokemonCard} from '../components/PokemonCard.tsx';
// import {useAppDispatch, useAppSelector} from '../../../rtk/hooks';
// import {pokemonSlice} from '../../../rtk/counter/pokemonSlice.ts';

export const PokemonListWithDetailSubPage = () => {
  // const dispatch = useAppDispatch();

  const pokemonDetail = useAppSelector((state) => state.pokemon.detail)
  const pokemonList = useAppSelector((state) => state.pokemon.list)

  // const init = () => dispatch(pokemonSlice.actions.increment());

  const {data, isLoading} = pokemonApi.useGetPokemonListQuery(undefined);

  return (
    <div>

      <h2>pokemonList</h2>
      <pre>selected: {JSON.stringify(pokemonList)}</pre>

      {isLoading ? <Spin /> : (
        <ul>
          {data?.results?.map(({name}) => (<li>{name}</li>))}
        </ul>
      )}
      <p>{JSON.stringify(data)}</p>

      <h2>pokemonDetail</h2>
      <pre>{JSON.stringify(pokemonDetail)}</pre>
    </div>
  );
}
