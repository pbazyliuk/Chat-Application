import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link, match
} from 'react-router-dom'

class ChatsItem extends React.Component {
  render () {
      const { name, createdAt } = this.props.chat
    return (
        <li className="chat-list__item">
            {/*<Link to={`${match.url}`}>*/}
                <div className="avatar">
                    <img className="avatar__img" src="http://placehold.it/60x60" alt="avatar-image" />
                </div>
                <div className="chat-info" >
                    <h4 className="chat-name__heading">{name}</h4>
                    {/*<p class="user-info__text">Aldus Pagemaker including vers of Lorem ipsum</p>*/}
                </div>
                <div className="chat-last-activity"  >
                    {createdAt}
                </div>
            {/*</Link>*/}
        </li>
    )
  }
}

export default ChatsItem
