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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createAccount();
        }}
      >
        <label>
          Email
          <input
            className="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            className="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input className="button" type="submit" value="Create Account" />
      </form>
      <input className="button" type="submit" value="Log In" onClick={logIn} />
    </StyledForm>
  );
}

const StyledForm = styled.div`
  margin: 12% auto;
  background-color: #f7f7f9;
  border: 3px solid #f1f1f1;
  width: 380px;
  height: 390px;
`;
