import React from "react";
import UserManagement from "./Modules/userManagement/UserManagement";
class ModuleWindow extends React.Component {
  render() {
    //the ""UserManagement" component is rendered
    return (
      <div className="div-moduleWindow ">
        {" "}
        <UserManagement />
      </div>
    );
  }
}

export default ModuleWindow;
