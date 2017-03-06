import { setTheme, injectGlobal } from 'styled-elements';

setTheme({
  primary: '#4078c0',
  something: '#333',
});

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700");

  * {
    box-sizing: border-box;
  }

  body {
    font: normal normal normal normal 15px / 21.4286px "Source Sans Pro", Calibri, Candara, Arial, sans-serif;
  }

  h1 {
    font-size: 2em;
    margin-top: 0.67em;
    margin-right: 0px;
    margin-bottom: 0.67em;
    margin-left: 0px;
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: "Segoe UI", "Source Sans Pro", Calibri, Candara, Arial, sans-serif;
    font-weight: 300;
    line-height: 1.1;
    color: inherit;
  }

  h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 10.5px;
    margin-bottom: 10.5px;
  }

  h1, .h1 {
    font-size: 39px;
  }

  h2, .h2 {
    font-size: 32px;
  }

  h3, .h3 {
    font-size: 26px;
  }

  h4, .h4, h5, .h5, h6, .h6 {
    margin-top: 10.5px;
    margin-bottom: 10.5px;
  }

  h4, .h4 {
    font-size: 19px;
  }

  h5, .h5 {
    font-size: 15px;
  }

  h6, .h6 {
    font-size: 13px;
  }

  small {
    font-size: 80%;
  }

  small, .small {
    font-size: 86%;
  }

  p {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10.5px;
    margin-left: 0px;
  }

  hr {
    margin-top: 21px;
    margin-bottom: 21px;
    border: 0;
    border-top: 1px solid #e6e6e6;
  }

  a {
    background-color: transparent;
    color: rgb(39, 128, 227);
    text-decoration: none;
  }

  a:focus {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 5px;
    outline-offset: -2px;
  }
`;
