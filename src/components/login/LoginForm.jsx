import React from "react";
import LogginButtons from "./LoginButtons";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import API_ROUTES from "../../configs/ApiEndpoints.js";
import { changeStateVerification } from "../../redux/slices/login/authLoginSlice";
import WindowAlert from "../miniComponents/WindowAlert";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeUser: false, //State to activate or deactivate administrator or employee button
      email: "", //state that saves the entered email
      password: "", //state that saves the entered password
      redirectToMenu: false, //redirigir al menu principal
      credentialsError: "false",
      windowAlert: false, //state that enables or disables the rendering of the alert window
    };
    //"this" is linked
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmite = this.handleSubmite.bind(this);
    this.handleStateTypeEmpleado = this.handleStateTypeEmpleado.bind(this);
    this.handleStateTypeAdmin = this.handleStateTypeAdmin.bind(this);
  }

  //Select whether you log in as admin or employee
  handleStateTypeEmpleado() {
    this.setState({
      typeUser: true,
    });
  }
  handleStateTypeAdmin() {
    this.setState({
      typeUser: false,
    });
  }
  //save password and username

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  //send the entered data to the server
  handleSubmite(event) {
    event.preventDefault(); //prevents page reloading
    this.setState({
      windowAlert: false,
    });
    //the entered data is saved in an object
    const data = {
      email: this.state.email.toString(),
      password: this.state.password.toString(),
    };
    //POST method that sends the data to the server
    fetch(API_ROUTES.sendKeysLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //sending data in json format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error sending data", response);
        }
        return response.json();
      })
      .then((data) => {
        //once the data sent was verified, the jwt security token was received
        const token = data.token; //save the received token
        //GET method that sends the token to the middleware that verifies the validity of the token and receives the confirmation
        fetch(API_ROUTES.sendTokenJwt, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, //send token with its authorization type
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error getting data");
            }
            return response.json();
          })
          .then((response) => {
            //If true is received, set redirectToMenu to true
            if (response) {
              //save the token
              const token = response.token;
              localStorage.setItem("token", token);
              this.setState({ redirectToMenu: true });
              //confirm entry authorization to activate the protected route
              this.props.changeStateVerification(true);
            }
          })
          .catch((error) => {
            console.error("Error getting data:", error);
          });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        //activate the windowAlert that indicates that the data entered is not valid
        this.setState({ windowAlert: true });
      });
    //reset the login inputs
    this.setState({ email: "", password: "" });
  }

  render() {
    //When the state changes, the label and the input and the placeHolder are updated
    const textTypeUser = this.state.typeUser
      ? "Numero Identificación"
      : "Correo";
    const placeHolderTypeUser = this.state.typeUser
      ? "Ingrese su numero de documento de identificación"
      : "Ingrese su correo electrónico registrado";

    //If redirectToMenu is true, redirect to the /menu path
    if (this.state.redirectToMenu) {
      return <Navigate to="/menu" />;
    }

    return (
      <div className="container-fluid justify-content-center bg-black row">
        <div>
          {" "}
          {this.state.windowAlert && (
            <WindowAlert
              buttonText="Aceptar"
              infoText="Error, Contraseña o usuario ingresados son incorrectos!!"
              borderColor="border-danger"
              dimensions="container  position-fixed top-50   start-50  translate-middle col-lg-3 h-25 bg-white d-flex flex-column justify-content-center align-items-center border rounded windowAler border-2  border-danger  p-0"
            />
          )}
        </div>
        <div
          className="container bg-white border rounded  border-danger  mt-4 mb-4 col-5 p-0 col-md-6-"
          id="col-md-6"
        >
          <LogginButtons
            //Send functions as props to the "LogginButtons" component
            handleStateTypeEmpleado={this.handleStateTypeEmpleado}
            handleStateTypeAdmin={this.handleStateTypeAdmin}
            //Send the status as props to the "LogginButtons" component
            typeUser={this.state.typeUser}
          />
          <div className="container-fluid">
            <h1 className="mb-5 mt-5">Iniciar Sesión</h1>
            <form onSubmit={this.handleSubmite}>
              <div className="form-group">
                <label
                  className="float-start label-loginText"
                  htmlFor="email"
                  id="label-loginText"
                >
                  {textTypeUser}
                </label>
                <input
                  className="form-control mb-5"
                  type="email"
                  value={this.state.email}
                  placeholder={placeHolderTypeUser}
                  id="email"
                  onChange={this.handleEmailChange}
                ></input>
              </div>
              <div className="form-group">
                <label
                  className="float-start label-loginText"
                  htmlFor="password"
                  id="label-loginText"
                >
                  Contraseña
                </label>
                <input
                  className="form-control mb-5"
                  type="password"
                  value={this.state.password}
                  placeholder="Ingrese su contraseña"
                  id="password"
                  onChange={this.handlePasswordChange}
                ></input>
              </div>
              <button
                className="mb-5 btn btn-light w-25 btn-outline-dark"
                type="submit"
                id="loginButton"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { changeStateVerification };

export default connect(null, mapDispatchToProps)(LoginForm);
