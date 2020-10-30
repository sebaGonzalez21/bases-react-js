import React,{FC} from 'react'
import './Button.css'

export type ButtonClickHandler = (text: string) => void

type Props = {
	type?: string, //soporta undefined
	text: string,
	clickHandler: ButtonClickHandler
}

//componente funcional
const Button : FC<Props> = ({type,text,clickHandler}) =>(
	<button className={type} onClick={() => clickHandler(text)}>
		<span>{text}</span>
	</button>	
)

export default Button
