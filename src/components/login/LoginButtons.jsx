import React from "react";
import ResetPassword from "./ResetPassword";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class LogginButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWindow: false, //Status to activate password reset sale
    };
    //Se enlaza "this"
    this.handleActiveWindow = this.handleActiveWindow.bind(this);
    this.handleDesactiveWindow = this.handleDesactiveWindow.bind(this);
  }
  //Enable or disable the password reset window
  handleActiveWindow() {
    this.setState({
      activeWindow: true,
    });
  }
  handleDesactiveWindow() {
    this.setState({
      activeWindow: false,
    });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className={`w-50 btn-outline-warning ${
            this.props.typeUser
              ? "btn btn-light text-black"
              : "btn btn-dark text-white"
          }`}
          onClick={this.props.handleStateTypeAdmin}
        >
          ADMINISTRADOR
        </button>
        <button
          type="button"
          className={`w-50 btn-outline-warning ${
            this.props.typeUser
              ? "btn btn-dark text-white"
              : "btn btn-light text-black"
          }`}
          onClick={this.props.handleStateTypeEmpleado}
        >
          EMPLEADO
        </button>
        {this.props.typeUser && (
          <button
            className="btn btn-link btn-resetPassword"
            id="btn-resetPassword"
            onClick={this.handleActiveWindow}
          >
            {" "}
            <FontAwesomeIcon icon={faKey} />
            ¿Recuperar Contraseña?
          </button>
        )}
        {this.state.activeWindow === true && (
          <ResetPassword handleDesactiveWindow={this.handleDesactiveWindow} />
        )}
      </div>
    );
  }
}

export default LogginButtons;
