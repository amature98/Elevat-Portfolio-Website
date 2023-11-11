import React from 'react'
import Router from './Routes'
import Themeconfig from './Themes'
import GlobalStyles from './Themes/Global.theme'

function App() {
  return (
    <Themeconfig>
      <GlobalStyles /> 
      <Router />
    </Themeconfig>
  )
}

export default App
