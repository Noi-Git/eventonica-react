import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
      <nav>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">Eventonica-React</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Login with Google</a></li>
        </ul>
      </div>
    </nav>
      </div>
    )
  }
}

export default Header;