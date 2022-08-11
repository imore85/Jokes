import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import styled from 'styled-components';
import app from '../firebase';

export default function Signup({ setUser, setLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth(app);

  function createAccount() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.uid);
        setLogin(true);
        alert('Success');
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  }

  function logIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.uid);
        setLogin(true);
        alert('success');
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  }
  return (
    <StyledForm>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createAccount();
          }}
        >
          <StyledInput>
            <label>
              <input
                className="email"
                type="email"
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </StyledInput>
          <StyledInput>
            <label>
              <input
                className="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </StyledInput>
          <StyledInput>
            <input className="button" type="submit" value="Create Account" />
          </StyledInput>
        </form>
        <StyledInput>
          <input
            className="button"
            type="submit"
            color="green"
            value="Log In"
            onClick={logIn}
          />
        </StyledInput>
      </Container>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 40%;
  width: 20%;
  background: rgba(255, 255, 255, 0.15);
`;

const StyledInput = styled.div`
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
