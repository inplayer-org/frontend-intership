import React from 'react';

import './input-field.styles.scss';

const InputField = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input
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
