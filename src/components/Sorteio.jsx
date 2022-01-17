import React from 'react';

import {connect} from 'react-redux'

import {alterarNumeroMinimo, alterarNumeroMaximo}from './store/actions/numeros';
import Card from './Card'

    function Sorteio(props) {
        const {min, max} = props;
        const random = parseInt(Math.random() * (max-min)) +min;

    return (
        <Card title="Sorteio" purple>
            <span>Resultado: </span>
            <strong>{random}</strong>
        </Card>
    );
}


function MapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function MapDispatchToProp(dispatch){
    return {
        AlterarMin(novoNumero){
            const action =  alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
    
} 

export default connect(MapStateToProps,MapDispatchToProp) (Sorteio);