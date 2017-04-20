import React from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Chats from './Chats'
import Login from './auth/Login'
import Register from './auth/Register'
import Logout from './auth/Logout'

import PageNotFound from './PageNotFound'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/chats' render={() => (
            <Chats data={this.state} />
          )} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
          <Route path='/:params' component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
