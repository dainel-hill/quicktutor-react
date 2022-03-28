import React, { useContext,useState } from "react";
import NormalButton from "../NormalButton";
import { Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { LayoutContext } from "../../contexts/layout";
const NavBar = () => {
  const { context } = useContext(LayoutContext);
  const {
    sideNav,
    navBackColor,
    burgerDispaly,
    crossDisplay,
    setNavBackColor,
  } = useContext(LayoutContext);
  const [dropDownDisplay, setDropDownDisplay] = useState("none");
  const [brandImgDisplay, setBrandImgDisplay] = useState("block");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setNavBackColor("#1b1b26");
      setDropDownDisplay("block");
      setBrandImgDisplay("none");
    } else {
      setNavBackColor("transparent");
      setDropDownDisplay("none");
      setBrandImgDisplay("block");
    }
  }
  return (
    <>
      <Navbar className="" style={{ backgroundColor: navBackColor }}>
        <div className="container">
          <NavbarBrand href="/">
            <img style={{display:brandImgDisplay}}
              className="white-img"
              src={"assets/image/a216b605626b87ed5097b77216439dcb.svg"}
            />
            <img style={{display:dropDownDisplay}}
              className="special-img"
              src={"assets/image/d8cdb7a12ed7538612e66612979a6e41.svg"}
            />
          </NavbarBrand>
          <div className="nav-Learn">
            <NavLink>Learn</NavLink>
          </div>
          <div className="nav-Teach">
            <NavLink>Teach</NavLink>
          </div>
          <div className="dropdown" style={{display:dropDownDisplay}}>
            <NormalButton
              class="dropbtn"
              value="Get the app"
              imageDisplay="none"
            />
            <div className="triangle-up"></div>
            <div className="dropdown-content">
              <a href="#">
                <img src={"assets/icons/apple.svg"} />
              </a>
              <a className="between">|</a>
              <a href="#">
                <img src={"assets/icons/google.svg"} />
              </a>
            </div>
          </div>
          <NormalButton class={"login"} value={"Login"} imageDisplay="none" />
          <NormalButton
            class={"Register"}
            value={"Register"}
            imageDisplay="none"
          />
          <button className="navbar-toggler" onClick={sideNav} type="button">
            <img
              className="brrger"
              src={"assets/icons/burger@1x.svg"}
              style={{ display: burgerDispaly }}
            />
            <img
              className="cross"
              src={"assets/icons/cross@1x.svg"}
              style={{ display: crossDisplay }}
            />
          </button>
        </div>
      </Navbar>
    </>
  );
};
export default NavBar;
