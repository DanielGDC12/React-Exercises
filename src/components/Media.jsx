import React from 'react';
import {connect} from 'react-redux'
import Card from './Card'
import {alterarNumeroMinimo, alterarNumeroMaximo} from './store/actions/numeros';

function Media(props){
    const {min,max} = props;
   
    return (
        <Card title="Media" blue>
           <span>Resultado:  </span>
           <strong>{(min+max)/2}</strong>
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

export default connect(MapStateToProps,MapDispatchToProp) (Media);