import { setTheme, injectGlobal } from 'styled-elements';

setTheme({
  primary: '#4078c0',
  something: '#333',
});

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font: normal normal normal normal 15px / 21.4286px "Source Sans Pro", Calibri, Candara, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
