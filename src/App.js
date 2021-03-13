// l'import de (import React, { Component } from "react") que vous voyez juste en dessous fait référence A2.
import React, { Component } from "react";

import './App.css';
import Membre from "./components/Membre";

// A2. la class (class App extends Component {})
class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>react</h1>
        {/* les parametres est à mettre sur le component <Membre PARAMETRE => (nom = 'toto')  */}
        {/* <Membre (A3. > nom) = "kevin"/> */}
        <Membre nom = "kevin"/>
        <Membre nom = "Steve"/>
        <Membre nom = "Julia"/>
        <Membre nom = "Saidou"/>
      </div>
    );
  }
}

// toujours exporté un component quoi qu'il arrive
export default App;
