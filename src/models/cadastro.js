function ValidarCPF(cpf) {
  return {
    valido: cpf.length === 11,
    texto: cpf.length === 11 ? "" : "O CPF precisa ter 11 digitos.",
  };
}

function ValidarSenha(senha) {
    let valido = senha.length >= 6 && senha.length <= 30 ;
    return {
        valido, texto: valido ? "" : "A senha deve ter de 6 a 30 dígitos.",
    };
}

export { ValidarCPF, ValidarSenha };
