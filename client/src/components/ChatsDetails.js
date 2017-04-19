import React from 'react'

import ChatsDetailsNavbar from './ChatsDetailsNavbar'
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'
import ChatsHolder from './ChatsHolder'

import { Route } from 'react-router-dom'

class ChatsDetails extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/chats' component={ChatsHolder} />
        <Route path='/chats/:id' render={({match}) => (
          <div>
            <ChatsDetailsNavbar />
            <MessagesList id={match.params.id} />
            <MessageInput />
          </div>
        )} />
      </div>
    )
  }
}

export default ChatsDetails
