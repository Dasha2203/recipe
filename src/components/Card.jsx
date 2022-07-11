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
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 12px;
    font-weight: 600;
    color: white;
    text-align: center;
    transform: translate(-50%, 0);
    
    @media (min-width: 640px) {
      font-size: 16px;
    }
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