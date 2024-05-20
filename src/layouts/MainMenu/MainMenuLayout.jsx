import React from "react";
import OptionsMenu from "../../components/MainMenu/OptionsMenu";
import ModuleWindow from "../../components/MainMenu/ModuleWindow";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MainMenuLayout extends React.Component {
  render() {
    return (
      //design of the main page
      <div className="container-fluid ">
        <div className="row bg-dark">
          <div class="col-1">
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
