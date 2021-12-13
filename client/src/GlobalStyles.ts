import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
  :root {
    --accentColor: #2998ff;
    --accentHoverColor: #1E88E5;
    --textColor: #fff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: var(--textColor);
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input,
  button,
  textarea,
  select{
    font: inherit;
  }

  button {
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;
