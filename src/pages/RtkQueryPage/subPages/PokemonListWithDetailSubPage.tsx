import {useAppSelector} from '../../../rtk/hooks';
// import {useAppDispatch, useAppSelector} from '../../../rtk/hooks';
// import {pokemonSlice} from '../../../rtk/counter/pokemonSlice.ts';

export const PokemonListWithDetailSubPage = () => {
  // const dispatch = useAppDispatch();

  const pokemonDetail = useAppSelector((state) => state.pokemon.detail)
  const pokemonList = useAppSelector((state) => state.pokemon.list)

  // const init = () => dispatch(pokemonSlice.actions.increment());


  return (
    <div>
      <h2>pokemonDetail</h2>
      <pre>{JSON.stringify(pokemonDetail)}</pre>

      <h2>pokemonList</h2>
      <pre>{JSON.stringify(pokemonList)}</pre>
    </div>
  );
}
