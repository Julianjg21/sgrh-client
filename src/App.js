import "./App.css";
import React, { Component } from "react";
import LoginPage from "./pages/LoginPage";
import MainMenuLayout from "./layouts/MainMenu/MainMenuLayout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { changeStateVerification } from "./redux/slices/login/authLoginSlice";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Define application routes */}
        <div className="App">
          <Routes>
            {/* Ruta por defecto */}
            <Route
              path="*"
              element={<LoginPage />} //Component to render when it does not match any other path
            />

            {/* Ruta protegida */}
            <Route
              path="/menu"
              element={
                //Render the MainMenuLayout component if the verification status is true, otherwise redirect the user to the login page
                this.props.stateVerification ? (
                  <MainMenuLayout />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

//Function that maps portions of Redux state to component props
const mapStateToProps = (state) => ({
  //Prop that the component will receive, contains the user's verification status
  stateVerification: state.verification.stateVerification,
});

//Object that maps Redux actions to component props
const mapDispatchToProps = {
  //Prop that the component will receive, contains the function to change the user's verification status
  changeStateVerification: changeStateVerification,
};

//Connect the React component to the Redux store, mapping the props and actions
export default connect(mapStateToProps, mapDispatchToProps)(App);
