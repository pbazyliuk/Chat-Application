import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link, match
} from 'react-router-dom'

class ChatsItem extends React.Component {
  render () {
      const { id, name, createdAt } = this.props.chat
    return (
        <Link to={`/chats/${id}`}>
        <li className="chat-list__item">
                          
                <div className="avatar">
                    <img className="avatar__img" src="http://placehold.it/60x60" alt="avatar-image" />
                </div>
                <div className="chat-info" >
                    <h4 className="chat-name__heading">{name}</h4>
                </div>
                <div className="chat-last-activity"  >
                    {createdAt}
                </div>
                  
        </li>
        </Link>
    )
  }
}

export default ChatsItem
