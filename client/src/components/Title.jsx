import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <StyledTitle>
      <header>JOKE TITLE?</header>
    </StyledTitle>
  );
}

export default Title;

const StyledTitle = styled.form`
  color: blue;
  font-size: 10em;
  text-align: center;
`;
