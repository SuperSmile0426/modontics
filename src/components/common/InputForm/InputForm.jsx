import React from 'react';
import { Container, StyledLabel, Title } from './InputForm.styles';
import { Input } from '../Input/Input';

export const InputForm = (props) => {
	const { title, required, ...rest } = props;

	return (
		<Container>
			<StyledLabel>
				<Title>
					{title}
					{required && '*'}
				</Title>
			</StyledLabel>
			<Input {...rest} />
		</Container>
	);
};
