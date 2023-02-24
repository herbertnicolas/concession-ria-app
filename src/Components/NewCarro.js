import CarroForm from "./CarroForm";

function NewCarro(props){
    const onSaveCarroHandler = (dadosSubmetidos) => {
        const dados = {
            id: Math.random().toString(),
            ...dadosSubmetidos,
        }
        props.onAddCarro(dados);
    }


    return(
        <div>
            <CarroForm onSaveCarro={onSaveCarroHandler}/>
        </div>
    )
}
export default NewCarro;