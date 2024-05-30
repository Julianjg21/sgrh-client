import React from "react";

class WindowAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowState: true, //state to render in the module
    };
    this.handleWindowState = this.handleWindowState.bind(this);
  }

  handleWindowState() {
    this.setState({
      windowState: false,
    });
    if (this.props.disable) {
      this.props.disable();
    }
  }

  render() {
    const { windowState } = this.state;

    //If windowState is false, do not render the component
    if (!windowState) {
      return null;
    }

    return (
      <div className={`container  ${this.props.dimensions} windowAler p-0`}>
        <div className="mb-3 ">
          <p>
            {" "}
            <strong className="error-message">
              {this.props.infoText}
            </strong>{" "}
          </p>
        </div>
        <div className=""></div>

        <div className="mt-2">
          <button
            className="btn btn-light btn-outline-secondary"
            onClick={this.handleWindowState}
          >
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default WindowAlert;
