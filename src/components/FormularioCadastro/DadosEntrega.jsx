import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({cep, address, number, state, city})
            }}>
                <TextField id="cep" value={cep} label="CEP" type="text" margin="normal" variant="outlined" onChange={(event) => {
                    setCep(event.target.value);
                }} />
                <TextField id="address" value={address} label="Endereço" type="text" margin="normal" variant="outlined" onChange={(event) => {
                    setAddress(event.target.value);
                }} />
                <TextField id="number" value={number} label="Número" type="number" margin="normal" variant="outlined" onChange={(event) => {
                    setNumber(event.target.value);
                }} />
                <TextField id="state" value={state} label="Estado" type="text" margin="normal" variant="outlined" onChange={(event) => {
                    setState(event.target.value);
                }} />
                <TextField id="city" value={city} label="Cidade" type="text" margin="normal" variant="outlined" onChange={(event) => {
                    setCity(event.target.value);
                }} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Cadastrar</Button>
            </form>
        </>
    );
}

export default DadosEntrega;