import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [pokemonName, setPokmeonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(pokemonName)
  };

  const fetchPokemon = async (name) => {
    try {
      const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokemon not found!')
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setPokemonData(null);
    } 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Pokemon</label>
        <input type="text" id='nombre' name='nombre' value={pokemonName} onChange={(e) => setPokmeonName(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      <div className='pokemon-div'>
        {pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          </div>
        )}
      </div>
    </>
  )
};

export default App;
