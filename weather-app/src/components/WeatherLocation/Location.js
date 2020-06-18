import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

//const Location = (props) =>{ forma 1
const Location = ({city}) =>
	//destructuring js es 6
	//const city = props.city; forma 1
	//const { city }= props.city;
	(<div className="locationCont">
				<h1>
					{city}
				</h1>
			</div>);

Location.propTypes = {
	city: PropTypes.string.isRequired,
}

export default Location;