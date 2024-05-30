import React from "react";
import moment from 'moment';
import API_ROUTES from "../../../../configs/ApiEndpoints.mjs";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WindowAlert from "../../../miniComponents/WindowAlert";
class EditUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      windowAlertUpdateUser: false, //this state activate the alert window
      windowAlertDeleteUser: false, //this state activate the alert window
      windowAlertDeleteUserConfirm:false,
      userNames: this.props.user.userNames,
      lastNames: this.props.user.lastNames,
      typeIdentification: this.props.user.typeIdentification,
      identification: this.props.user.identification,
      phoneNumber: this.props.user.phoneNumber,
      birthdate: `${moment(this.props.user.birthDate).format('YYYY-MM-DD')}`,
      email: this.props.user.email,
      employeeRole: this.props.user.employeeRole,
      bank: this.props.user.bank,
      accountNumber: this.props.user.accountNumber,
      userRegistrationId: this.props.user.userRegistrationId,
    }
   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleWindowAlertUpdateUser = this.handleWindowAlertUpdateUser.bind(this);
    this.windowAlertDeleteUser = this.windowAlertDeleteUser.bind(this);
    this.handleDeleteUserConfirm = this.handleDeleteUserConfirm.bind(this);
  }

  handleDeleteUserConfirm() {
    this.setState({windowAlertDeleteUserConfirm: true,})
  }

  handleWindowAlertUpdateUser() {
    this.setState({
      windowAlertUpdateUser: false,
    });
  }
  windowAlertDeleteUser() {
    this.setState({
      windowAlertDeleteUser: false,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    
    const data = this.state;

    fetch(API_ROUTES.EditUser, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok", response);
      }
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.message === "The user has been updated") {
        this.setState({ windowAlertUpdateUser: true });
      } else {
        console.log("error,can't update user");
      }
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });

   }

  handleDeleteUser() {
    this.setState({
      windowAlertDeleteUserConfirm: false
    });
    const user = this.state;
    fetch(API_ROUTES.EditUser, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(user)
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok", response);
      }
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.message === "the user has been deleted") {
        this.setState({ windowAlertDeleteUser: true });
      } else {
        console.log("error,can't delete user");
      }
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
  }



  render() {
    return (
      <div className="container">


<div>
            {this.state.windowAlertUpdateUser && (
             <div className="container  position-fixed alert-menu"> <WindowAlert
             buttonText="OK"
             infoText="Usuario Actualizado con exito!!"
                dimensions="position-relative   alert-menu2  col-lg-3 h-75 bg-white d-flex flex-column justify-content-center align-items-center  border rounded border-success border-2 windowAler"
                disable={this.handleWindowAlertUpdateUser}
           /> </div>
            )}
          </div>

          <div>
            {this.state.windowAlertDeleteUser && (
             <div className="container  position-fixed alert-menu"> <WindowAlert
             buttonText="OK"
             infoText="Usuario eliminado con exito!!"
                dimensions="position-relative   alert-menu2  col-lg-3 h-75 bg-white d-flex flex-column justify-content-center align-items-center  border rounded border-success border-2 windowAler"
                disable={this.windowAlertDeleteUser}
           /> </div>
            )}
          </div>

        


          <div>
          {this.state.windowAlertDeleteUserConfirm && (
            
            <div className="container  position-fixed alert-menu">             
<div
        className="container  position-relative   alert-menu2  col-lg-3 h-75 bg-white d-flex flex-column justify-content-center align-items-center  border rounded border-danger windowAler windowAler p-0 text-danger   border-2 "
      >
        <div className="mb-3 ">
          <p>
            {" "}
            <strong className="error-message">
              ¿Estas seguro de eliminar este usuario?
            </strong>{" "}
          </p>
        </div>
        <div className=""></div>

        <div className="mt-2 row">

<div className="col-6"><button
            className="btn btn-light btn-outline-primary float-start"
            onClick={this.handleDeleteUser}
          >
            Confirmar
                  </button ></div>

<div className="col-6"><button
            className="btn btn-light btn-outline-danger "
                    onClick={() => {
                      this.setState({
                        windowAlertDeleteUserConfirm: false
                      });
            }}
          >
           Cancelar
          </button></div>
                  
          
                
          
        </div>
      </div>
            </div>
            )}
          </div>


        <h1>Datos Personales</h1>
        <div className="container fluid p-0 mt-4">
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-md-center">
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="editar-nombres" className="text-start">
                    Nombres
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-nombres"
                      className="form-control border-0 mx-auto"
                      type="text"
                      placeholder={this.state.userNames}
                      
                      onChange={(event) =>
                        this.setState({
                          userNames: event.target.value,
                        })
                      }
                     
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="editar-apellidos" className="text-start">
                    Apellidos
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-apellidos"
                      className="form-control border-0 mx-auto"
                      type="text"
                      placeholder={this.state.lastNames}
                      onChange={(event) =>
                        this.setState({
                          lastNames: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-4">
                <div className="flex-column">
                  <label className="text-start" htmlFor="editar-identification">
                    Tipo de Identificación
                  </label>
                  <select className="form-select" id="editar-identification" onChange={(event) =>
                        this.setState({
                          typeIdentification: event.target.value,
                        })
                      } value={this.state.typeIdentification}>
                    <option  value="Cedula de Ciudadanía">
                      Cédula de Ciudadanía
                    </option>
                    <option value="Cedula Extranjera">Cédula Extranjera</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Documento de identificación nacional pasaporte">
                      Documento de identificación nacional pasaporte
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label
                    htmlFor="editar-nIdentificacion"
                    className="text-start"
                  >
                    Identificación
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-nIdentificacion"
                      className="form-control border-0 mx-auto"
                      type="text"
                      placeholder={this.state.identification}
                      onChange={(event) =>
                        this.setState({
                          identification: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="editar-telefono" className="text-start">
                    Teléfono
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-telefono"
                      className="form-control border-0 mx-auto"
                      type="tel"
                      placeholder={this.state.phoneNumber}
                      onChange={(event) =>
                        this.setState({
                          phoneNumber: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="flex-column">
                  <label htmlFor="editar-fNacimiento" className="">
                    Fecha de Nacimiento
                  </label>
                  <input
                    id="editar-fNacimiento"
                    className="form-control mx-auto"
                    type="date"
                    value={this.state.birthdate}
                    onChange={(event) =>
                      this.setState({
                        birthdate: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="editar-correo">
                    Correo Electrónico
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-correo"
                      className="form-control border-0 mx-auto text-center"
                      type="email"
                      placeholder={this.state.email}
                      onChange={(event) =>
                        this.setState({
                          email: event.target.value,
                        })
                      }

                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-topborder-0 d-inline-block mt-4">
              {" "}
              <h2>Rol de Empleado y Datos de Nomina</h2>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-4">
                <div className=" flex-column">
                  <label htmlFor="editar-rEmpleado">Rol Empleado</label>
                  <select
                    id="editar-rEmpleado"
                    className="text-center form-select  mx-auto"
                    value={this.state.employeeRole}
                    onChange={(event) =>
                      this.setState({
                        employeeRole: event.target.value,
                      })
                    }
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
                  <label htmlFor="editar-banco" className="text-start">
                    Banco
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-banco"
                      className="form-control border-0 mx-auto"
                      type="text"
                      placeholder={this.state.bank}
                      onChange={(event) =>
                        this.setState({
                          bank: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="editar-nCuenta" className="text-start">
                    N.Cuenta
                    <FontAwesomeIcon
                      className="float-end"
                      icon={faPenToSquare}
                    />
                  </label>
                  <div className="d-flex align-items-center">
                    <input
                      id="editar-nCuenta"
                      className="form-control border-0 mx-auto"
                      type="text"
                      placeholder={this.state.accountNumber}
                      onChange={(event) =>
                        this.setState({
                          accountNumber: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-1"></div>
              <div className="col-4 p-0 ">
              <button type="button" onClick={this.handleDeleteUserConfirm} className="mb-5 btn btn-danger btn-outline-secondary text-white w-25 mt-5 float-start">
                  Eliminar Usuario{" "}
                </button>
              </div>

              <div className="col-6">
                <button
                  className="mb-6 btn btn-warning float-start btn-outline-secondary text-white w-25 mt-5"
                  type="submit"
                >
                  Guardar Cambios{" "}
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    );
  }
}

export default EditUser;
