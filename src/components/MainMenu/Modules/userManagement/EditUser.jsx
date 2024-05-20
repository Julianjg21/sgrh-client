import React from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class EditUser extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Datos Personales</h1>
        <div className="container fluid p-0 mt-4">
          <fom>
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
                      placeholder="Nombres completos del usuario"
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
                      placeholder="Apellidos completos del usuario"
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
                  <select className="form-select" id="editar-identification">
                    <option value="Cedula de Ciudadania">
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
                      placeholder="Número de identificación del usuario"
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
                      placeholder="Número de teléfono del usuario"
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
                      placeholder="Correo electrónico del usuario"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="border-topborder-0 d-inline-block mt-4">
              {" "}
              <h2>Rol de Empleado y Datos de Nomina</h2>
            </div>

            <div class="row justify-content-md-center mt-4">
              <div className="col-4">
                <div className=" flex-column">
                  <label htmlFor="editar-rEmpleado">Rol Empleado</label>
                  <select
                    id="editar-rEmpleado"
                    className="text-center form-select  mx-auto"
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
                      placeholder="Nombre del Banco"
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
                      placeholder="Número de cuenta bancario"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-1"></div>
              <div className="col-4 p-0 ">
                <button className="mb-5 btn btn-danger btn-outline-secondary text-white w-25 mt-5 float-start">
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
          </fom>
        </div>
      </div>
    );
  }
}

export default EditUser;
