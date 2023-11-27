import React, { useEffect } from 'react';
import { Container } from './VerifyCode.styles';
import { useVerificationHook } from '../../../hooks';
import { Input } from '../Input/Input';

export const VerifyCode = (props) => {
	const { disabled, errors, value, onChange } = props;
	const {
		inputStates,
		inputBoxReference,
		handleChange,
		handleBackspaceAndEnter,
	} = useVerificationHook(4, value);

	useEffect(() => {
		// onChange(inputStates.join(''));
	}, [inputStates, onChange]);

	return (
		<Container>
			{inputStates.map((digit, index) => (
				<div key={index}>
					<Input
						errors={errors}
						disabled={disabled}
						value={digit}
						onChange={(e) => {
							handleChange(e.target.value, index);
						}}
						ref={(reference) => (inputBoxReference.current[index] = reference)}
						onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
						size={1}
					/>
				</div>
			))}
		</Container>
	);
};
