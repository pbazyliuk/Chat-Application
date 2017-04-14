import React from 'react'

class ChatsMenu extends React.Component {
    constructor(props) {
        super(props)
    }
  render () {
         const isVisible = {
        display: 'none'
    }
    return (
      <div className="user-menu" style={!this.props.data.isMenuShown ? isVisible : {}}>

                    <div className="user-menu__item">
                        <input type="checkbox" id="btn-account-info" />
                        <label htmlFor="btn-account-info" className="btn-arrow-label-sm">
                            Add User
                            <span className="btn-arrow-sm"></span>
                        </label>
                        <div className="user-menu__item-info">
                            <form action="">
                                    <input type="text" placeholder="Find User" />
                                    <input type="submit" value="Find" />
                            </form>
                        </div>
                    </div>

                    <div className="user-menu__item">
                         <input type="checkbox" id="btn-settings" />
                         <label htmlFor="btn-settings" className="btn-arrow-label-sm">
                            Add Chat
                            <span className="btn-arrow-sm"></span>
                        </label>
                         <div className="user-menu__item-info">
                             <form className="form-add-chat" action="">
                                    <select name="" id="" multiple>
                                        <option disabled defaultValue>Choose friend</option>
                                        <option value="sam">Sam</option>
                                        <option value="max">Max</option>
                                        <option value="andrew">Andrew</option>
                                    </select>
                                    <br/>
                                    <input type="submit" value="Add Chat" />
                            </form>
                        </div>
                    </div>  

                </div> 
    )
  }
}

export default ChatsMenu
