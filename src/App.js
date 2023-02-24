import React, { useState } from "react";
import "./App.css";
import "./Carro";
import NewCarro from "./Components/NewCarro";
import Concessionaria from "./Concessionaria";

function App(props) {
    const [carros, setCarros] = useState([
        {
          "id": 1,
          "modelo": "Tiguan",
          "categoria": "SUV",
          "preço": 95000,
          "portas": 4
        },
        {
          "id": 2,
          "modelo": "Corolla",
          "categoria": "Sedan",
          "preço": 105000,
          "portas": 4
        },
        {
          "id": 3,
          "modelo": "HR-V",
          "categoria": "SUV",
          "preço": 85000,
          "portas": 4
        },
        {
          "id": 4,
          "modelo": "Fusion",
          "categoria": "Sedan",
          "preço": 125000,
          "portas": 4
        },
        {
          "id": 5,
          "modelo": "Captur",
          "categoria": "SUV",
          "preço": 75000,
          "portas": 4
        },
        {
          "id": 6,
          "modelo": "Civic",
          "categoria": "Sedan",
          "preço": 110000,
          "portas": 4
        },
        {
          "id": 7,
          "modelo": "Mustang",
          "categoria": "Coupe",
          "preço": 250000,
          "portas": 2
        },
        {
          "id": 8,
          "modelo": "Camaro",
          "categoria": "Coupe",
          "preço": 230000,
          "portas": 2
        }
      ]);
      
    const addCarroHandler = (carro) => {
        setCarros((prevCarros) => {
            return [...prevCarros, carro];
        });
        console.log(carros);
    };

    const cat_suv = carros.filter((carro) => carro.categoria === "SUV");
    const cat_coupe = carros.filter((carro) => carro.categoria === "Coupe");
    const cat_sedan = carros.filter((carro) => carro.categoria === "Sedan");

    // const portas = carros.filter((carro) => carro.portas === portas)
    return (
        <div className="container">
            {/* header */}
            <div className="row">
                <div className="col-md-12">
                    <h1 className="fs-1 fw-normal text-center text-bg-warning border rounded border-2 shadow">
                        Concessionária EveryCar
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h1>SUV</h1>
                    <Concessionaria carros={cat_suv} />
                </div>
                <div className="col-md-4">
                    <h1>COUPE</h1>
                    <Concessionaria carros={cat_coupe} />
                </div>
                <div className="col-md-4">
                    <h1>SEDAN</h1>
                    <Concessionaria carros={cat_sedan} />
                </div>
            </div>
            {/* <Concessionaria carros={carros} /> */}
            <NewCarro onAddCarro={addCarroHandler} />
        </div>
    );
}

export default App;
