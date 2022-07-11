import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";


export const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
      getPopular();
  }, []);


  async function getPopular() {

    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
      return;
    }

    try {
      let api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      let data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));

      setPopular(data.recipes);

    } catch(err) {
      console.log('error', err);
    }
  }
    return (
      <Wrapper>
        <h3>Popular picks</h3>

        {!popular.length && 'Not found'}

        {popular.length && (
          <Splide
            options={{
              perPage: 5,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '1rem',
              breakpoints: {
                980: {
                  perPage: 3,
                },
                640: {
                  perPage: 2,
                },
              }
            }}
          >
            {popular.map(recipe => (
              <SplideSlide key={recipe.id}>
                <Card recipe={recipe}/>
              </SplideSlide>
            ))}
          </Splide>
        )}

      </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 30px 0;
`;


