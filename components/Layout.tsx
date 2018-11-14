import * as React from 'react';
import { createGlobalStyle } from '../styles/styled-components';
import { ThemeProvider } from '../styles/styled-components';
import { theme } from '../styles/theme';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
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
