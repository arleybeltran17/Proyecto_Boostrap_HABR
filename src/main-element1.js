import { LitElement, html } from "lit-element";
import loginStyle from "./login-style";

export class MainPage extends LitElement {
  //! Constructor
  constructor() {
    super();
    this.usuarios = [];
    this.campanas1 = [];
    this.equipos = [];
    this.identificacion = "";
    this.nombre = "";
    this.campana = "";
    this.estado = "";
    this.tel = "";
    this.identificacionC = "";
    this.nombreC = "";
    this.tiempo = "";
    this.estadoC = "";
    this.identificacionE="";
    this.nombreE="";
    this.campanaE="";
    this.estadoE="";
    this.telefonoE="";
    this.cantIntegrantes="";
    this.mostrarUsuarios = false;
    this.mostrarCampanas = false;
    this.mostrarEquipos = false;
    this.datos = "";
    this.cantidadLlamadas = 0;
    this.campañasDisponibles = [];
    this.campañasDisponibles1=[];
    this.usuariosFiltrados = [];
    this.campañaSeleccionada=[];

  }

  //? Propiedades De Usuario
  static get properties() {
    return {
      usuarios: { type: Array },
      campanas1: { type: Array },
      equipos: { type: Array },
      identificacion: { type: String },
      nombre: { type: String },
      campana: { type: String },
      estado: { type: String },
      tel: { type: String },
      identificacionC: { type: String },
      nombreC: { type: String },
      tiempo: { type: String },
      equipoC: { type: String },
      estadoC: { type: String },
      identificacionE: { type: String },
      nombreE: { type: String },
      estadoE: { type: String },
      campanaE: { type: String },
      telefonoE: { type: String },
      cantIntegrantes: { type: String },
      datos: { type: String },
      cantidadLlamadas: { type: Number },
      campañasDisponibles: { type: Array },
      campañasDisponibles1: { type: Array },
      usuariosFiltrados: { type: Array },
      campañaSeleccionada: {type: Array}
    };
  }

  //? Estiloos
  static get styles() {
    return [loginStyle];
  }
  // todo: Redirecccion Pagina 2 o Modulo 2
  ingresarMainPage2() {
    const mainPage2 = document.createElement("main-element2");
    document.body.innerHTML = "";
    document.body.appendChild(mainPage2);
  }

  //! Modal Tanto Abrir Como Cerrar
  abrirModal() {
    const miModal = this.shadowRoot.querySelector("#miModal");
    miModal.style.display = "block";
    miModal.classList.remove('oculto');
  }

  cerrarModal() {
    const miModal = this.shadowRoot.querySelector("#miModal");
    miModal.style.display = "none";
    miModal.classList.add('oculto');
  }

  abrirModal1() {
    const miModal1 = this.shadowRoot.querySelector("#miModal1");
    miModal1.style.display = "block";
    miModal1.classList.remove('oculto');
  }

  cerrarModal1() {
    const miModal1 = this.shadowRoot.querySelector("#miModal1");
    miModal1.style.display = "none";
     miModal1.classList.add('oculto');
  }
  abrirModal2() {
    const miModal2 = this.shadowRoot.querySelector("#miModal2");
    miModal2.style.display = "block";
    miModal2.classList.remove('oculto');
  }

  cerrarModal2() {
    const miModal2 = this.shadowRoot.querySelector("#miModal2");
    miModal2.style.display = "none";
    miModal2.classList.add('oculto');
  }

  modal_oculto() {
    display: none;
  }


  //todo: Registro De Usuario

  registrarUsuario() {
    if (
      this.identificacion &&
      this.nombre &&
      this.campaña && // Usar this.campaña en lugar de campañaAsociada
      this.estado &&
      this.tel
    ) {
      const nuevoUsuario = {
        identificacion: this.identificacion,
        nombre: this.nombre,
        campana: this.campaña, // Usar this.campaña
        estado: this.estado,
        telefono: this.tel,
      };
      this.usuarios = [...this.usuarios, nuevoUsuario];

      console.log("Usuarios:", this.usuarios);

      this.identificacion = "";
      this.nombre = "";
      this.campaña = ""; // Reiniciar la campaña
      this.estado = "";
      this.tel = "";

      this.actualizarCards();
      this.mostrarTablaUsuarios(1);
      this.actualizarCampañasDisponibles1();
      this.requestUpdate();
    }
  }

