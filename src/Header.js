import React, {Component } from 'react'

 class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img srcSet="https://i.pinimg.com/originals/f2/57/78/f25778f30e29a96c44c4f72ef645aa63.png" className="App-logo" alt="logo" />
          <p>
            Find Restaurants in Ottawa
          </p>
        </header>
      </div>
    )
  }
}

export default Header
