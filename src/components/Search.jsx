import React, {useState} from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
      </div>
    </FormStyle>
  )
};

const FormStyle = styled.form`
  position: relative;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 600px;
  
  div {
    position: relative;
    width: 100%;
  }
  
  input {
    padding: 15px 45px;
    width: 100%;
    font-size: 24px;
    color: white;
    border: none;
    border-radius: 16px;
    background: linear-gradient(35deg, #494949, #313131);
    outline: none;
  }
  
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;