  actualizarCampañaAsociada(e) {
    this.campaña = e.target.value;
    this.campanaE = e.target.value;
  }


  registrarCampanas() {
    if (
      this.identificacionC &&
      this.nombreC &&
      this.tiempo &&
      this.estadoC
    ) {
      const nuevaCampaña = {
        identificacionC: this.identificacionC,
        nombreC: this.nombreC,
        tiempo: this.tiempo,
        estadoC: this.estadoC,
      };
      this.campanas1 = [...this.campanas1, nuevaCampaña];
  
      console.log("Campañas:", this.campanas1);
  
      const event = new CustomEvent("campaña-creada", {
        detail: { nombreCampaña: nuevaCampaña.nombreC },
      });
      console.log("Evento campaña-creada disparado");
  
      this.identificacionC = "";
      this.nombreC = "";
      this.tiempo = "";
      this.estadoC = "";
  
      // Asegúrate de que se actualicen las campañas disponibles
      this.actualizarCampañasDisponibles1();
  
      this.actualizarCards();
      this.mostrarTablaCampanas(1);
    }
  }

  registrarEquipo() {
    if (
      this.identificacionE &&
      this.nombreE &&
      this.estadoE &&
      this.campanaE &&
      this.telefonoE &&
      this.cantIntegrantes
    ) {
      const nuevoEquipo = {
        identificacionE: this.identificacionE,
        nombreE: this.nombreE,
        estadoE: this.estadoE,
        campanaE: this.campanaE,
        telefonoE: this.telefonoE,
        cantIntegrantes: this.cantIntegrantes
      };
      this.equipos = [...this.equipos, nuevoEquipo];

      console.log("Equipos:", this.equipos);

      this.identificacionE = "";
      this.nombreE = "";
      this.estadoE = "";
      this.campanaE = "";
      this.telefonoE = "";
      this.cantIntegrantes = "";

      this.actualizarCards();
      this.mostrarTablaEquipos(1);
      this.requestUpdate();
    }else{
      console.log("Pana Algo Esta Mal Revise Pues")
      console.log("identificacionE:", this.identificacionE);
      console.log("nombreE:", this.nombreE);
      console.log("EstadoE:", this.estadoE);
      console.log("campañaE:", this.campanaE);
      console.log("telefonoE:", this.telefonoE);
      console.log("Cantidad De Integrantes:", this.cantIntegrantes);
    }
}

async buscarUsuario() {
  console.log("Buscando usuario...");
  console.log("Telefono:", this.tel);
  console.log("Nombre:", this.nombre);

  if (this.tel && this.nombre) {
    console.log("Realizando búsqueda...");

    const resultados = this.usuarios.filter((usuario) => {
      const coincideNumero = this.tel && usuario.telefono.includes(this.tel);
      const coincideNombre = this.nombre && usuario.nombre.includes(this.nombre);
      return coincideNumero && coincideNombre;
    });

    console.log("Resultados:", resultados);

    if (resultados.length > 0) {
      this.cantidadLlamadas += 1;
      console.log("Cantidad de llamadas actualizada:", this.cantidadLlamadas);
      await this.actualizarCards();
      alert("Llamada Iniciada");
    } else {
      await this.actualizarCards();
      alert("No Se Encontró Al Usuario");
    }
  } else {
    console.log("nombre", this.nombre);
    console.log("telefono", this.tel);
  }
}

  //! Actualizacion o Reactivacion De Campos Activos y Ausentes
  actualizarCards() {
    // Calcula los usuarios activos y ausentes
    const usuariosConectados = this.usuarios.filter(
      (usuario) => usuario.estado === "conectado"
    ).length;
    const usuariosAusentes = this.usuarios.filter(
      (usuario) => usuario.estado === "ausente"
    ).length;
  
    // Calcula las campañas activas
    const campañasActivas = this.campanas1.filter(
      (campaña) => campaña.estadoC === "Activa"
    ).length;

    // Actualiza los elementos de los cards en el DOM usando los identificadores
    this.shadowRoot.querySelector("#conectados-count").textContent = usuariosConectados;
  this.shadowRoot.querySelector("#ausentes-count").textContent = usuariosAusentes;
  this.shadowRoot.querySelector("#cantidad-llamadas").textContent = this.cantidadLlamadas;
  this.shadowRoot.querySelector("#campañas-activas-count").textContent = campañasActivas;

  }

