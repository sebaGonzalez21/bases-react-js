import React,{ useState } from 'react';//hooks siempre empiezan con use
import Seconds from './Seconds';


const App = () => {
	//estado inicial
	//const {setShowTimer} = this;//utilizar hook
	//const {showTimer} = this.state;//utilizar hook
	//useState => estado / funcion que modifica el estado
	//array destructuring
	//primer nombre de variable y estado, 
	const [showTimer, setShowTimer] = useState(false);
	

        return (
          <div className="App">
            <h1>Aprender Hooks Version</h1>    
            <button onClick={() => setShowTimer(!showTimer)}>
                {!showTimer
                    ? 'Activar cronómetro'
                    : 'Apagar cronómetro'}
            </button>
            {!showTimer
                ? (
                    <div className="alert alert-danger">
                        Apagado
                    </div>
                )
                : (
                    <div className="alert alert-success">
                        Activo! <Seconds/> segundos
                    </div>
                )
            }
          </div>
    );
	
}

export default App;
