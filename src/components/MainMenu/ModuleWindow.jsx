import React from "react";
import UserManagement from "./Modules/userManagement/UserManagement";
import UserSearch from "./Modules/UserSearch";
import { connect } from "react-redux";
import { changeSelectedOption } from "../../redux/slices/menuOptions/menuOptionsSlice";
class ModuleWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderOption = this.renderOption.bind(this);
  }

  renderOption() {
    switch (this.props.selectedOption) {
      case "Control de Usuarios":
        return <UserManagement />;
      case "Documentación Empleados":
        return <UserSearch component="uploadDocumentation" />;
      case "Nomina":
        return <UserSearch component="Nomina" />;

      default:
        return null;
    }
  }
  render() {
    //the ""UserManagement" component is rendered
    return <div className="div-moduleWindow ">{this.renderOption()}</div>;
  }
}

//Function that maps portions of Redux state to component props
const mapStateToProps = (state) => ({
  //Prop that the component will receive, contains the user's verification status
  selectedOption: state.option.selectedOption,
});

//Object that maps Redux actions to component props
const mapDispatchToProps = {
  //Prop that the component will receive, contains the function to change the user's verification status
  changeSelectedOption: changeSelectedOption,
};

//Connect the React component to the Redux store, mapping the props and actions
export default connect(mapStateToProps, mapDispatchToProps)(ModuleWindow);
