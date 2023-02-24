import React from 'react';
import Card from "./Card";
import Carro from "./Carro";

function Concessionaria(props) {
  return (
    <Card className="cars">
      {props.carros.map((carro) => (
        <Carro
          key={carro.id}
          modelo={carro.modelo}
          categoria={carro.categoria}
          preco={carro.preco}
        />
      ))}
    </Card>
    // <Card className="cars">
    //   <Carro
    //     modelo={props.carros[0].modelo}
    //     categoria={props.carros[0].categoria}
    //     preco={props.carros[0].preco}
    //   />
    //   <Carro
    //     modelo={props.carros[1].modelo}
    //     categoria={props.carros[1].categoria}
    //     preco={props.carros[1].preco}
    //   />
    //   <Carro
    //     modelo={props.carros[2].modelo}
    //     categoria={props.carros[2].categoria}
    //     preco={props.carros[2].preco}
    //   />
    //   <Carro
    //     modelo={props.carros[3].modelo}
    //     categoria={props.carros[3].categoria}
    //     preco={props.carros[3].preco}
    //   />
    //   <Carro
    //     modelo={props.carros[4].modelo}
    //     categoria={props.carros[4].categoria}
    //     preco={props.carros[4].preco}
    //   />
    //   <Carro
    //     modelo={props.carros[5].modelo}
    //     categoria={props.carros[5].categoria}
    //     preco={props.carros[5].preco}
    //   />
    // </Card>
  );
}
export default Concessionaria;