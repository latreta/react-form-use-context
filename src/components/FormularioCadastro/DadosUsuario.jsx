import React, { useState, useContext } from 'react';
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import { TextField, Button } from '@material-ui/core';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({ email, password });
            }
        }}>
            <TextField id="email"
                name="email"
                value={email}
                required
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(event) => {
                    setEmail(event.target.value);
                }} />
            <TextField id="password"
                name="password"
                value={password}
                required
                label="Senha"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!erros.password.valido}
                helperText={erros.password.texto}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                onBlur={validarCampos} />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>
                Cadastrar
                </Button>
        </form>
    );
}

export default DadosUsuario;