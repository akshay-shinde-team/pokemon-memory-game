import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Scorecard } from './components/Scorecard'
import { Cardgrid } from './components/Cardgrid'
import { getPokemon } from './services/pokemonApi'
import { shuffleArray } from "./utils/shuffle";
function App() {
  const [score, setScore] = useState(0);
  const[bestScore, setbestScore] = useState(0)
  const[cards, setCards] = useState([]);
  const[clickedIds, setClickedIds] = useState([]);
 const handleCardClick = (id) => {

  if (clickedIds.includes(id)) {
    setScore(0);
    setClickedIds([]);
    return;
  }

  const newScore = score + 1;

  setScore(newScore);

  if (newScore > bestScore) {
    setbestScore(newScore);
  }

  setClickedIds([...clickedIds, id]);

  setCards(shuffleArray(cards));
};

//   const handleGetPokemon =  async () => {
//     try{
//     const pokemon = await getPokemon("ditto");

//     setCards([
//       {
//         id: pokemon.id,
//         name: pokemon.name,
//         image: pokemon.sprites.other["official-artwork"].front_default
//       }
//     ]);
//   }
//   catch (error){
//     console.log("Error fetching Pokemon", error);
//   }
// };

useEffect(() => {
  const loadPokemons = async () => {
    try{
        const pokemonList = await getPokemon();
        setCards(pokemonList);
    }
    catch (error){
      console.error("Error Fetching Pokemon")
    }
  };
  loadPokemons();
},[])
  return (
    <>
      <Header/>
      <Scorecard score={score} bestScore={bestScore} />
      <Cardgrid cards={cards} onCardClick={handleCardClick}/>
  
    </>
  )
}

export default App
