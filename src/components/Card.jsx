import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <SCard>
      <Link to={`/recipe/${recipe.id}`}>
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title}/>
        <Gradient/>
      </Link>
    </SCard>
  )
};

const SCard = styled.div`
  position: relative;
  min-height: 200px;
  border-radius: 2rem;
  overflow: hidden;
  
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  z-index: 3;
`;

export default Card;