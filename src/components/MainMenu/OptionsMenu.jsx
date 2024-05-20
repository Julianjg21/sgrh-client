import React from "react";
import {
  faUserGroup,
  faFolderClosed,
  faMoneyCheckDollar,
  faCalendar,
  faCalendarCheck,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OptionsMenu extends React.Component {
  render() {
    //Buttons for each module
    return (
      <div className="container-fluid btn-group-vertical p-0">
        <button className="btn-optionsMenu text-start btn btn-outline-dark">
          <FontAwesomeIcon icon={faUserGroup} />
          Control de Usuarios
        </button>
        <button className="btn-optionsMenu  text-start btn btn-outline-dark">
          <FontAwesomeIcon icon={faFolderClosed} />
          Documentación Empleados
        </button>
        <button className="btn-optionsMenu  text-start btn btn-outline-dark">
          <FontAwesomeIcon icon={faMoneyCheckDollar} />
          Nomina
        </button>
        <button className="btn-optionsMenu  text-start btn btn-outline-dark">
          <FontAwesomeIcon icon={faCalendar} />
          Calendario
        </button>
        <button className="btn-optionsMenu  text-start btn btn-outline-dark">
          <FontAwesomeIcon icon={faCalendarCheck} />
          Horario/Turnos
        </button>
        <button className="btn-optionsMenu  text-start btn btn-outline-dark">
          <FontAwesomeIcon icon={faEnvelopesBulk} />
          Solicitudes de Usuarios
        </button>
      </div>
    );
  }
}

export default OptionsMenu;
