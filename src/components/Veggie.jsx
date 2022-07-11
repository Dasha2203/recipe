import React, {useState, useEffect} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  async function getVeggie() {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
      return;
    }

    try {
      let api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      let data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    } catch(err) {
      console.log('error: ', err)
    }
  }

  return (
    <Wrapper>
      <h3>Our vegetarian picks</h3>

      {!veggie.length && 'Not found'}

      {veggie.length && (
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem',
            breakpoints: {
              980: {
                perPage: 2,
              },
              640: {
                perPage: 1,
                gap: '1rem',
              },
            }
          }}
        >
          {veggie.map(recipe => (
            <SplideSlide key={recipe.id}>
              <Card recipe={recipe}/>
            </SplideSlide>
          ))}
        </Splide>
      )}

    </Wrapper>
  )
};

const Wrapper = styled.div`
  margin: 30px 0;
  
`;
export default Veggie;