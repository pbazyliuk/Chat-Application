import React from 'react'
import ChatsItem from './ChatsItem'
import preload from '../../public/chats.json'

class ChatsList extends React.Component {
  render () {
    return (
        <ul className="chat-list">
            {preload.chats.map(function(chat) {
                return (
                   <ChatsItem  key={chat.id} chat={chat}></ChatsItem>
                )
            })}
        </ul>
    )
  }
}

export default ChatsList
