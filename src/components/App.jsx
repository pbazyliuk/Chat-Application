import React from 'react'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Chats from './Chats'
import Login from './Login'
import Register from './Register'


class App extends React.Component {
  render () {
    return (
       <Router>
        <div>
          <Navbar />
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/chats" component={Chats}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
    </Router>
    )
  }
}

export default App
