import React from 'react';
import { StyledButton, StyledText } from './Button.styles';

export const Button = (props) => {
	const { name, disabled, ...rest } = props;

	return (
		<StyledButton disabled={disabled} {...rest}>
			<StyledText>{name}</StyledText>
		</StyledButton>
	);
};
