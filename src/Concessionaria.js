import React from "react";
import Card from "./Card";
import Carro from "./Carro";
import FilterCarro from "./Components/FilterCarro";

function Concessionaria(props) {
    const [afterFilter, setAfterFilter] = React.useState("2");
    
    const onSelectHandler = (selected) => {
        setAfterFilter(selected);
        console.log(selected);
    };

    return (
        <div>
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
            <FilterCarro selected={afterFilter} onSelect={onSelectHandler}/>
        </div>
    );
}
export default Concessionaria;
