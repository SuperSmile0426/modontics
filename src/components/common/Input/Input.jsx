import React from 'react';
import { Container, StyledInput, CodeButton } from './Input.styles';

export const Input = (props) => {
	const { code, onCodeSend, ...rest } = props;

	return (
		<Container>
			<StyledInput {...rest} />
			{code && <CodeButton onClick={onCodeSend}>Send Code</CodeButton>}
		</Container>
	);
};
