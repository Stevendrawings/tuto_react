import { render } from '@testing-library/react';
import React from 'react';

// une autre manière d'ecrire 

/* const Membre = ( props ) => { 
    const name = "stevens" 
    console.log(props)
    return (
        <h2>Membre de ma famille : { name.toUpperCase() } </h2>
    )
}
*/

const Membre = ({ nom }) => {
    // props est un parametre emis dans le component de se fichier (props.'nom') fait référence à A3. dans App pour lister les différents membre
    return (
        <h2>Membre de ma famille : { nom } </h2>
    )
}

export default Membre