import {pokemonApi} from '../../../rtk/api/pokemonApi';
import {Spin} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../rtk/hooks';
import {pokemonActions, pokemonSlice} from '../../../rtk/counter/pokemonSlice.ts';
import {useEffect} from 'react';

export const PokemonListWithDetailSubPage = () => {
  const dispatch = useAppDispatch();

  // const pokemonDetail = useAppSelector((state) => state.pokemon.detail)
  const selectedPokemonList = useAppSelector((state) => state.pokemon.list);

  console.log('pokemonSlice.actions:', pokemonSlice.actions)

  const init = () => dispatch(pokemonActions.customGetRandomPokemon());

  useEffect(() => {
    init();
  }, []);

  // const {data, isLoading} = pokemonApi.useGetPokemonListQuery(undefined);

  return (
    <div>

      <h2>pokemonList</h2>
      <p>selectedPokemonList: {JSON.stringify(selectedPokemonList)}</p>

      {/*{isLoading ? <Spin /> : (*/}
      {/*  <ul>*/}
      {/*    {data?.results?.map(({name}) => (<li key={name}>{name}</li>))}*/}
      {/*  </ul>*/}
      {/*)}*/}

      {/*<h2>pokemonDetail</h2>*/}
      {/*<pre>{JSON.stringify(pokemonDetail)}</pre>*/}
    </div>
  );
}
