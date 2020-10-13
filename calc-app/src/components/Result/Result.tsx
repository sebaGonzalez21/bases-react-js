import React,{FC} from 'react'
import PropTypes from 'prop-types'


type Props = {
	value: string
}

const Result: FC<Props> = ({value}) =>(
	<div className="result">
		<span>{value}</span>
	</div>
)

Result.propTypes = {
	value: PropTypes.string.isRequired
}

Result.defaultProps = {
	value: "0"
}



export default Result
