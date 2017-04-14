import React from 'react'
import * as moment from 'moment'

class Message extends React.Component {
    
  render () {
      const { text, sentAt } = this.props.message
    return (
      <li className="user-message">
                    <div className="user-message-wrapper">
                
                        <div className="avatar ">
                            <img className="avatar__img" src="http://placehold.it/60x60" alt="" />
                        </div>
                        <div className="user-message__text">
                            {this.props.message.text}
                        </div>
                    </div>

                    <div className="user-message__publication-date">
                        {moment(this.props.message.sentAt).format('h:mm')}
                    </div>
                </li>
    )
  }
}

export default Message
