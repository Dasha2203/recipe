import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";

import Card from "../components/Card";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const {search} = useParams();

  const getSearched = async () => {
    let api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`)
    let data = await api.json();
    console.log('api search.', data)
    setSearchedRecipes(data.results);
  }

  useEffect(() => {
    getSearched();
  }, [search]);

  return (
    <Grid>

      {
        searchedRecipes.length ?
          searchedRecipes.map(recipe => (
            <Card key={recipe.id} recipe={recipe}/>
          ))
          :
          'Not found'
      }

    </Grid>
  )
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;


export default Searched;