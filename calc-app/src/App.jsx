//comentario desactivar slint
/*eslint no-eval: 0*/

import React,{useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'
import Numbers from './components/Numbers/Numbers'

const App = () => {
	//array destructuring
	const [stack, setStack] = useState("")

	const items = words(stack,/[^-^+^*^/]+/g)
	const value = items.length > 0 ? items[items.length-1] : "0"
	console.log("renderizacion app",value)
	return (
		<main className='react-calculator'>
			<Result value={value}/>
			<Numbers onClickNumber={number =>{
				console.log("Click en number", number)
				setStack(`${stack}${number}`)
			}}/>
			<Functions 
			onContentClear={()=> 
				{
					console.log("Content clear")
					setStack('')
				}}
			onDelete={()=>
				{
					console.log("onDelete")
					const newStack = stack.length > 0 ? stack.substring(0,stack.length-1) : ""
					setStack(newStack)
				}}

			/>
			<MathOperations 
			onClickOperation={operation => 
            {
				console.log("Operation:", operation)
				setStack(`${stack}${operation}`)
			}}
			onClickEqual={equal =>
			{
				console.log("equal",equal )
				setStack(eval(stack).toString())
			}}
			/>
		</main>)
}

export default App
