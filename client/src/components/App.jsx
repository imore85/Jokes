import React, { useState } from 'react';
import styled from 'styled-components';
import Main from './Main';
import Title from './Title';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Content>
        <Title />
        {login ? (
          <Main user={user} />
        ) : (
          <Signup setUser={setUser} setLogin={setLogin} />
        )}
      </Content>
    </Container>
  );
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
