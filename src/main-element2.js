import { LitElement, html } from "lit-element";
import loginStyle from "./login-style";

export class MainPage2 extends LitElement {
  static get styles() {
    return [loginStyle];
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
            <button class="w-100 mt-5 p-2 border-10">
              <i class="fas fa-user"></i>Usuarios
            </button>
            <button class="w-100 mt-5 p-2 border-10">
              <i class="fas fa-bullhorn"></i>Campañas
            </button>
            <button class="w-100 mt-5 p-2 border-10">
              <i class="fas fa-users"></i>Equipos
            </button>
            <br><br>
          </div>
        </div>
        <div class="bg-color-dark w-75  d-flex flex-column m-3">
          <div class="d-flex justify-content-between m-3 h-25">
            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white">10m</p>
              </div>
              <div
                class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Tiempó <br />Llamadas</p>
              </div>
            </div>
            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white">10m</p>
              </div>
              <div
                class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Tiempo <br />Llamada <br /> Actual</p>
              </div>
            </div>
            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-small"
              >
                <p class="text-white">Campaña 1</p>
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
              <input class="m-2 p-2 border-10 border-0" type="text" placeholder="Numero"></i>
              </div>

              <div class="d-flex flex-row">
              <i class="fas fa-user" style="color: #d1ccccb9;">
                <input
                  class="m-2 p-2 border-10 border-0" 
                  placeholder="Nombre"
                /></i>
                </div>

                <div class="d-flex justify-content-center aling-items-center">
                  <button
                    class="m-2 w-50  border-10 bg-icon text-white border-0 p-2"
                  >
                    Iniciar
                  </button>
                </div>
              </div>
            </div>
            <div class="w-75 bg-secondary d-flex flex-column">
            <br>
  <div class="row">
    <div class="col">
      <button class="border-10 p-2 text-big">Datos Llamada <i class="fas fa-phone fa-beat"></i></button>
    </div>
    
    
    <div class="col">
      <button class="bg-icon text-white p-2 text-big border-10 float-end">10:00:00 <i class="fa-solid fa-clock fa-spin"></i> </button>
    </div>
  </div>
  <br>
  <div class="bg-color-secondary1 d-flex justify-content-center align-items-center h-100">
    <div class="border-dark col border  w-100 h-100">
    </div>
  </div>

  <div class="bg-color-secondary1 d-flex justify-content-center align-items-center h-100">
    <div class="border-dark col border  w-75 h-75">
    </div>
  </div>
  
</div>
        </div>
      </div>

    `;
  }
}

customElements.define("main-element2", MainPage2);
