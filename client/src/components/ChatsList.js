import React from 'react'
import ChatsItem from './ChatsItem'
import preload from '../../public/chats.json'
import PropTypes from 'prop-types'

class ChatsList extends React.Component {
  render () {
    const isVisible = {
      display: 'none'
    }
    return (
      <ul className='chat-list' style={this.props.data.isMenuShown ? isVisible : {}}>
        {preload.chats.map(function (chat) {
          return (
            <ChatsItem key={chat.id} chat={chat} />
          )
        })}
      </ul>
    )
  }
}

ChatsList.propTypes = {
  data: PropTypes.object.isRequired,
  isMenuShown: PropTypes.bool
}

export default ChatsList
