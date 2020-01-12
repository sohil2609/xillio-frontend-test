import React from 'react';

const TextInput = (props) => {
	const { name, onChange, value, type, showLabel, label, placeholder } = props;
	return (
		<div className="form-group">
			{showLabel && <label for="exampleInputEmail1">{label}</label>}
			<input
				data-test="textInput"
				value={value}
				type={type}
				className="form-control"
				id={name}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				autoComplete="off"
			/>
		</div>
	);
};

TextInput.defaultProps = {
	showLabel: false,
	type: 'text',
	label: ''
};

export default TextInput;
