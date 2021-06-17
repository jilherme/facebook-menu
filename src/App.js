/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { icons } from "./assets/icons/";
import { CSSTransition } from "react-transission-group";

function App() {
  return (
    <Navbar>
      <NavItem icon={<icons.Plus />} />
      <NavItem icon={<icons.Bell />} />
      <NavItem icon={<icons.Messenger />} />

      <NavItem icon={<icons.Caret />}>
        {/* Dropdown goes here */}
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem>My profile</DropdownItem>
      <DropdownItem
        leftIcon={<icons.Cog />}
        rightIcon={<icons.Chevron />}
      ></DropdownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false /* default value of the state */);
  //    [state, () => that changes the state ]

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
export default App;
