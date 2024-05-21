import React from "react";
import UserSearch from "../UserSearch";
import WindowAlert from "../../../miniComponents/WindowAlert";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true, //state that activates its respective window
      windowAlert: false, //this state activate the alert window
      userNames: "",
      lastNames: "",
      typeIdentification: "Cedula de Ciudadania",
      identification: "",
      phoneNumber: "",
      birthdate: "",
      email: "",
      employeeRole: "",
      bank: "",
      accountNumber: "",
    };
    //bind this in the function
    this.handlebuttonState = this.handlebuttonState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //function activates the respective window
  handlebuttonState() {
    this.setState((prevState) => ({
      buttonState: !prevState.buttonState,
    }));
  }

  //function that send the form information
  handleSubmit(event) {
    event.preventDefault(); //prevents page reloading

    const data = {
      userNames: this.state.userNames,
      lastNames: this.state.lastNames,
      typeIdentification: this.state.typeIdentification,
      identification: this.state.identification,
      phoneNumber: this.state.phoneNumber,
      birthdate: this.state.birthdate,
      email: this.state.email,
      employeeRole: this.state.employeeRole,
      bank: this.state.bank,
      accountNumber: this.state.accountNumber,
    };

    fetch("https://sgrh-server-128231344b73.herokuapp.com/menu/createUsers", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok", response);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Successfully created user") {
          this.setState({ windowAlert: true });
        } else {
          console.log("error,can't create user");
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  }

  renderContent() {
    //render the content according to the state
    if (this.state.buttonState) {
      return (
        <div className="container">
          <div>
            {this.state.windowAlert && (
              <WindowAlert
                buttonText="OK"
                infoText="Usuario creado con exito!!"
                borderColor="border-success"
              />
            )}
          </div>

          <h1>Datos Personales</h1>
          <div className="container fluid p-0 mt-4">
            <form onSubmit={this.handleSubmit}>
              <div className="row justify-content-md-center">
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <label htmlFor="nombres" className="text-start">
                      Nombres
                    </label>
                    <input
                      id="nombres"
                      className="form-control border-dark mx-auto"
                      type="text"
                      placeholder="Nombres completos del usuario"
                      onChange={(event) =>
                        this.setState({ userNames: event.target.value })
                      }
                      value={this.state.userNames}
                    />
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="d-flex flex-column">
                    <label htmlFor="apellidos" className="text-start">
                      Apellidos
                    </label>
                    <input
                      id="apellidos"
                      className=" form-control border-dark mx-auto"
                      type="text"
                      placeholder="Apellidos completos del usuario  "
                      onChange={(event) =>
                        this.setState({ lastNames: event.target.value })
                      }
                      value={this.state.lastNames}
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-md-center mt-4">
                <div className="col-4">
                  <div className=" flex-column">
                    <label className="text-start" htmlFor="identification">
                      Tipo de Identificacíon
                    </label>
                    <select
                      className="form-select border-dark"
                      id="identification"
                      value={this.state.typeIdentification}
                      onChange={(event) =>
                        this.setState({
                          typeIdentification: event.target.value,
                        })
                      }
                    >
                      <option value="Cedula de Ciudadania">
                        Cedula de Ciudadania
                      </option>
                      <option value="Cedula Extranjera">
                        Cedula Extranjera
                      </option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="Documento de identificación nacional pasaporte">
                        Documento de identificación nacional pasaporte
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="d-flex flex-column">
                    <label
                      htmlFor="numero-identificacion"
                      className="  text-start"
                    >
                      Identificación
                    </label>
                    <input
                      id="numero-identificacion"
                      className=" form-control border-dark mx-auto"
                      type="text"
                      placeholder="Numero de identificación de el usuario"
                      onChange={(event) =>
                        this.setState({ identification: event.target.value })
                      }
                      value={this.state.identification}
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-md-center mt-4">
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <label htmlFor="telefono" className="text-start">
                      Telefono
                    </label>
                    <input
                      id="telefono"
                      className="form-control form-control mx-auto border-dark"
                      type="tel"
                      placeholder="Numero de telefono de el usuario"
                      onChange={(event) =>
                        this.setState({ phoneNumber: event.target.value })
                      }
                      value={this.state.phoneNumber}
                    />
                  </div>
                </div>
                <div className="col-4 ">
                  <div className=" flex-column">
                    <label htmlFor="fecha-nacimiento" className=" ">
                      Fecha de Nacimiento
                    </label>
                    <input
                      id="fecha-nacimiento"
                      className=" form-control mx-auto border-dark"
                      type="date"
                      onChange={(event) =>
                        this.setState({ birthdate: event.target.value })
                      }
                      value={this.state.birthdate}
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-md-center mt-4">
                <div className="col-4">
                  <div className=" flex-column">
                    <label htmlFor="correo">Correo Electronico </label>
                    <input
                      id="correo"
                      className="text-center form-control mx-auto border-dark"
                      placeholder="Correo electronico de el usuario"
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                      value={this.state.email}
                    ></input>
                  </div>
                </div>
              </div>

              <div class="border-top border-dark d-inline-block mt-4">
                {" "}
                <h2>Rol de Empleado y Datos de Nomina</h2>
              </div>

              <div class="row justify-content-md-center mt-4">
                <div className="col-4">
                  <div className=" flex-column">
                    <label htmlFor="rol-empleado">Rol Empleado</label>
                    <select
                      id="rol-empleado"
                      className="text-center form-select border-dark mx-auto"
                      onChange={(event) =>
                        this.setState({ employeeRole: event.target.value })
                      }
                      value={this.state.employeeRole}
                    >
                      <option>Bartender</option>
                      <option>Mesero</option>
                      <option>Host</option>
                      <option>Operario de limpieza</option>
                      <option>DJ</option>
                      <option>Operario de Seguridad</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-md-center mt-4">
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <label htmlFor="banco" className="text-start">
                      Banco
                    </label>
                    <input
                      id="banco"
                      className="form-control border-dark mx-auto"
                      type="text"
                      placeholder="Nombre del Banco"
                      onChange={(event) =>
                        this.setState({ bank: event.target.value })
                      }
                      value={this.state.bank}
                    />
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="d-flex flex-column">
                    <label htmlFor="numero-cuenta" className="text-start">
                      N.Cuenta
                    </label>
                    <input
                      id="numero-cuenta"
                      className=" form-control mx-auto border-dark"
                      type="text"
                      placeholder="Numero de cuenta bancario  "
                      onChange={(event) =>
                        this.setState({ accountNumber: event.target.value })
                      }
                      value={this.state.accountNumber}
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-md-center">
                <div className="col-5">
                  <button
                    className="mb-5 btn btn-warning btn-outline-secondary text-white w-25 mt-5"
                    type="submit"
                  >
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <UserSearch />
        </div>
      );
    }
  }

  render() {
    return (
      //Buttons to activate the required window
      <div className="container">
        <div className="row p-0 mb-3">
          <div className="col-6 p-0">
            <button
              className={`w-100 btn-outline-warning ${
                this.state.buttonState
                  ? "btn btn-dark text-white"
                  : "btn btn-light text-black"
              }`}
              onClick={this.handlebuttonState}
            >
              Crear Usuarios
            </button>
          </div>
          <div className="col-6 p-0">
            <button
              className={`w-100 btn-outline-warning ${
                this.state.buttonState
                  ? "btn btn-light text-black"
                  : "btn btn-dark text-white"
              }`}
              onClick={this.handlebuttonState}
            >
              Modificar Usuarios
            </button>
          </div>
        </div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default UserManagement;
