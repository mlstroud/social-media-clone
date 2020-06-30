import React from "react";
import Profile from "./Profile";
import Posts from "./Posts";
import Contacts from "./Contacts";

function ContentContainer() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-md-4">
          <Profile />
        </div>
        <div class="col-md-4">
          <Posts />
        </div>
        <div class="col-md-4">
          <Contacts />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContentContainer;