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
  // State to keep track of the currently selected option
  state = {
    selectedOption: "",
  };

  // Handler to change the selected option
  handleOptionChange = (option) => () => {
    // Update the local state with the new selected option
    this.setState({ selectedOption: option });
    // Dispatch the action to change the selected option in the Redux store
    this.props.changeSelectedOption(option);
  };

  render() {
    // Destructure the selected option from the state
    const { selectedOption } = this.state;

    // Buttons for each module
    return (
      <div className="container-fluid btn-group-vertical p-0">
        {/* Control de Usuarios Button */}
        <button
          // Apply the 'btn-dark' class if this option is selected, otherwise 'btn-outline-dark'
          className={`btn-optionsMenu text-start btn ${selectedOption === "Control de Usuarios" ? "btn-dark" : "btn-outline-dark"}`}
          // Set the onClick handler to change the selected option
          onClick={this.handleOptionChange("Control de Usuarios")}
        >
          {/* Icon and label for the button */}
          <FontAwesomeIcon icon={faUserGroup} /> Control de Usuarios
        </button>
        {/* Documentación Empleados Button */}
        <button
          className={`btn-optionsMenu text-start btn ${selectedOption === "Documentación Empleados" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={this.handleOptionChange("Documentación Empleados")}
        >
          <FontAwesomeIcon icon={faFolderClosed} /> Documentación Empleados
        </button>
        {/* Nomina Button */}
        <button
          className={`btn-optionsMenu text-start btn ${selectedOption === "Nomina" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={this.handleOptionChange("Nomina")}
        >
          <FontAwesomeIcon icon={faMoneyCheckDollar} /> Nomina
        </button>
        {/* Calendario Button */}
        <button
          className={`btn-optionsMenu text-start btn ${selectedOption === "Calendario" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={this.handleOptionChange("Calendario")}
        >
          <FontAwesomeIcon icon={faCalendar} /> Calendario
        </button>
        {/* Horario/Turnos Button */}
        <button
          className={`btn-optionsMenu text-start btn ${selectedOption === "Horario/Turnos" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={this.handleOptionChange("Horario/Turnos")}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Horario/Turnos
        </button>
        {/* Solicitudes de Usuarios Button */}
        <button
          className={`btn-optionsMenu text-start btn ${selectedOption === "Solicitudes de Usuarios" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={this.handleOptionChange("Solicitudes de Usuarios")}
        >
          <FontAwesomeIcon icon={faEnvelopesBulk} /> Solicitudes de Usuarios
        </button>
      </div>
    );
  }
}

// Map the dispatch to props
const mapDispatchToProps = { changeSelectedOption };

// Connect the component to the Redux store
export default connect(null, mapDispatchToProps)(OptionsMenu);
