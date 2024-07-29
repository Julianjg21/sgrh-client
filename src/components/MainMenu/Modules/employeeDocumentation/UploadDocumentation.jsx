import React from "react";
import API_ROUTES from "../../../../configs/ApiEndpoints.js";
import WindowAlert from "../../../miniComponents/WindowAlert";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UploadDocumentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowAlert: false,
      alertMessage: "",
      identification: this.props.user.identification,
      file: null,
      urlDcIdentification: null,
      urlDcEducation: null,
      urlDcCourses: null,
      urlDcCertificacionLaboral: null,
      urlDclaboral: null,
      urlDcSalud: null,
      urlDcAdicionales: null,
      changeFile: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWindowAlert = this.handleWindowAlert.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.fetchDocument = this.fetchDocument.bind(this);
  }

  handleFileChange = (input, event) => {
    if (this.state.file === null) {
      this.setState({
        file: event.target.files[0],
        changeFile: input,
      });
    } else {
      alert("¡Primero debes guardar el elemento seleccionado anteriormente!");
      return;
    }
  };

  handleSubmit = (input, event) => {
    event.preventDefault();
    if (!this.state.file) {
      alert("Debes seleccionar un archivo");
      return;
    }
    if (this.state.changeFile !== input) {
      alert("¡Primero debe subir el archivo agregado anteriormente!");
      return;
    }

    const formData = new FormData();

    formData.append("document", this.state.file);
    formData.append("idUser", this.state.identification);
    formData.append("column", event.target.column.value);

    fetch(API_ROUTES.uploadDocument, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Exito:", data);
        this.setState({
          alertMessage: "Documento guardado con exito",
          windowAlert: true,
          file: null,
        });

      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({
          infoText: "No se pudo guardar el documento",
          windowAlert: true,
        });
      });
  };
  fetchDocument = (columnParam, documentState) => {
    const idUser = this.state.identification;
    const column = columnParam;

    fetch(`http://localhost:3080/download?column=${column}&idUser=${idUser}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
       //Check if the received blob has valid data
        if (blob.size > 0) {
       //Create a URL for the blob we received
          const url = window.URL.createObjectURL(blob);
          this.setState({ [documentState]: url });
        }
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  componentDidMount() {
    this.fetchDocument("IdentificationDocument", "urlDcIdentification");
    this.fetchDocument("EducationCertificate", "urlDcEducation");
    this.fetchDocument("courseCertificate", "urlDcCourses");
    this.fetchDocument("employmentCertificate", "urlDcCertificacionLaboral");
    this.fetchDocument("employmentContract", "urlDclaboral");
    this.fetchDocument("HealthStatement", "urlDcSalud");
    this.fetchDocument("AdditionalDocument", "urlDcAdicionales");
  }

  handleWindowAlert = () => {
    this.setState({ windowAlert: false });
  };

  render() {
    const {
      urlDcIdentification,
      urlDcEducation,
      urlDcCourses,
      urlDcCertificacionLaboral,
      urlDclaboral,
      urlDcSalud,
      urlDcAdicionales,
    } = this.state;
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

        <div className="row justify-content-md-center ">
          <div className="col-4 border-bottom border-dark ">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("IdentificationDocument", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="documento-identificacion"
                >
                  Documento de Identificación
                </label>
                <input
                  type="file"
                  id="documento-identificacion"
                  className="float-start mb-2 "
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("IdentificationDocument", event)
                  }
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
                  value={this.state.identification} // Here you can assign the corresponding ID
                  style={{ display: "none" }}
                />
                <button
                  className="float-start mt-5 mb-3 btn btn-outline-secondary"
                  type="submit"
                >
                  Subir Archivos
                </button>
                <div className="row">
                  <div className="col-12  mt-3">
                    {urlDcIdentification ? (
                      <a
                        href={urlDcIdentification}
                        download="Documento de Identificacion.pdf"
                      >
                        Descargar Documento de Identificacion{" "}
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("EducationCertificate", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="certificado-educacion"
                >
                  Certificados de Educación
                </label>
                <input
                  type="file"
                  id="certificado-educacion"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("EducationCertificate", event)
                  }
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
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10  mt-3">
                    {urlDcEducation ? (
                      <a
                        href={urlDcEducation}
                        download="certificado de educación.pdf"
                      >
                        Descargar certificado de educación
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("courseCertificate", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="certificado-cursos"
                >
                  Certificados de Cursos
                </label>
                <input
                  type="file"
                  id="certificado-cursos"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("courseCertificate", event)
                  }
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
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10  mt-3">
                    {urlDcCourses ? (
                      <a
                        href={urlDcCourses}
                        download="Certificados de Cursos.pdf"
                      >
                        Descargar Certificados de Cursos
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("employmentCertificate", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="certificado-laboral"
                >
                  Certificaciones Laborales
                </label>
                <input
                  type="file"
                  id="certificado-laboral"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("employmentCertificate", event)
                  }
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
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10  mt-3">
                    {urlDcCertificacionLaboral ? (
                      <a
                        href={urlDcCertificacionLaboral}
                        download="Certificaciones Laborales.pdf"
                      >
                        Descargar Certificaciones Laborales
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("employmentContract", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3  m-lg-1"
                  htmlFor="contrato-laboral"
                >
                  Contrato Laboral
                </label>
                <input
                  type="file"
                  id="contrato-laboral"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("employmentContract", event)
                  }
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
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-9  mt-3">
                    {urlDclaboral ? (
                      <a href={urlDclaboral} download="Contrato Laboral.pdf">
                        Descargar Contrato Laboral
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("payrollStatements", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="extractos-nomina"
                >
                  Extractos de nomina
                </label>
                <input
                  type="file"
                  id="extractos-nomina"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("payrollStatements", event)
                  }
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
              <form
                onSubmit={(event) =>
                  this.handleSubmit("healthStatement", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="extracto-salud"
                >
                  Extractos Salud y Pensión
                </label>
                <input
                  type="file"
                  id="extracto-salud"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("healthStatement", event)
                  }
                />
                <input
                  type="text"
                  name="column"
                  value="healthStatement"
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
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10  mt-3">
                    {urlDcSalud ? (
                      <a
                        href={urlDcSalud}
                        download="Extractos Salud y Pensión.pdf"
                      >
                        Descargar Extractos Salud y Pensión
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                onSubmit={(event) =>
                  this.handleSubmit("AdditionalDocument", event)
                }
                encType="multipart/form-data"
              >
                <label
                  className="float-start fw-bold mb-3"
                  htmlFor="documentos-adicionales"
                >
                  Documentos Adicionales
                </label>
                <input
                  type="file"
                  id="documentos-adicionales"
                  className="float-start mb-2"
                  name="fileUpload[]"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) =>
                    this.handleFileChange("AdditionalDocument", event)
                  }
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
                <div className="row">
                  <div className="col-3 "></div>
                  <div className="col-9  mt-3">
                    {urlDcAdicionales ? (
                      <a
                        href={urlDcAdicionales}
                        download="Documentos Adicionales.pdf"
                      >
                        Descargar Documentos Adicionales
                        <FontAwesomeIcon icon={faFileArrowDown} />
                      </a>
                    ) : (
                      <div className="container border-1 border-danger">
                        <p className=" text-danger">
                          No hay documentos guardados
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadDocumentation;
