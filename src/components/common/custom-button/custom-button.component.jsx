import React from 'react';

const CustomButton = ({ extraCssClass, text, onClick, type }) => (
	<button className={`btn ${extraCssClass}`} type={type} onClick={onClick} data-test="customButton">
		{text}
	</button>
);

export default CustomButton;
