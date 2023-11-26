import React from 'react';
import { Container } from './VerifyCode.styles';
import { useVerificationHook } from '../../../hooks';
import { Input } from '../Input/Input';

export const VerifyCode = () => {
	const {
		inputStates,
		inputBoxReference,
		handleChange,
		handleBackspaceAndEnter,
	} = useVerificationHook(4);

	return (
		<Container>
			{inputStates.map((digit, index) => (
				<div key={index}>
					<Input
						value={digit}
						onChange={(e) => handleChange(e.target.value, index)}
						ref={(reference) => (inputBoxReference.current[index] = reference)}
						onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
						size={1}
					/>
				</div>
			))}
		</Container>
	);
};