  actualizarCampañasDisponibles() {
    // Obtiene una lista única de campañas a partir de la lista de usuarios
    this.campañasDisponibles = Array.from(
      new Set(this.usuarios.map((usuario) => usuario.campana))
    ); 
  }

  actualizarCampañasDisponibles1() {
    this.campañasDisponibles1 = this.campanas1.map((campana) => campana.nombreC);
    console.log(this.campañasDisponibles1); // Para verificar que se llenen las campañas disponibles
  }


  getCampaignStatus(campaignName) {
    const campaña = this.campanas1.find((campaña) => campaña.nombreC === campaignName);
    console.log("Campaña es ",campaña)

    if (campaña) {
      console.log(`Campaña encontrada: ${campaignName}`);
      console.log(`Estado de la campaña ${campaignName}: ${campaña.estadoC}`);
  
      if (campaña.estadoC === "Activa") {
        return { nombreCampaña: campaignName, estado: "Activa" };
      }
    } else {
      console.log(`Campaña no encontrada: ${campaignName}`);
    }
  
    return null;
  }

  //?Mostrar Tabla Usuarios
  mostrarTablaUsuarios(y) {
    this.mostrarUsuarios = y === 1; // Establecer la propiedad como valor booleano
    this.mostrarCampanas = false;
    this.mostrarEquipos = false;
  
    console.log(y);
  
    if (y == 1) {
      this.datos = html`
        <table class="table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Campaña</th>
              <th>Estado</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
          ${this.usuarios.map(
            (usuario) => {
              const campañaStatus = this.getCampaignStatus(usuario.campana);
              console.log("Campaña Status:", campañaStatus);
              if (!campañaStatus || campañaStatus.estado !== "Activa") {
                console.log("No Esta Cogiendo El Estado De La Campaña O Se Encuentra Inactiva")
                return null;
              }
  
              return html`
                <tr>
                  <td>${usuario.identificacion}</td>
                  <td>${usuario.nombre}</td>
                  <td>${usuario.campana}</td>
                  <td>${usuario.estado}</td>
                  <td>${usuario.telefono}</td>
                </tr>
              `;
            }
          )}
          </tbody>
        </table>
      `;
    }
    return this.datos;
  }

  //? Mostrar Tabla Campañas
  mostrarTablaCampanas(y) {
    this.mostrarUsuarios = false;
    this.mostrarCampanas = y === 1;
    this.mostrarEquipos = false;

    if (y == 1) {
      this.datos = html`
        <table class="table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Identificación Campaña</th>
              <th>Nombre Campaña</th>
              <th>Tiempo</th>
              <th>Estado Camapaña</th>
              <th>Activar Camapaña</th>
              <th>Desactivar Camapaña</th>

            </tr>
          </thead>
          <tbody>
            ${this.campanas1.map(
              (campana1) => html`
                <tr>
                  <td>${campana1.identificacionC}</td>
                  <td>${campana1.nombreC}</td>
                  <td>${campana1.tiempo}</td>
                  <td>${campana1.estadoC}</td>
                  <td>
                  <button @click="${() => this.activarCampana(campana1)}">Activar</button>
                </td>
                <td>
                  <button @click="${() => this.desactivarCampana(campana1)}">Desactivar</button>
                </td>
                </tr>
              `
            )}
          </tbody>
        </table>
      `;
    }
        return this.datos;
  }


  activarCampana(campaña) {
    const index = this.campanas1.indexOf(campaña);
    if (index !== -1) {
      this.campanas1[index].estadoC = "Activa"; // Actualiza el estado de la campaña
      console.log(`Se activó la campaña ${campaña.nombreC}`);
      this.mostrarTablaCampanas(1);
      this.actualizarCards();
    }
  }
  
