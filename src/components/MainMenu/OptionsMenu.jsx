import React from "react";
import { connect } from "react-redux";
import { changeSelectedOption } from "../../redux/slices/menuOptions/menuOptionsSlice";
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
  handleOptionChange = (option) => () => {
    this.props.changeSelectedOption(option);
  };

  render() {

    
    // Botones para cada módulo
    return (
      <div className="container-fluid btn-group-vertical p-0">
        <button
          className="btn-optionsMenu text-start btn btn-outline-dark"
          onClick={this.handleOptionChange("Control de Usuarios")}
        >
          <FontAwesomeIcon icon={faUserGroup} /> Control de Usuarios
        </button>
        <button
          className="btn-optionsMenu text-start btn btn-outline-dark"
          onClick={this.handleOptionChange("Documentación Empleados")}
        >
          <FontAwesomeIcon icon={faFolderClosed} /> Documentación Empleados
        </button>
        <button
          className="btn-optionsMenu text-start btn btn-outline-dark"
          onClick={this.handleOptionChange("Nomina")}
        >
          <FontAwesomeIcon icon={faMoneyCheckDollar} /> Nomina
        </button>
        <button
          className="btn-optionsMenu text-start btn btn-outline-dark"
          onClick={this.handleOptionChange("Calendario")}
        >
          <FontAwesomeIcon icon={faCalendar} /> Calendario
        </button>
        <button
          className="btn-optionsMenu text-start btn btn-outline-dark"
          onClick={this.handleOptionChange("Horario/Turnos")}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Horario/Turnos
        </button>
        <button
          className="btn-optionsMenu text-start btn btn-outline-dark"
          onClick={this.handleOptionChange("Solicitudes de Usuarios")}
        >
          <FontAwesomeIcon icon={faEnvelopesBulk} /> Solicitudes de Usuarios
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = { changeSelectedOption };

export default connect(null, mapDispatchToProps)(OptionsMenu);
