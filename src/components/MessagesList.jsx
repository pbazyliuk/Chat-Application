import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class MessagesList extends React.Component {
  render () {
    return (
        <div>
            <h3>MessagesList</h3>
            {/*<Route path={`${match.url}/:topicId`} component={Chats}/>
            <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
             )}/>*/}
        </div>
    )
  }
}

export default MessagesList
