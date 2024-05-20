import React from "react";

class UserSearch extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Buscar Usuario</h1>

        <div className="container fluid p-0 mt-5">
          <form>
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
                  >
                    <option value="Cedula de Ciudadania">
                      Cedula de Ciudadania
                    </option>
                    <option value="Cedula Extranjera">Cedula Extranjera</option>
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

export default UserSearch;
