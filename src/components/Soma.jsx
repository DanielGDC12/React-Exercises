import {React} from 'react';
import {connect} from 'react-redux';
import {alterarNumeroMinimo, alterarNumeroMaximo} from './store/actions/numeros';

import Card from './Card'

 function Soma(props) {
    const {min, max } = props;
    return (
        <Card title="Soma" green>
         <span>Resultado:  </span>
           <strong>{min + max}</strong>
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

export default connect(MapStateToProps,MapDispatchToProp) (Soma)

