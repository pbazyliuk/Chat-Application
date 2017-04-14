import React from 'react'


class MessageInput extends React.Component {
  render () {
    return (
       <div className="message-input" contentEditable="true" suppressContentEditableWarning={true}>
            Type Something...
        </div>
    )
  }
}

export default MessageInput
