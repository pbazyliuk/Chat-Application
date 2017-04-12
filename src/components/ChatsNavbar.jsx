import React from 'react'

class ChatsNavbar extends React.Component {
  render () {
    return (
      <div className="chat-navbar">
        <span className="chat-navbar__btn-left-arrow"></span>
  
        <form action="" className="search-form">
             <input className="search-form__input" type="text" placeholder="Search" name="search-field"
             />

            <span className="search-form__btn-search"></span>
        </form>

            <span className="chat-navbar__btn-bars"></span>
        </div>
    )
  }
}

export default ChatsNavbar
