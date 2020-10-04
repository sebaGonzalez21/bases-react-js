import React, { Component } from 'react'

class ErrorBoundary extends Component{

	//instancia de inicializacion de la clase en memoria
	constructor(props){
		super(props)

		//state propiedad de estado de componente base
		this.state = {
			hasError: false
		}
	}

	//funcion sin acceso a la instancia
	static getDerivedStateFromError(error){
		return {
			hasError: true
		}
	}

	componentDidCatch(error,errorInfo){
		console.log("errorInfo ",errorInfo											);
	}

	render(){
	return (
			this.state.hasError ?
			(<h1>Hubo un error</h1>)
			:
			(this.props.children)
		)
	}
}

export default ErrorBoundary