import React, { forwardRef } from 'react';
import { Container, StyledInput, CodeButton } from './Input.styles';

export const Input = forwardRef((props, ref) => {
	const { code, setSendCode, value, onChange, ...rest } = props;

	const onCodeSend = (e) => {
		e.stopPropagation();
		setSendCode(true);
	};

	return (
		<Container>
			<StyledInput ref={ref} value={value} onChange={onChange} {...rest} />
			{code && (
				<CodeButton onClick={onCodeSend} type="button">
					Send Code
				</CodeButton>
			)}
		</Container>
	);
});

Input.displayName = 'Input';
