import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  white: '#FBF6F1',
  yellow: '#FED97E',
  orange: '#FDA462',
  grey: '#494961',
  green: '#28CF93',
  greenDark: '#1C6979',
  pink: '#F6416C',
  black: '#050406',
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);