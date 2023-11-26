import React, { forwardRef } from 'react';
import { Container, StyledInput, CodeButton } from './Input.styles';

export const Input = forwardRef((props, ref) => {
	const { code, onCodeSend, ...rest } = props;

	return (
		<Container>
			<StyledInput ref={ref} {...rest} />
			{code && <CodeButton onClick={onCodeSend}>Send Code</CodeButton>}
		</Container>
	);
});

Input.displayName = 'Input';
