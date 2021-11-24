import React from "react";
import Navigation from "../Navigation/Navigation";
import headerStyles from "./header.module.scss";

function Header() {
  return (
    <div className={headerStyles.header}>
      <Navigation />
    </div>
  )
}

export default Header;