  desactivarCampana(campaña) {
    const index = this.campanas1.indexOf(campaña);
    if (index !== -1) {
      this.campanas1[index].estadoC = "Inactiva"; // Actualiza el estado de la campaña
      console.log(`Se desactivó la campaña ${campaña.nombreC}`);
      this.mostrarTablaCampanas(1);
      this.actualizarCards();
  
      // Mostrar a todos los usuarios nuevamente
      this.usuariosFiltrados = this.usuarios.slice();

    }
  }

  //todo: Mostrar Tabla Equipos

  mostrarTablaEquipos(y) {
    this.mostrarUsuarios = false;
    this.mostrarCampanas = false;
    this.mostrarEquipos = y === 1;

    if (y == 1) {
      this.datos = html`
        <table class="posicion table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Identificación Equipo</th>
              <th>Nombre Equipo</th>
              <th>Estado</th>
              <th>Campaña</th>
              <th>Teléfono</th>
              <th>Numero De Integrantes</th>
            </tr>
          </thead>
          <tbody>
          ${this.equipos.map(
            (equipo) => html`
              <tr>
                <td>${equipo.identificacionE}</td>
                <td>${equipo.nombreE}</td>
                <td>${equipo.estadoE}</td>
                <td>${equipo.campanaE}</td>
                <td>${equipo.telefonoE}</td>
                <td>${equipo.cantIntegrantes}</td>
      
              </tr>
            `
          )}
          </tbody>
        </table>
      `;
    }
    return this.datos
  }

