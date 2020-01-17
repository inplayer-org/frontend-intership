import React from 'react';

import './input-field.styles.scss';

const InputField = ({ handleChange, label, type = 'text', ...otherProps }) => (
	<div className="group">
		<input
			type={type}
			className="input-field"
			onChange={handleChange}
			{...otherProps}
		/>
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

export default InputField;
