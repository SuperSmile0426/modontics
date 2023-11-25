import React from 'react';
import { StyledButton, StyledText } from './Button.styles';

export const Button = (props) => {
	const { name, ...rest } = props;

	return (
		<StyledButton {...rest}>
			<StyledText>{name}</StyledText>
		</StyledButton>
	);
};
