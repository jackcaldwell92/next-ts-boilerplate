import * as React from 'react';
import { createGlobalStyle } from '../styles/styled-components';
import { ThemeProvider } from '../styles/styled-components';
import { theme } from '../styles/theme';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
  body {
    margin: 0px;
    padding: 0px;
    background-color: ${props => props.theme.darkGrey};
    font-family: 'Open Sans Condensed';
  }
`;

export const Layout = (props: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      {props.children}
      <GlobalStyle />
    </div>
  </ThemeProvider>
);
