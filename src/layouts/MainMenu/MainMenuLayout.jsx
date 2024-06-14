import React from "react";
import OptionsMenu from "../../components/MainMenu/OptionsMenu";
import ModuleWindow from "../../components/MainMenu/ModuleWindow";
import {
  faArrowRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MainMenuLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  //function to log out the user
  handleLogout() {
    localStorage.removeItem("token"); //remove verification token
    window.location.reload(); //Reload the page
  }
  render() {
    return (
      //design of the main page
      <div className="container-fluid ">
        <div className="row bg-dark">
          <div className="col-1">
            <h1
              className="text-white text-start  mt-2 text-logo "
              id="text-logo"
            >
              JUVENTUS
              <br />
              <span className="text-danger textLogo-span" id="textLogo-span">
                BAR
              </span>
            </h1>
          </div>
          <div className="col-9"></div>
          <div className="col-2 align-content-center">
            <button
              className=" btn btn-dark  border-black  text-light "
              id="logout"
              onClick={this.handleLogout}
            >
              Cerrar Sesión{" "}
              <FontAwesomeIcon
                htmlFor="logout"
                icon={faArrowRightFromBracket}
              />
            </button>
          </div>
        </div>
        <div className="row container-fluid p-0 ">
          <div className="col-2  p-0 div-openOptions">
            <button className="h-100 btn-optionsMenu btn btn-outline-dark d-flex justify-content-between align-items-center">
              <span className="flex-grow-1">Opciones</span>
              <FontAwesomeIcon className="" icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2  p-0">
            <OptionsMenu /* The component is rendered with the buttons of each module*/
            />
          </div>
          <div className="col-10 bg-white">
            <ModuleWindow /*The component that will display each module is rendered.*/
            />
            <div></div>
          </div>
        </div>
        <div className="row bg-dark mt-2">ds</div>
      </div>
    );
  }
}

export default MainMenuLayout;
