import React from "react";

class UploadDocumentation extends React.Component {
  render() {
    return (
      <div className="container fluid p-0 mt-5">
        <div className="row justify-content-md-center">
          <div className="col-4 border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
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
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4  border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="certificado-educacion">
                  Certificados de Educación
                </label>
                <input
                  type="file"
                  id="certificado-educacion"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4  border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="certificado-cursos">
                  Certificados de Cursos
                </label>
                <input
                  type="file"
                  id="certificado-cursos"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4  border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="certificado-laboral">
                  Certificaciones Laborales
                </label>
                <input
                  type="file"
                  id="certificado-laboral"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4  border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="contrato-laboral">
                  Contrato Laboral
                </label>
                <input
                  type="file"
                  id="contrato-laboral"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4  border-bottom border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="extracto-nomina">
                  Extractos de Nomina
                </label>
                <input
                  type="file"
                  id="extracto-nomina"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-1">
          <div className="col-4  mb-2 border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="extracto-salud">
                  Extractos Salud y Pensión
                </label>
                <input
                  type="file"
                  id="extracto-salud"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4  m-b2 border-dark">
            <div className="d-flex flex-column">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label className="float-start" htmlFor="documentos-adicionales">
                  Documentos Adicionales
                </label>
                <input
                  type="file"
                  id="documentos-adicionales"
                  className="float-start mb-2"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx"
                />
                <button className="float-start mt-5 mb-3" type="submit">
                  Subir Archivo
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
