/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpeechSynthesis } from 'react-speech-kit';

const axios = require('axios');

function Main({ user }) {
  const [category, setCategory] = useState();
  const { speak, voices } = useSpeechSynthesis();
  const [joke, setJoke] = useState();

  function getJoke(type) {
    switch (type) {
      case 'Chuck':
        axios({
          method: 'get',
          url: 'https://api.chucknorris.io/jokes/random',
        })
          .then((chuckData) => setJoke(chuckData.data.value))
          .catch((err) => console.log(err));
        break;
      case 'Dad':
        axios({
          method: 'get',
          url: 'https://icanhazdadjoke.com/slack',
        })
          .then((dadData) => setJoke(dadData.data.attachments[0].fallback))
          .catch((err) => console.log(err));
        break;
      case 'Programming':
        axios({
          method: 'get',
          url: `https://v2.jokeapi.dev/joke/${type}?type=single&blacklistFlags=nsfw,racist`,
        })
          .then((jokedata) => setJoke(jokedata.data.joke))
          .catch((err) => console.log(err));
        break;
      case 'Pun':
        axios({
          method: 'get',
          url: `https://v2.jokeapi.dev/joke/${type}?type=single&blacklistFlags=nsfw,racist`,
        })
          .then((jokedata) => setJoke(jokedata.data.joke))
          .catch((err) => console.log(err));
        break;
      case 'MyLibrary':
        axios({
          method: 'get',
          url: `http://localhost:3000/getjoke?name=${user}`,
        })
          .then((mydata) => setJoke(mydata.data))
          .catch((err) => console.log(err));
        break;
      default:
        console.log('error');
    }
  }

  function saveJoke(currentjoke) {
    if (currentjoke) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/addjoke',
        data: {
          name: user,
          jokes: [currentjoke],
        },
      })
        .then(() => alert('saved'))
        .catch((err) => console.log(err));
    }
  }

  return (
    <StyledForm>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          getJoke(e.target.value);
        }}
      >
        <option value="">Pick a Category</option>
        <option value="MyLibrary">My Library</option>
        <option value="Chuck">Chuck Norris</option>
        <option value="Dad">Dad Jokes</option>
        <option value="Programming">Programming</option>
        <option value="Pun">Pun</option>
      </select>
      <div>{joke}</div>
      <button type="submit" onClick={() => getJoke(category)}>
        Next
      </button>
      <button
        type="submit"
        onClick={(e) => {
          saveJoke(joke);
          e.preventDefault();
        }}
      >
        Save
      </button>
      <button
        type="submit"
        onClick={() => speak({ text: joke, voice: voices[17] })}
      >
        Speech
      </button>
    </StyledForm>
  );
}

export default Main;

const StyledForm = styled.div`
  text-align: center;
`;
