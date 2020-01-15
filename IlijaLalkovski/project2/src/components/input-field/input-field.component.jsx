import React from 'react';

import './input-field.styles.scss';

const InputField = ({handleChange, label, ...otherProps}) => {
	return (
		<div className="group">
			<input type="text" className="input-field" onChange={handleChange}/>
			{label ? (
			<label
				className={`${otherProps.value.length
					? 'shrink'
					: ''} input-field-label`}
			>
				{label}
			</label>
		) : null}
		</div>
	);
};

export default InputField;
