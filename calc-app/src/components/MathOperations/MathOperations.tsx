import React,{FC} from 'react'
import PropTypes from 'prop-types'
import Button,{ButtonClickHandler} from '../Button/Button'

type Props = {
	onClickOperation: ButtonClickHandler
	onClickEqual: ButtonClickHandler
}

const MathOperations: FC<Props> = ({onClickOperation,onClickEqual}) => (
	<section className="math-operations">
		<Button text="+" clickHandler={onClickOperation}/>
		<Button text="-" clickHandler={onClickOperation}/>
		<Button text="*" clickHandler={onClickOperation}/>
		<Button text="/" clickHandler={onClickOperation}/>
		<Button text="=" clickHandler={onClickEqual}/>
	</section>
)

export default MathOperations
