import React from "react";
import company_logo from "./images/company_logo.png";
import {
  faCircleQuestion,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//The final "Login" component is added and styled
class LoginLayout extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-white  p-0">
        <div className="row">
          <div className="col-12 bg-white">
            <img
              className="float-start img-fluid"
              src={company_logo}
              alt="Logo de la empresa"
              width="120px"
            />
          </div>
          <div className="col-12 p-0">
            <this.props.loginForm /*The "LoginForm" component received as prop*is rendered*/
            />
          </div>

          <div className="col-12 div-footer" id="div-footer">
            <div className="row">
              <div className="col-6">
                <a href="nothing">Ayuda</a>
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="fa-2x footer-icons"
                  id="footer-icons"
                />
              </div>
              <div className="col-6  ">
                {" "}
                <p>
                  {" "}
                  Calle XXXXX{" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="fa-2x footer-icons"
                    id="footer-icons"
                  />
                  <br /> N XXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginLayout;
