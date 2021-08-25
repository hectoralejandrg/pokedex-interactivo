import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../Service/apiPokemon";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [sprite, setSprite] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [order, setOrder] = useState("");
  useEffect(() => {
    fetchPokemon(`pokemon/${name}`).then((res) => {
      setSprite(res.data.sprites.front_default);
      setNamePokemon(res.data.name);
      setOrder(res.data.order);
      console.log(res.data);
    });
  }, [name]);
  return (
    <div className="card">
      <div>
        <img src={sprite} alt={`pokemon ${namePokemon}`} />
      </div>
      <div>
        <p className="title">{namePokemon}</p>
      </div>
      <div>
        <div>
          <p>#{order}</p>
        </div>
        <div>
          <FontAwesomeIcon className="love" icon={faHeart}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
