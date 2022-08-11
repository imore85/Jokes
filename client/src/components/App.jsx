import React, { useState } from 'react';
import Main from './Main';
import Title from './Title';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Title />
      {login ? (
        <Main user={user} />
      ) : (
        <Signup setUser={setUser} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
