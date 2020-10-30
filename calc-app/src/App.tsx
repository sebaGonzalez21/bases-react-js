//comentario desactivar slint
/*eslint no-eval: 0*/

import React,{useState,FC} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'
import Numbers from './components/Numbers/Numbers'

const App: FC = () => {
	//array destructuring
	const [stack, setStack] = useState("")

	const items = words(stack,/[^-^+^*^/]+/g)
	const value = items.length > 0 ? items[items.length-1] : "0"
	return (
		<main className='react-calculator'>
			<Result value={value}/>
			<Numbers onClickNumber={number =>setStack(`${stack}${number}`)}/>
			<Functions 
			onContentClear={()=>setStack('')}
			onDelete={()=>
				{
					const newStack = stack.length > 0 ? stack.substring(0,stack.length-1) : ""
					setStack(newStack)
				}}

			/>
			<MathOperations 
			onClickOperation={operation =>setStack(`${stack}${operation}`)}
			onClickEqual={equal =>setStack(eval(stack).toString())}
			/>
		</main>)
}

export default App
