import React, { useState, useEffect, useRef } from "react"; // To manage state
import { icons } from "./assets/icons/";
import { CSSTransition } from "react-transition-group";

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

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main"); //settings, animals
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight; //actual height in pixels of the element.
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className="dropdown"
      style={{ height: menuHeight }}
      ref={{ dropdownRef }}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight} // calls the callbacks as soon as the enter class is added to the element
        classNames="menu-primary"
      >
        {/* when the prop "in" is truthy, it'll render the animated children | unmountOnExit will remove this children when they're not active | timeout defines the duration of the animation.*/}
        <div className="menu">
          <DropdownItem>My profile</DropdownItem>
          <DropdownItem
            leftIcon={<icons.Cog />}
            rightIcon={<icons.Chevron />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<icons.Chevron />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        {/* when the prop "in" is truthy, it'll render the animated children | unmountOnExit will remove this children when they're not active | timeout defines the duration of the animation.*/}
        <div className="menu">
          <DropdownItem leftIcon={<icons.Arrow />} goToMenu="main" />
          <h2>Secondary Menu</h2>
          <DropdownItem leftIcon={<icons.Bolt />}>Thunder</DropdownItem>
          <DropdownItem leftIcon={<icons.Cog />}>Settings</DropdownItem>
          <DropdownItem leftIcon={"👹"} rightIcon={"👺"}>
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={"🐱‍👤"}>Exit</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;