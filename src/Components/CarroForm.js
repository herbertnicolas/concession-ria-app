import react, { useState } from "react";

function CarroForm(props) {
  const [modelo, setModelo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState(0);

  const newCarHandle = (event) => {
    event.preventDefault();

    const dadosCarro = {
      modelo: modelo,
      categoria: categoria,
      preco: preco,
    };

    props.onSaveCarro(dadosCarro);
  };

  return (
    <form onSubmit={newCarHandle}>
      <div>
        <label>Modelo:{props.model}</label>
        <input type="text" value={modelo} onChange={(event)=>{setModelo(event.target.value)}}/>
      </div>
      <div>
        <label>Categoria:{props.categoria}</label>
        <input type="text" value={categoria} onChange={(event)=>{setCategoria(event.target.value)}} />
      </div>
      <div>
        <label>Preço:{props.preco}</label>
        <input type="number" value={preco} onChange={(event)=>{setPreco(event.target.value)}} />
      </div>
      <button type="submit">Adicionar carro</button>
    </form>
  );
}
export default CarroForm;
