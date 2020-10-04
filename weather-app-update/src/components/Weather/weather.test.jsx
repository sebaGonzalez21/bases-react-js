import React from 'react';
import Weather from './Weather';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Weather render sunny', async()=>{
	//AAA 
	const grades = 10;
	const weather = "clear";
	const { findByRole } = render(<Weather temperature={grades} state={weather}/>)
	const temp = await findByRole("heading");

	expect(temp).toHaveTextContent(grades);
})