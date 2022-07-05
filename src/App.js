import {Link} from "react-router-dom";
import styled from "styled-components";

import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

import {GiKnifeFork} from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork/>
            Delicious
          </Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  max-width: 1200px;
`;

const Logo = styled(Link)`
  font-family: 'Lobster Two', curisve;
  font-size: 32px;
  font-weight: 400;
  text-decoration: none;
  transition: all .3s ease;

  svg {
    font-size: 32px;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Nav = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
