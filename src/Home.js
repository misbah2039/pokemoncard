import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import PokemonLists from "./PokemonLists";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(
    "https://api.pokemontcg.io/v2/cards?page=1&pageSize=100"
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setLoading(false);
      // console.log(res.data.data);
      setPokemon(res.data.data);
    });
  }, [url]);
  if (loading) return <Loading />;
  return <PokemonLists pokemon={pokemon} />
}

export default Home;
