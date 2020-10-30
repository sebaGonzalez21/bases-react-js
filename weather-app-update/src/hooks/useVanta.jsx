import { useRef,useEffect,useState} from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from "three";

export const useVanta = () =>{
	
		const myRefDiv = useRef(null)
		const [vanta, setVanta] = useState(0) //valor inicial del flag no inicializado

		//primera renderizacion es null, valor inicial
		//console.log("myRefDiv.current->",myRefDiv.current);//valor actual al redenrizar x2

		useEffect(()=>{
			//invocacion del codigo posterior a la llamada
			//console.log("myRefDiv.current (useEffect)->",myRefDiv.current);	
			if(!vanta){
				//solo pase una vez
				//aca vamos a hacer inicializacion del componente
				setVanta(1)
				//activa el efecto de nubes
				Clouds({
					THREE,
					el: myRefDiv.current
				})
				//console.log("establezco vanta valor diferente de 0");
			}
			
			//al salir de la pantalla detener el efecto
			//desactivar los recursos (div+vanta effect)
			/*return () =>{
				//liberar los recursos asociados
				//destruye los recursos tomados por vanta
				if(vanta){
					//venta.destroy()
				}
			}*/

		},[vanta]) //con esto se asegura que funcione correctamente

	return myRefDiv;
}