  mostrarTablaUsuariosFiltrados(y) {
    if (y == 1) {
      this.datos = html`
        <table class="posicion table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Campaña</th>
              <th>Estado</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            ${this.usuariosFiltrados.map(
              (usuario) => html`
                <tr>
                  <td>${usuario.identificacion}</td>
                  <td>${usuario.nombre}</td>
                  <td>${usuario.campana}</td>
                  <td>${usuario.estado}</td>
                  <td>${usuario.telefono}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
      `;
      // Solicita una actualización de la vista
      this.requestUpdate();
    }
  }

  filtrarPorCampana(e) {
    console.log("Filtrando....");
    const campañaSeleccionada = e.target.value;
    console.log("Campaña Seleccionada");

    if (campañaSeleccionada === "") {
      // Si no se selecciona una campaña, muestra todos los usuarios
      this.usuariosFiltrados = this.usuarios.slice();
      console.log("No Se Pudo Filtrar :(");
    } else {
      // Filtra los usuarios por la campaña seleccionada
      this.usuariosFiltrados = this.usuarios.filter(
        (usuario) => usuario.campana === campañaSeleccionada
      );
      console.log("Filtrados!!");
      console.log(this.usuariosFiltrados);
    }

    // Llamar a mostrarTablaUsuarios para actualizar la tabla después del filtro
    this.actualizarTablaUsuariosFiltrados();
  }

  actualizarTablaUsuariosFiltrados() {
    // Actualiza this.datos con la tabla de usuarios filtrados
    this.datos = this.mostrarTablaUsuariosFiltrados(1);

    // Solicita una actualización de la vista
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
      </style>

      <div class="bg-light vw-100 vh-100 d-flex">
        <div class="bg-secondary1 w-25  m-3 border-20 p-3">
          <div class="bg-color-secondary">
          <button
          class="w-100 mt-5 p-2 border-10"
          @click="${(e) => this.mostrarTablaUsuarios(1)}"
        >
          <i class="fas fa-user"></i>Usuarios
        </button>
        <button
          class="w-100 mt-5 p-2 border-10"
          @click="${(e) => this.mostrarTablaCampanas(1)}"
        >
          <i class="fas fa-bullhorn"></i>Campañas
        </button>
        <button
          class="w-100 mt-5 p-2 border-10"
          @click="${(e) => this.mostrarTablaEquipos(1)}"
        >
          <i class="fas fa-users"></i>Equipos
        </button>
            <br /><br />
          </div>
        </div>

        <div class="bg-color-dark w-75  d-flex flex-column m-3">
          <div class="d-flex justify-content-between m-3 h-25">
            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                id="conectados"
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p id="conectados-count" class="text-white">0</p>
              </div>
              <div
                class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Usuarios <br />Conectados</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p id="ausentes-count" class="text-white">0</p>
              </div>
              <div
                id="ausentes"
                class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Usuarios <br />Ausentes</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p id="cantidad-llamadas" class="text-white">0</p>
              </div>
              <div
                class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Numero De <br />Llamadas</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p id="campañas-activas-count" class="text-white">0</p>
              </div>
              <div
                class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Campañas <br />Activas</p>
              </div>
            </div>
          </div>
          <div class="bg-primary1 h-75 d-flex p-3">
            <div class="w-25 mx-3 border-20 border-1 border border-dark">
              <div class="d-flex flex-column p-3 bg-color-secondary border-20">
                <div class="d-flex flex-row">
                  <i class="fas fa-hashtag" style="color: #d1ccccb9;">

                    <input
                      class="m-2 p-2 border-10 border-0"
                      type="text"
                      @input="${(e) => (this.tel = e.target.value)}"
                      placeholder="Numero"
                  /></i>
                </div>

                <div class="d-flex flex-row">
                  <i class="fas fa-user" style="color: #d1ccccb9;">
                    <input
                      class="m-2 p-2 border-10 border-0"
                      type="text"
                      @input="${(e) => (this.nombre = e.target.value)}"
                      placeholder="Nombre"
                  /></i>
                </div>

                <div class="d-flex justify-content-center aling-items-center">
                  <button
                    class="m-2 w-50  border-10 bg-icon text-white border-0 p-2"
                    @click="${this.buscarUsuario}"
                  >
                    Llamar
                  </button>
                </div>
              </div>
            </div>
            <div class="w-75 bg-secondary d-flex flex-column">
              <br />
              <div class="row">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="selectCampaña"
                    >Campaña</label
                  >
                  <select
                    class="form-select"
                    id="selectCampaña"
                    @change="${this.filtrarPorCampana}"
                  >
                    <option selected>Selecciona una campaña</option>
                    <option value="">Todas</option>
                    ${this.campañasDisponibles1.map(
                      (campaña) => html`
                        <option value="${campaña}">${campaña}</option>
                      `
                    )}
                  </select>
                </div>
                <div class="col">
                  <button
                    class="border-10 p-2 text-big "
                    @click=${(e) => this.ingresarMainPage2()}
                  >
                    Avanzado <i class="fas fa-gears fa-fade"></i>
                  </button>
                </div>


                <div class="col">
                  <button
                    id="botonAbrirModal" 
                    class="bg-icon text-white p-2 text-big border-10 float-end>"
                    @click="${this.abrirModal1}"
                  >
                    Nueva Campaña<i class="fas fa-plus fa-beat-fade"></i>
                  </button>
                  <button
                    id="botonAbrirModal"
                    class="bg-icon text-white p-2 text-big border-10 float-end"
                    @click="${this.abrirModal}"
                  >
                    Nuevo Usuario<i class="fas fa-plus fa-beat-fade"></i>
                  </button>
                  <button
                    id="botonAbrirModal"
                    class="bg-icon text-white p-2 text-big border-10 float-end"
                    @click="${this.abrirModal2}"
                  >
                    Nuevo Equipo<i class="fas fa-plus fa-beat-fade"></i>
                  </button>

                  <div id="miModal2" class="modal oculto">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Nuevo Equipo</h5>
                      </div>
                      <div class="modal-body">

                        <div class="form-group">
                          <label>Identificación De Equipo:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.identificacionE}"
                            @input="${(e) =>
                              (this.identificacionE = e.target.value)}"
                          />
                        </div>

                        <div class="form-group">
                          <label>Nombre De Equipo:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.nombreE}"
                            @input="${(e) => (this.nombreE = e.target.value)}"
                          />
                        </div>

                        <div class="form-group">
                          <label>Estado:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.estadoE}"
                            @input="${(e) => (this.estadoE = e.target.value)}"
                          />
                        </div>

                        <div class="form-group">
                          <label>Campaña:</label>
                          <select
                            class="form-select"
                            .value="${this.campaña}"
                            @change="${(e) => this.actualizarCampañaAsociada(e)}"
                          >
                            <option value="">Selecciona una campaña</option>
                            ${this.campañasDisponibles1.map(
                              (campaña) => html`
                                <option value="${campaña}">${campaña}</option>
                              `
                            )}
                          </select>
                        </div>   

                        <div class="form-group">
                          <label>Telefono:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.telefonoE}"
                            @input="${(e) => (this.telefonoE = e.target.value)}"
                          />
                        </div>
                     

                      <div class="form-group">
                          <label>Numero De Integrantes:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.cantIntegrantes}"
                            @input="${(e) => (this.cantIntegrantes = e.target.value)}"
                          />
                      </div>
 </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                          @click="${this.cerrarModal2}"
                        >
                        
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="${this.registrarEquipo}"
                        >
                          Registrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

<!--  ------------------------------------------------Modal De Campaña------------------------------------------------  -->

                  <div id="miModal1" class="modal oculto">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Nuevo Usuario</h5>
                        </div>
                        <div class="modal-body">
                          <!-- Formulario para ingresar datos de usuario -->
                          <div class="form-group">
                            <label>Identificación de Campaña:</label>
                            <input
                              type="text"
                              class="form-control"
                              .value="${this.identificacionC}"
                              @input="${(e) =>
                                (this.identificacionC = e.target.value)}"
                            />
                          </div>

                          <div class="form-group">
                            <label>Nombre de Camapaña:</label>
                            <input
                              type="text"
                              class="form-control"
                              .value="${this.nombreC}"
                              @input="${(e) => (this.nombreC = e.target.value)}"
                            />
                          </div>

                          <div class="form-group">
                            <label>Tiempo De Campaña:</label>
                            <input
                              type="text"
                              class="form-control"
                              .value="${this.tiempo}"
                              @input="${(e) => (this.tiempo = e.target.value)}"
                            />
                          </div>

                          <div class="form-group">
                            <label>Estado De La Camapaña:</label>
                            <input
                              type="text"
                              class="form-control"
                              .value="${this.estadoC}"
                              @input="${(e) => (this.estadoC = e.target.value)}"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            @click="${this.cerrarModal1}"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            @click="${this.registrarCampanas}"
                          >
                            Registrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="miModal" class="modal oculto">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Nuevo Usuario</h5>
                      </div>
                      <div class="modal-body">
                        <!-- Formulario para ingresar datos de usuario -->
                        <div class="form-group">
                          <label>Identificación de Usuario:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.identificacion}"
                            @input="${(e) =>
                              (this.identificacion = e.target.value)}"
                          />
                        </div>

                        <div class="form-group">
                          <label>Nombre de Usuario:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.nombre}"
                            @input="${(e) => (this.nombre = e.target.value)}"
                          />
                        </div>

                        <div class="form-group">
                            <label>Campaña:</label>
                            <select
                              class="form-select"
                              .value="${this.campaña}"
                              @change="${(e) => this.actualizarCampañaAsociada(e)}"
                            >
                              <option value="">Selecciona una campaña</option>
                              ${this.campañasDisponibles1.map(
                                (campaña) => html`
                                  <option value="${campaña}">${campaña}</option>
                                `
                              )}
                            </select>
                          </div>

                        <div class="form-group">
                          <label>Estado:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.estado}"
                            @input="${(e) => (this.estado = e.target.value)}"
                          />
                        </div>

                        <div class="form-group">
                          <label>Telefono:</label>
                          <input
                            type="text"
                            class="form-control"
                            .value="${this.tel}"
                            @input="${(e) => (this.tel = e.target.value)}"
                          />
                        </div>
                      </div>

                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                          @click="${this.cerrarModal}"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="${this.registrarUsuario}"
                        >
                          Registrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>



              <div
                class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100"
              >
                <div class="border-dark col   w-75 h-75">
                ${this.mostrarUsuarios ? this.mostrarTablaUsuarios(0) : ''}
                ${this.mostrarCampanas ? this.mostrarTablaCampanas(0) : ''}
                ${this.mostrarEquipos ? this.mostrarTablaEquipos(0) : ''}

                  <button
                    @click="${() => this.mostrarTablaUsuariosFiltrados(1)}"
                  >
                    Mostrar Usuarios Filtrados
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("main-element1", MainPage);
