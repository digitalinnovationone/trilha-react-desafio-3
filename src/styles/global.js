import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    border-box: 0;
  }

  #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
  }
`;
