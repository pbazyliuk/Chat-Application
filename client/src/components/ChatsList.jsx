import React from 'react'
import ChatsItem from './ChatsItem'
import preload from '../../public/chats.json'
import {
  BrowserRouter as Router,
  Route,
  Link, match
} from 'react-router-dom'

class ChatsList extends React.Component {
    constructor(props) {
        super(props)
  }
  
  render () {
    const isVisible = {
        display: 'none'
    }

    return (
        <ul className="chat-list" style={this.props.data.isMenuShown ? isVisible : {}}>
            {preload.chats.map(function(chat) {
                return (
                    <ChatsItem  key={chat.id} chat={chat}>
                    </ChatsItem>
                )
            })}
        </ul>
    )
  }
}

export default ChatsList
