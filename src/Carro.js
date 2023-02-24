import React from 'react';

import './Carro.css';
import Card from './Card.js';

function Carro(props){
    return(
        <Card className='car-item'>
            <div className='car-item__model'>Modelo: {props.modelo}</div>
            <div className='car-item__description'>Categoria: {props.categoria}</div>
            <div>Preço: {props.preco}</div> 
        </Card>
    )
}
export default Carro;