import React from 'react';
import {withRouter} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
const HomeContainer = props => {

	const onClick = () =>{
		props.history.push('/customers');
	}
	

	return (
		<div>
			<AppFrame 
			header="Home"
			body={
				<div>
					Esta es la pantalla inicial,
					<CustomersActions>
						<button onClick={onClick}>Listado de Clientes</button>
						{/*<Link to="customers">Listado de Clientes</Link> */}
					</CustomersActions>
				</div>
			}></AppFrame>
		</div>
	);
};

//agrega funcionalidad al componente, 3 propiedades, se asegura que el conector
//funcione
export default withRouter(HomeContainer);