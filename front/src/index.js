import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import './global.css'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Main />
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))