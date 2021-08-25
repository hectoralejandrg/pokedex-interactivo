import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { fetchPokemon } from "./Service/apiPokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchPokemon("pokemon").then((res) => {
      setPokemon(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  const list = pokemon.map((element, index) => <Card name={element.name} key={index}/>);
  return <div className="App">{ list }</div>;
}

export default App;
