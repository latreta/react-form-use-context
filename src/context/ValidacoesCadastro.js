import React from 'react';
import { ValidarCPF, ValidarSenha } from "../models/cadastro";

const ValidacoesCadastro = React.createContext(
    { cpf: ValidarCPF, password: ValidarSenha }
);

// eslint-disable-next-line
function semValidacao(dados) {
    return {
        valido: true,
        texto: ""
    };
}

export default ValidacoesCadastro;