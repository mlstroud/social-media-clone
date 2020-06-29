import React from "react";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";

function Header() {
  return (
    <React.Fragment>
      <NavLink />
      <NavLink />
      <NavLink />
      <SearchBar />
      <Tweet />
      <hr />
    </React.Fragment>
  );
}

export default Header;