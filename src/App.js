/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { icons } from "./assets/icons/";
import { CSSTransition } from 'react-transition-group';

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

  const [activeMenu, setActiveMenu] = useState('main'); //settings, animals 

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu )}>
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary"> {/* when the prop "in" is truthy, it'll render the animated children | unmountOnExit will remove this children when they're not active | timeout defines the duration of the animation.*/}
        <div className={"menu"}>
        <DropdownItem>My profile</DropdownItem>
        <DropdownItem
          leftIcon={<icons.Cog />}
          rightIcon={<icons.Chevron />}
        >Settings</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary"> {/* when the prop "in" is truthy, it'll render the animated children | unmountOnExit will remove this children when they're not active | timeout defines the duration of the animation.*/}
        <div className={"menu"}>
        <DropdownItem>My profile</DropdownItem>
        <DropdownItem
          leftIcon={<icons.Cog />}
          rightIcon={<icons.Chevron />}
        ></DropdownItem>
        </div>
      </CSSTransition>
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
