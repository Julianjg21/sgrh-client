import React from "react";
import EditUser from "./userManagement/EditUser";
import API_ROUTES from "../../../configs/ApiEndpoints.mjs";
import WindowAlert from "../../miniComponents/WindowAlert";
import UploadDocumentation from "./employeeDocumentation/UploadDocumentation";
import Nomina from "./Nomina/Nomina";
class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowAlert: false,
      renderEditUser: false,
      userFound: "",
      name: "",
      typeIdentification: "",
      identification: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWindowAlert = this.handleWindowAlert.bind(this);
  }

  handleWindowAlert() {
    this.setState({
      windowAlert: false,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;

    fetch(API_ROUTES.searchUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 401) {
          this.setState({ windowAlert: true });
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ renderEditUser: true });
        this.setState({ userFound: data });
        console.log(data);
      });
  }

  render() {
    if (this.state.renderEditUser === true) {
      if (this.props.component === "editUser") {
        return <EditUser user={this.state.userFound} />;
      } if (this.props.component === "uploadDocumentation") {
        return <UploadDocumentation  user={this.state.userFound}/>;
      } if (this.props.component === "Nomina") {
        return <Nomina user={this.state.userFound} />;
      }
} else {
      return (
        <div className="container">
          <div>
            {this.state.windowAlert && (
              <div className="container  position-fixed alert-menu">
                {" "}
                <WindowAlert
                  buttonText="OK"
                  infoText="Error, El usuario no se encuentra registrado en el sistema"
                  dimensions="position-relative   alert-menu2  col-lg-3  h-75 bg-white d-flex flex-column justify-content-center align-items-center  border rounded border-danger border-2 windowAler"
                  disable={this.handleWindowAlert}
                />{" "}
              </div>
            )}
          </div>
          <h1>Buscar Usuario</h1>

          <div className="container fluid p-0 mt-5">
            <form onSubmit={this.handleSubmit}>
              <div class="row justify-content-md-center">
                <div className="col-4 ">
                  <div className=" flex-column">
                    <label className=" mb-3" htmlFor="buscar-nombre">
                      Nombre
                    </label>
                    <input
                      id="buscar-nombre"
                      className="text-center form-control mx-auto border-dark"
                      placeholder="Escribe el nombre completo del usuario que  buscas"
                      onChange={(event) =>
                        this.setState({
                          name: event.target.value,
                        })
                      }
                      value={this.state.name}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row justify-content-md-center mt-4">
                <div className="col-4">
                  <div className=" flex-column">
                    <label htmlFor="numero-identificacion">
                      Tipo de Identificacíon
                    </label>
                    <select
                      className="form-select border-dark text-center"
                      id="numero-identificacion"
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
              </div>

              <div className="row justify-content-md-center mt-4">
                <div className="col-4 ">
                  <div className="d-flex flex-column">
                    <label htmlFor="nIdentificacion" className="  text-center">
                      N.Identificación
                    </label>
                    <input
                      id="nIdentificacion"
                      className=" form-control border-dark mx-auto"
                      type="text"
                      placeholder="Numero de identificación de el usuario que buscas"
                      onChange={(event) =>
                        this.setState({
                          identification: event.target.value,
                        })
                      }
                      value={this.state.identification}
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-5">
                  <button
                    className="mb-5 btn btn-warning btn-outline-secondary w-25 text-white mt-5"
                    type="submit"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </form>

            <div class="row justify-content-md-center mt-4 ">
              <div className="col-4 border-top border-dark d-inline-block ">
                <div className=" flex-column mt-5">
                  <label className="" htmlFor="tipo-area">
                    Buscar Usuario Por Tipo De Area
                  </label>
                  <select
                    id="tipo-area"
                    className="text-center form-select border-dark mx-auto mt-4 mb-5"
                  >
                    <option>Area de Seguridad</option>
                    <option>Area Administrativa</option>
                    <option>Area de limpieza</option>
                    <option>Area de atención al cliente</option>
                    <option>Area de entretenimiento</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserSearch;
