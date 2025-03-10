import {PokemonDto} from '../../../rtk/api/pokemonApi/dto/PokemonDto.ts';
import {FC} from 'react';


interface PokemonCardProps {
  pokemon: PokemonDto
}

export const PokemonCard: FC<PokemonCardProps> = ({pokemon}) => {
  return (
    <div className="App">
      <h3>{pokemon.species.name}</h3>
      <img src={pokemon.sprites.front_shiny} alt={pokemon.species.name} />
    </div>
  )
}
