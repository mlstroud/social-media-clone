import React from "react";
import Profile from "./Profile";
import Posts from "./Posts";
import Contacts from "./Contacts";

function ContentContainer() {
  return (
    <React.Fragment>
      <Profile />
      <Posts />
      <Contacts />
    </React.Fragment>
  );
}

export default ContentContainer;