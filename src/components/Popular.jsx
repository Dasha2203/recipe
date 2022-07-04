import React, {useEffect, useState} from 'react';
import styled from "styled-components";
export const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);


    const getPopular = async () => {
        let api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        let data = await api.json();
        console.log('api .', data)
        setPopular(data.recipes);
    }
    return (
        <div>
            {popular.map(recipe => (
                <Wrapper>
                    <h3>Popular picks</h3>
                    {popular.map(recipe => (
                        <Card key={recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                        </Card>
                    ))}
                </Wrapper>
            ))}
        </div>
    );
};

const Wrapper = styled.div`
  margin: 4rem 0;
  
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  
  img {
    border-radius: 2rem;
  }
`;

