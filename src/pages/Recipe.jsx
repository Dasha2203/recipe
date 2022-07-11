import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Recipe = () => {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    let data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    let recipe = await data.json();

    setDetails(recipe)
  }

  useEffect(() => {
    fetchDetails();
  }, [id]);


  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  
  & > div {
    margin-bottom: 30px;
    width: 100%;
    
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  
  button.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  
  h2 {
    margin-bottom: 30px;
  }
  
  li {
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 18px;
  }
  
  ul {
    margin-top: 30px;
    padding-left: 15px;
  }
  
  @media (min-width: 980px) {
    margin-top: 50px;
    display: flex;
  }
`;

const Button = styled.button`
  margin-right: 30px;
  padding: 15px 30px;
  background: #fff;
  border: 2px solid black;
  font-weight: 600;
  color: #313131;
  cursor: pointer;
`;

const Info = styled.div`
  
  h3 {
    font-size: 14px;
    line-height: 16px;
    
    @media (min-width: 680px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
  
  @media (min-width: 980px) {
    margin-left: 30px;
  }
`;

export default Recipe;