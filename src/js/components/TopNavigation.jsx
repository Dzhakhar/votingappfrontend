import React from "react";

class TopNavigation extends React.Component {
  render(){
    return <nav className="top-navigation no-margin level">
      <p className="level-item item has-text-centered">
        <a className="link is-info">Home</a>
      </p>
      <p className="level-item item has-text-centered">
        <a className="link is-info">Menu</a>
      </p>
      <p className="level-item item has-text-centered">
        <img src="http://bulma.io/images/bulma-type.png" alt="" style={{height: "33px"}}></img>
      </p>
      <p className="level-item item has-text-centered">
        <a className="link is-info">Reservations</a>
      </p>
      <p className="level-item item has-text-centered">
        <a className="link is-info">Contact</a>
      </p>
    </nav>
  }
}

export default TopNavigation;
