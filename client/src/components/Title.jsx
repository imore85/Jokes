import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <StyledTitle>
      <header>Jokester</header>
    </StyledTitle>
  );
}

export default Title;

const StyledTitle = styled.form`
  color: gray;
  font-size: 10em;
  text-align: center;
`;
