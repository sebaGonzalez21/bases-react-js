import React, {Component} from 'react'; // react y component

//propiedaes pasadas
export const setPropsAsInitial = WrappedComponent => (
	class extends Component { 
		render() { 
			return <WrappedComponent {...this.props} 
			initialValues={this.props} 
			enableReinitialize
			/>;//initial solo inicializa una vez si se quiere reinicializar usar enableReinitialize
		}
	}

);