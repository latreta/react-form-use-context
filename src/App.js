import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
        <FormularioCadastro aoEnviar={aoEnviarForm} />
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
