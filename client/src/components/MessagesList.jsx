import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Message from './Message'

import MESSAGES from '../../public/messages.js'


class MessagesList extends React.Component {
    constructor(props) {
        super(props)
        
    }
  render () {
      
    return (
        <div>
           
            <div>ID: {this.props.id}</div>
            {/*<Route path={`${match.url}/:topicId`} component={Chats}/>
            <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
             )}/>*/}
             <ul className="message-list">
                 {MESSAGES.map((message) => {
                     
                     if(message.chatId === (+this.props.id)) {
                        return (
                       <Message key={message.id} message={message}></Message>
                       
                       )
                     }
                })}
            </ul>
        </div>
    )
  }
}

export default MessagesList
