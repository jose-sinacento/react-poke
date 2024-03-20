import './App.css';
import { useStat, useEffect, useState } from 'react';



function App() {
  const [pokemonName, setPokmeonName] = useState('');

  function fetchPokemon(pokemon) {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(pokemonName)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Pokemon</label>
        <input type="text" id='nombre' name='nombre' value={pokemonName} onChange={(e) => setPokmeonName(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    </>
  )
};

export default App;

