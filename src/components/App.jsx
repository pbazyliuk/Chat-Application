import React from 'react'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Chats from './Chats'
import Login from './Login'
import Register from './Register'
import MessagesList from './MessagesList'
import PageNotFound from './PageNotFound'

class App extends React.Component {
  render () {
    return (
       <Router>
        <div>
          <Navbar />
          <hr/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/chats" render={() => (
              <Chats data={this.state}/>
            )}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/:params" component={PageNotFound}/>
          </Switch>
        </div>
    </Router>
    )
  }
}

export default App
