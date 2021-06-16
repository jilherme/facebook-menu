/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
/* import { ReactComponent as BellIcon } from './assets/icons/' */
import { icons, Arrow } from './assets/icons/';

function App() {
  return (
    <Navbar>
      <NavItem icon={<Arrow/>}/>
      <NavItem icon={<img src={icons.arrow}/>}/>
      <NavItem icon="🤡"/>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}
export default App;
