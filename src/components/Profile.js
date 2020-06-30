import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDescription from "./ProfileDescription";

function Profile() {
  return (
    <React.Fragment>
      <div class="row">
        <ProfileHeader />
      </div>
      <div class="row">
        <ProfileDescription />
      </div>
    </React.Fragment>
  );
}

export default Profile;