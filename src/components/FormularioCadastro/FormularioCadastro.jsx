import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import {Container, Typography, Stepper, StepLabel, Step} from '@material-ui/core';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro({ aoEnviar, validacoes }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(()=> {
        if(etapaAtual === formularios.length){
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5" align="center">Obrigado pelo cadastro!</Typography>
    ];

    function coletarDados(dados){
        setDadosColetados({...dadosColetados, ...dados})
        proximaEtapa();
    }

    function proximaEtapa(){
        setEtapaAtual(etapaAtual+1);
    }
    
    return (        
        <Container fixed maxWidth="sm">
            <Typography variant="h3" component="h2" align="center">
                Formulário de Cadastro
            </Typography>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Container>
    )
}



export default FormularioCadastro;