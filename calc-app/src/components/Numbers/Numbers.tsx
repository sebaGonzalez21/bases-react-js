import React,{FC} from 'react'
import PropTypes from 'prop-types'
import Button, { ButtonClickHandler } from '../Button/Button'

const numbers = [7,8,9,4,5,6,1,2,3,0]

const renderButtons = (onClickNumber: ButtonClickHandler) =>{
	const renderButton = (number: number) => (
		<Button key={number.toString()} text={number.toString()} clickHandler={onClickNumber}/>
	)

	return numbers.map(renderButton)
		//
}

type Props ={
	onClickNumber: ButtonClickHandler
}

const Numbers : FC<Props> = ({onClickNumber}) => (
	<section className="numbers">
		{
			renderButtons(onClickNumber)
		}
	</section>
)

Numbers.propTypes = {
	onClickNumber: PropTypes.func.isRequired,
}

export default Numbers
