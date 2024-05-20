import React from "react";
import LoginLayout from "../layouts/login/LoginLayout";
import LoginForm from "../components/login/LoginForm";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <LoginLayout
          loginForm={LoginForm} /*The LoginForm component is passed as a prop*/
        />
      </div>
    );
  }
}

export default LoginPage;
