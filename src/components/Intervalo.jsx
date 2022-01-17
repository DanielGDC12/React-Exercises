import React from 'react'
import './Intervalo.css';

import {connect} from 'react-redux'
import { alterarNumeroMaximo, alterarNumeroMinimo } from './store/actions/numeros';
import Card from './Card'

function Intervalo(props){
    const {min,max} = props;
    return (
        <Card title="Intervalo" red>
            <div className='Intervalo'>
            <span>
                <strong>Minimo:</strong>
                <input type="number" value={min}  onChange={e => props.AlterarMin(+e.target.value)} />
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={max}  onChange={e => props.AlterarMax(+e.target.value)} />
            </span>
            </div>
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
        },

        AlterarMax(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
    
}

export default connect(MapStateToProps,MapDispatchToProp) (Intervalo);