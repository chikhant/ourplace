import React from 'react'
//@ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './login'
import Home from './home'
import Character from './character/character'
import Place from './place/place'

const App = () => {
  return (
    <Router>
     <Switch>
       <Route exact path='/' component={Login} />
       <Route path='/home' component={Home} />
       <Route path='/character' component={Character} />
       <Route path='/place' component={Place} />
     </Switch>
    </Router>
  )
}

export default App