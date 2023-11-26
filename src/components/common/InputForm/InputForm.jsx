import React from 'react';
import { Container, StyledLabel, Title } from './InputForm.styles';
import { Input } from '../Input/Input';
import { Phone } from '../PhoneInput/PhoneInput';
import { VerifyCode } from '../VerifyCode/VerifyCode';

export const InputForm = (props) => {
	const { title, type, required, ...rest } = props;

	return (
		<Container>
			<StyledLabel>
				<Title>
					{title}
					{required && '*'}
				</Title>
			</StyledLabel>
			{type === 'phone' ? (
				<Phone />
			) : type === 'code' ? (
				<VerifyCode />
			) : (
				<Input type={type} {...rest} />
			)}
		</Container>
	);
};
