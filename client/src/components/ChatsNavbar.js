import React from 'react'
import PropTypes from 'prop-types'

class ChatsNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleMenuShow = this.handleMenuShow.bind(this)
  }

  handleSizeChange () {
    // if(this.props.data.isMenuShown) return;
    this.props.onSizeChange()
  }

  handleMenuShow () {
    this.props.onMenuShow()
  }

  render () {
    // const collapseWidth = {
    //   width: '108px',
    //   overflow: 'hidden'
    // }

    const isVisible = {
      display: 'none'
    }

    const rotated = {
      transform: 'rotate(-90deg)',
      justifyContent: 'center'
    }

    const centered = {
      justifyContent: 'center'
    }

    const disabled = {
      pointerEvents: 'none'
    }

    return (
      <div className='chat-navbar' style={this.props.data.isToggleOn ? centered : {}}>
        <span onClick={this.handleSizeChange} className='chat-navbar__btn-left-arrow' style={(!this.props.data.isMenuShown) ? ((this.props.data.isToggleOn) ? rotated : {}) : disabled} />

        <form action='' className='search-form' style={this.props.data.isToggleOn ? isVisible : {}}>
          <input className='search-form__input' type='text' placeholder='Search' name='search-field' />
          <span className='search-form__btn-search' />
        </form>

        <div style={this.props.data.isToggleOn ? isVisible : {}}>
          <span onClick={this.handleMenuShow} className='chat-navbar__btn-bars' style={this.props.data.isMenuShown ? isVisible : {}} />
          <span onClick={this.handleMenuShow} className='chat-navbar__btn-close' style={!this.props.data.isMenuShown ? isVisible : {}} />
        </div>
      </div>
    )
  }
}

ChatsNavbar.propTypes = {
  data: PropTypes.object.isRequired,
  isMenuShown: PropTypes.bool,
  isToggleOn: PropTypes.bool,
  onSizeChange: PropTypes.func.isRequired,
  onMenuShow: PropTypes.func.isRequired
}

export default ChatsNavbar
