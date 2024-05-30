import React from "react";
import UserSearch from "../UserSearch";
import WindowAlert from "../../../miniComponents/WindowAlert";
import { NumericFormat } from "react-number-format";
/* import API_ROUTES from "../../../../configs/ApiEndpoints.mjs"; */
class Nomina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true, //state that activates its respective window
      windowAlert: false, //this state activate the alert window
      userNames: this.props.user.userNames,
      lastNames: this.props.user.lastNames,
      identification: this.props.user.identification,
      bank: this.props.user.bank,
      accountNumber: this.props.user.accountNumber,
      SalarioBasico: 0,
      bonificaciones: 0,
      HorasTrabjadas: 0,
      extrasDiurnas: 0,
      horasDiurnas: 0,
      extrasNocturnas:0,
      horasNocturnas: 0,
      extrasDominicales:0,
      horasDominicales: 0,
      descripcionDedupcion: "",
      montoDeduccion:0,
      fechaExpedicion:""
    };
    //bind this in the function
    this.handlebuttonState = this.handlebuttonState.bind(this);
    /*   this.handleSubmit = this.handleSubmit.bind(this); */
    this.handleWindowAlert = this.handleWindowAlert.bind(this);
    this.downloadDocument = this.downloadDocument.bind(this);
  }
  handleWindowAlert() {
    this.setState({
      windowAlert: false,
    });
  }

  //function activates the respective window
  handlebuttonState() {
    this.setState((prevState) => ({
      buttonState: !prevState.buttonState,
    }));
  }
  
  async downloadDocument(event) {
    event.preventDefault();
    try {
      const response = await fetch(`/download-document/${this.state.identification}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${this.state.identification}_document.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      this.setState({
        WindowAlert: true,
      });
    } catch (error) {
      console.error('Error downloading the document', error);
    }
  }
  
  //function that send the form information

  renderContent() {
    //render the content according to the state
    if (this.state.buttonState) {
      return (
        <div className="container  border border-1 border-warning w-75 ">
          <div>
            {this.state.windowAlert && (
              <div className="container  position-fixed alert-menu">
                {" "}
                <WindowAlert
                  buttonText="OK"
                  infoText="Extracto Generado y guardado con exito!!"
                  dimensions="position-relative   alert-menu2  col-lg-3 h-75 bg-white d-flex flex-column justify-content-center align-items-center  border rounded border-success border-2 windowAler"
                  disable={this.handleWindowAlert}
                />{" "}
              </div>
            )}
          </div>
          <h1>Calcular Salario</h1>

          <div className="row mt-5">
            <div className=" col-6 ">
              <p>
                Nombre:
                <span className="text-primary">
                  {" "}
                  {this.state.userNames} {this.state.lastNames}
                </span>{" "}
              </p>
            </div>
            <div className="col-6">
              <p>
                Cargo:<span className="text-primary">Gerente</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                N.Documento:
                <span className="text-primary">
                  {this.state.identification}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                Banco:<span className="text-primary">{this.state.bank}</span>{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                N.Cuenta:
                <span className="text-primary">{this.state.accountNumber}</span>{" "}
              </p>
            </div>
          </div>
          <div className="row mb-5 mt-2">
            <div className="col-2"></div>
            <div className="col-8 border  border-black  float-end"></div>
            <div className="col-2"></div>
          </div>

          <form>
            <div className="row justify-content-md-center">
              <div className="col-3">
                <div className="d-flex flex-column">
                  <label htmlFor="salario" className="text-start">
                    Salario Basico
                  </label>
                  <NumericFormat
                    id="salario"
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    inputMode="numeric"
                    className=" border rounded border-black"
                    onChange={(event) => {
                      this.setState({
                       SalarioBasico: event.target.value
                     })
                    }}
                  />
                </div>
              </div>
              <div className="col-3 ">
                <div className="d-flex flex-column">
                  <label htmlFor="Bonificaciones" className="text-start">
                    Bonificaciones <r /> Comisiones
                  </label>
                  <NumericFormat
                    id="Bonificaciones"
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    inputMode="numeric"
                    className=" border rounded border-black"
                    onChange={(event) => {
                      this.setState({
                        bonificaciones:event.target.value
                      })
                    }}
                  />
                </div>
              </div>
              <div className="col-3 ">
                <div className="d-flex flex-column">
                  <label htmlFor="HorasTrabajadas" className="text-start">
                    Total Horas Trabajadas
                  </label>
                  <input 
                    id="HorasTrabajadas"
                    type="number"
                    className=" border rounded border-black"
                    onChange={(event) => {
                      this.setState({
                        HorasTrabjadas:event.target.value
                      })
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-3">
                <div className="">
                  <input id="ExtrasDiurnas" type="checkbox"></input>
                  <label htmlFor="ExtrasDiurnas" className="text-start">
                    Horas Extras Diurnas
                  </label>
                </div>
              </div>
              <div className="col-1 ">
                <div className="d-flex flex-column">
                  <input type="number" 
                    onChange={(event) => {
                      this.setState({
                        extrasDiurnas: event.target.value * 6773.99,
                        horasDiurnas: event.target.value
                    })
                  }}
                  />
                </div>
              </div>
              <div className="col-3 ">
                <div className="d-flex flex-column">
                  <NumericFormat
                    id="amount"
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    inputMode="numeric"
                    value={this.state.extrasDiurnas}
                    className=" border rounded border-black"
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-3">
                <div className="">
                  <input id="ExtrasNocturnas" type="checkbox"></input>
                  <label htmlFor="ExtrasNocturnas" className="text-start">
                    Horas Extras Nocturnas
                  </label>
                </div>
              </div>
              <div className="col-1 ">
                <div className="d-flex flex-column">
                  <input type="number"
                  onChange={(event) => {
                    this.setState({
                      extrasNocturnas: event.target.value * 9483.58,
                      horasNocturnas: event.target.value
                  })
                  
                }}/>
                </div>
              </div>
              <div className="col-3 ">
                <div className="d-flex flex-column">
                  <NumericFormat
                    id="amount"
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    inputMode="numeric"
                    className=" border rounded border-black"
                    value={this.state.extrasNocturnas}
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center mt-4">
              <div className="col-3">
                <div className="">
                  <input id ="ExtrasDominicales" type="checkbox"></input>
                  <label htmlFor="ExtrasDominicales" className="text-start">
                    Horas Extras Dominicales
                  </label>
                </div>
              </div>
              <div className="col-1 ">
                <div className="d-flex flex-column">
                  <input type="number"
                  onChange={(event) => {
                    this.setState({
                      extrasDominicales: event.target.value * 10838.38,
                      horasDominicales:event.target.value
                  })
                }}/>
                </div>
              </div>
              <div className="col-3 ">
                <div className="d-flex flex-column">
                  <NumericFormat
                    id="amount"
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    inputMode="numeric"
                    className=" border rounded border-black"
                    value={this.state.extrasDominicales}
                    
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-5">Deducciones</h2>

            <div className="row justify-content-md-center mt-3">
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="Deduccion" className="text-start">
                    Deducción
                  </label>
                  <input
                    id="Deduccion"
                    className="form-control border-dark mx-auto"
                    type="text"
                    placeholder="Descripcion de la deducción"
                    onChange={(event) =>
                      this.setState({
                        descripcionDedupcion: event.target.value
                       })
                    }
                    
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <label htmlFor="Monto" className="text-start">
                    Monto
                  </label>
                  <NumericFormat
                    id="Monto"
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    inputMode="numeric"
                    className=" border rounded border-black  mt-1"
                    onChange={(event) =>
                      this.setState({
                        montoDeduccion: event.target.value
                       })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="container justify-content-md-center mt-5 w-25">
              <div className="d-flex flex-column">
                <label>Fecha de extracto generado</label>
                <input type="date" className="" 
                 onChange={(event) =>
                  this.setState({
                    fechaExpedicion: event.target.value
                   })
                }
                />
              </div>
            </div>

            <div className="container mt-5 w-75">
              <div className="row p-0 mb-3  justify-content-md-center">
                <div className="col-3 p-0 ">
                  <div className="">
                    <button
                      className={`w-100 btn-outline-warning ${
                        this.state.buttonState
                          ? "btn btn-dark text-white"
                          : "btn btn-light text-black"
                      }`}
                     /*  onClick={this.handlebuttonState} */
                    
                    type="button"
                    >
                      Previzualizar extracto
                    </button>
                  </div>
                </div>

                <div className="col-2"></div>
                <div className="col-3 p-0">
                  <div className="">
                    <button
                      className={`w-100 btn-outline-warning ${
                        this.state.buttonState
                          ? "btn btn-light text-black"
                          : "btn btn-dark text-white"
                      }`}
                      onClick={this.downloadDocument}
                     
                    >
                      Generar y guardar extracto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <UserSearch component="editUser" />
        </div>
      );
    }
  }

  render() {
    return (
      //Buttons to activate the required window
      <div className="container">
        <div className="row p-0 mb-3">
          <div className="col-6 p-0">
            <button
              className={`w-100 btn-outline-warning ${
                this.state.buttonState
                  ? "btn btn-dark text-white"
                  : "btn btn-light text-black"
              }`}
              onClick={this.handlebuttonState}
            >
              Nomina
            </button>
          </div>
          <div className="col-6 p-0">
            <button
              className={`w-100 btn-outline-warning ${
                this.state.buttonState
                  ? "btn btn-light text-black"
                  : "btn btn-dark text-white"
              }`}
              onClick={this.handlebuttonState}
            >
              Extractos de Nomina
            </button>
          </div>
        </div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default Nomina;
