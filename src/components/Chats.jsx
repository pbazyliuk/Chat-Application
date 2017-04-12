import React from 'react'
import ChatsNavbar from './ChatsNavbar'
import ChatsList from './ChatsList'
import ChatsDetailsNavbar from './ChatsDetailsNavbar'
import MessagesList from './MessagesList'
import MessageInput from './MessageInput'

class Chats extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <aside className="aside-part">
          <ChatsNavbar />
          <ChatsList />
        </aside>
        <div className="main-part">
          <ChatsDetailsNavbar></ChatsDetailsNavbar>
          <MessagesList></MessagesList>
          <MessageInput></MessageInput>
        </div>
    </div>
    )
  }
}

export default Chats