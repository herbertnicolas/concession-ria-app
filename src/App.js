import React, { useState } from "react";
import "./App.css";
import "./Carro";
import NewCarro from "./Components/NewCarro";
import Concessionaria from "./Concessionaria";

function App() {
  const [carros, setCarros] = useState([
    {
      id: 1,
      categoria: "Esporte",
      preco: 100000,
      modelo: "Golf GTI",
    },
    {
      id: 2,
      categoria: "Esporte",
      preco: 250000,
      modelo: "Camaro",
    },
    {
      id: 3,
      categoria: "SUV",
      preco: 100000,
      modelo: "HRV",
    },
    {
      id: 4,
      categoria: "SUV",
      preco: 120000,
      modelo: "T-Cross",
    },
    {
      id: 5,
      categoria: "Utilitario",
      preco: 125000,
      modelo: "Hilux",
    },
    {
      id: 6,
      categoria: "Utilitario",
      preco: 90000,
      modelo: "Ranger",
    },
  ]);

  const addCarroHandler = (carro) => {
    setCarros((prevCarros) => {
      return [...prevCarros, carro];
    });
    console.log(carros);
  };

  // const carros = [
  //   {
  //     id: 1,
  //     categoria: "Esporte",
  //     preco: 100000,
  //     modelo: "Golf GTI",
  //   },
  //   {
  //     id: 2,
  //     categoria: "Esporte",
  //     preco: 250000,
  //     modelo: "Camaro",
  //   },
  //   {
  //     id: 3,
  //     categoria: "SUV",
  //     preco: 100000,
  //     modelo: "HRV",
  //   },
  //   {
  //     id: 4,
  //     categoria: "SUV",
  //     preco: 120000,
  //     modelo: "T-Cross",
  //   },
  //   {
  //     id: 5,
  //     categoria: "Utilitario",
  //     preco: 125000,
  //     modelo: "Hilux",
  //   },
  //   {
  //     id: 6,
  //     categoria: "Utilitario",
  //     preco: 90000,
  //     modelo: "Ranger",
  //   },
  // ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fs-1 fw-normal text-center text-bg-warning border rounded border-2 shadow">
            Concessionária EveryCar
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-xxl-4 offset-xxl-0">
          <div className="card">
            <img
              className="card-img w-100 d-block"
              src="assets/img/suv.jpg"
              alt=""
            />
            <div className="card-img-overlay">
              <h4 className="fs-1 text-light">SUV</h4>
              <p className="text-light"></p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 offset-lg-0">
          <div className="card flex-grow-0 flex-shrink-0">
            <div className="card-img-overlay">
              <h4>Title</h4>
              <p>Paragraph</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img w-100 d-block"
              src="assets/img/sedan.jpg"
              alt=""
            />
            <div className="card-img-overlay">
              <h4 className="fs-1 text-white">SEDAN</h4>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img w-100 d-block"
              src="/src/assets/img/coupe-2.jpg"
              alt=""
            />
            <div className="card-img-overlay">
              <h4 className="fs-1 text-white">COUPE</h4>
              <p>Paragraph</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-2 row-cols-md-4">
          <div className="col">
            <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon">
                <i className="fa fa-car"></i>
              </div>
              <div className="px-3">
                <h2 className="fw-bold mb-0">123+</h2>
                <p className="mb-0">Carros</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
                    fill="currentColor"
                  ></path>
                  <path d="M11 7H13V17H11V7Z" fill="currentColor"></path>
                  <path d="M15 13H17V17H15V13Z" fill="currentColor"></path>
                  <path d="M7 10H9V17H7V10Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="px-3">
                <h2 className="fw-bold mb-0">45+</h2>
                <p className="mb-0">Categoria 1</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
                    fill="currentColor"
                  ></path>
                  <path d="M11 7H13V17H11V7Z" fill="currentColor"></path>
                  <path d="M15 13H17V17H15V13Z" fill="currentColor"></path>
                  <path d="M7 10H9V17H7V10Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="px-3">
                <h2 className="fw-bold mb-0">67+</h2>
                <p className="mb-0">Categoria 2</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
                    fill="currentColor"
                  ></path>
                  <path d="M11 7H13V17H11V7Z" fill="currentColor"></path>
                  <path d="M15 13H17V17H15V13Z" fill="currentColor"></path>
                  <path d="M7 10H9V17H7V10Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="px-3">
                <h2 className="fw-bold mb-0">89</h2>
                <p className="mb-0"></p>
              </div>
              <p className="mb-0">Categoria 3</p>
            </div>
          </div>
        </div>
      </div>
      <Concessionaria carros={carros} />
      <NewCarro onAddCarro={addCarroHandler} />
    </div>
  );
}

export default App;
