import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import {GiNoodles, GiChopsticks} from 'react-icons/gi';

const Category = () => (
  <List>
    <SLink to={'/cuisine/Italian'}>
      <FaPizzaSlice/>
      <h4>Italian</h4>
    </SLink>
    <SLink to={'/cuisine/American'}>
      <FaHamburger/>
      <h4>American</h4>
    </SLink>
    <SLink to={'/cuisine/Thai'}>
      <GiNoodles/>
      <h4>Thai</h4>
    </SLink>
    <SLink to={'/cuisine/Japanese'}>
      <GiChopsticks/>
      <h4>Japanese</h4>
    </SLink>
  </List>
);

const List = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const SLink = styled(NavLink)`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.9);
  transition: all .3s ease;
  
 

  &:hover {
    transform: scale(1);
  }
  
  h4 {
    color: #fff;
    font-size: 10px;
  }
  
  svg {
    color: #fff;
    font-size: 18px;
  }
  
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    transition: all .3s ease;
    
    svg {
      color: #fff;
    }
    
    h4 {
      color: #fff;
    }
  }
  
  @media (min-width: 768px) {
    margin: 0 15px;
    width: 100px;
    height: 100px;
    
    h4 {
      font-size: 14px;
    }

    svg {
      font-size: 24px;
    }
  }
  
`;
export default Category;