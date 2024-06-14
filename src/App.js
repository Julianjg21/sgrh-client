import "./App.css";
import React, { Component } from "react";
import LoginPage from "./pages/LoginPage";
import MainMenuLayout from "./layouts/MainMenu/MainMenuLayout";
import API_ROUTES from "./configs/ApiEndpoints.mjs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { changeStateVerification } from "./redux/slices/login/authLoginSlice";

class App extends Component {
  // Initial state of the component
  state = {
    loading: true,
  };

  // Lifecycle method that runs after the component has been rendered
  componentDidMount() {
    const token = localStorage.getItem("token"); // Get token from localStorage

    // If token is not found, update state to stop loading and log error
    if (!token) {
      this.setState({ loading: false });
      return;
    }
    // Fetch request to verify token
    fetch(API_ROUTES.sendTokenJwt, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Pass token in Authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid token"); // Handle invalid token response
        } else {
          this.props.changeStateVerification(true); // Dispatch action to update state verification
        }
      })
      .catch((error) => {
        console.error(error); // Log any errors
      })
      .finally(() => {
        this.setState({ loading: false }); // Update state to stop loading regardless of the result
      });
  }

  render() {
    // Display loading indicator while waiting for token verification
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    // Render routes based on state verification
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/menu"
              element={
                this.props.stateVerification ? ( // Conditional rendering based on verification state
                  <MainMenuLayout />
                ) : (
                  <Navigate to="/" /> // Redirect to login page if not verified
                )
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

// Map state from Redux store to component props
const mapStateToProps = (state) => ({
  stateVerification: state.verification.stateVerification,
});

// Map dispatch actions to component props
const mapDispatchToProps = {
  changeStateVerification: changeStateVerification,
};

// Connect component to Redux store and export
export default connect(mapStateToProps, mapDispatchToProps)(App);
