import React from "react";
import API_ROUTES from "../../../../configs/ApiEndpoints.mjs";
import WindowAlert from "../../../miniComponents/WindowAlert";

class UploadDocumentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowAlert: false,
      alertMessage: "",
      identification: this.props.user.identification,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch(API_ROUTES.uploadDocument, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Upload successful", result);
      this.setState({
        windowAlert: true,
        alertMessage: "Archivo guardado con éxito!!",
      });
    } else {
      console.error("Upload failed", response.statusText);
      this.setState({
        windowAlert: true,
        alertMessage: "Error al guardar el archivo",
      });
    }
  };

  handleWindowAlert = () => {
    this.setState({ windowAlert: false });
  };

  render() {
    return (
      <div className="container fluid p-0 mt-5">
        {this.state.windowAlert && (
          <div className="container position-fixed alert-menu">
            <WindowAlert
              buttonText="OK"
              infoText={this.state.alertMessage}
              dimensions="position-relative alert-menu2 col-lg-3 h-75 bg-white d-flex flex-column justify-content-center align-items-center border rounded border-success border-2 windowAler"
              disable={this.handleWindowAlert}
            />
          </div>
        )}

        <div className="row justify-content-md-center">
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label
                  className="float-start"
                  htmlFor="documento-identificacion"
                >
                  Documento de Identificación
                </label>
                <input
                  type="file"
                  id="documento-identificacion"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="IdentificationDocument"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification} // Aquí puedes asignar el ID correspondiente
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="certificado-educacion">
                  Certificados de Educación
                </label>
                <input
                  type="file"
                  id="certificado-educacion"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="EducationCertificate"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification} // Aquí puedes asignar el ID correspondiente
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="certificado-cursos">
                  Certificados de Cursos
                </label>
                <input
                  type="file"
                  id="certificado-cursos"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="courseCertificate"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification}
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="certificado-laboral">
                  Certificaciones Laborales
                </label>
                <input
                  type="file"
                  id="certificado-laboral"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="employmentCertificate"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification}
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="contrato-laboral">
                  Contrato Laboral
                </label>
                <input
                  type="file"
                  id="contrato-laboral"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="employmentContract"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification}
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="extractos-nomina">
                  Extractos de nomina
                </label>
                <input
                  type="file"
                  id="extractos-nomina"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="payrollStatements"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification}
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4 mb-2 border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="extracto-salud">
                  Extractos Salud y Pensión
                </label>
                <input
                  type="file"
                  id="extracto-salud"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="healthAndPensionStatements"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification}
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 mb-2 border-dark">
            <div className="d-flex flex-column">
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <label className="float-start" htmlFor="documentos-adicionales">
                  Documentos Adicionales
                </label>
                <input
                  type="file"
                  id="documentos-adicionales"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  multiple
                />
                <input
                  type="text"
                  name="column"
                  value="AdditionalDocument"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="idUser"
                  value={this.state.identification}
                  style={{ display: "none" }}
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivos
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadDocumentation;
