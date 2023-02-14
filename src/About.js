import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import DetailsPokemon from "./DetailsPokemon";
function About() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();
  const [url, setUrl] = useState(
    `https://api.pokemontcg.io/v2/cards/${id}`
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setLoading(false);
      setPokemon([res.data.data]);
      console.log([res.data.data])
    });
  }, [url]);
  if (loading) return <Loading />;

  return (
    <DetailsPokemon pokemon={pokemon} />

  );
}

export default About;
