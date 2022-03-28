import { useState, createContext } from "react";
import { ReactDOM } from "react";

export const LayoutContext = createContext();

export default function LayoutProvider({ children }) {
  const context = {
    name: "John Snow",
    email: "john.snow@thewall.north",
    status: "Winter is coming",
  };
  const [sidePanelRightValue, setRight] = useState("-1000px");
  const [navBackColor, setNavBackColor] = useState("transparent");
  const [burgerDispaly, setBurger] = useState("initial");
  const [crossDisplay, setCross] = useState("none");
  function sideNav() {
    if (sidePanelRightValue == "0px") {
      setRight("-1000px");
      setNavBackColor("transparent");
      setBurger("initial");
      setCross("none");
    } else {
      setCross("initial");
      setBurger("none");
      setRight("0px");
      setNavBackColor("#1b1b26");
    }
  }

  return (
    <LayoutContext.Provider
      value={{
        context,
        sideNav,
        sidePanelRightValue,
        navBackColor,
        setNavBackColor,
        burgerDispaly,
        crossDisplay,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
