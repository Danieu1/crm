import React from 'react';

function Animal(props){
    return <div>
           <p>{props.especie}</p>
           <p>{props.nome}</p>
           <p> {props.lugar}</p>
        </div>;
}
export default Animal;