import React from 'react'
import './Menu.css';

function Menu(props) {
  return (
    <div className="Menu d-block d-lg-none">
      <div className="FABMenu">
        <input type="checkbox" onClick={props.toggleLiveMenu}/>
        <div className="hamburger">
          <div className="dots">
            <span className="first" />
            <span className="second" />
            <span className="third" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
