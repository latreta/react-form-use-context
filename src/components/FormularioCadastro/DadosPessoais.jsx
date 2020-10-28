import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import "fontsource-roboto";
import { TextField, Switch, FormControlLabel } from '@material-ui/core';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }
        }}>
            <TextField value={nome} id="nome" onChange={(event) => {
                setNome(event.target.value);
            }} fullWidth label="Nome" margin="normal" variant="outlined" />

            <TextField value={sobrenome} id="sobrenome" onChange={(event) => {
                setSobrenome(event.target.value);
            }} fullWidth label="Sobrenome" margin="normal" variant="outlined" />

            <TextField value={cpf} id="cpf" name="cpf" onChange={(event) => {
                setCPF(event.target.value);
            }} onBlur={(event) => validarCampos(event)} error={!erros.cpf.valido} helperText={erros.cpf.texto} fullWidth label="CPF" margin="normal" variant="outlined" />

            <FormControlLabel label="Promoções" control={<Switch name="promocoes" checked={promocoes} onChange={(event) => {
                setPromocoes(event.target.checked);
            }} color="primary" />} />

            <FormControlLabel label="Novidades" control={<Switch name="novidades" checked={novidades} onChange={(event) => {
                setNovidades(event.target.checked);
            }} color="primary" />} />

            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;