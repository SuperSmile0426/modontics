import React from 'react';
import {
	Container,
	FormContainer,
	FormTitle,
	LoginContainer,
	LoginLink,
} from './RegisterForm.styles';
import { InputForm, Button } from '../common';
import { CtaBig } from '../../styles';

export const RegisterForm = () => {
	return (
		<Container>
			<FormTitle>Create a New Account</FormTitle>
			<FormContainer>
				<InputForm title="First Name" required />
				<InputForm title="Last Name" required />
				<InputForm title="Primary Phone Number" type="phone" required />
				<InputForm title="Verify Phone" type="code" required />
				<InputForm title="New Password" type="password" required />
				<InputForm title="Retype Password" required type="password" />
				<Button name="Next" />
				<LoginContainer>
					<CtaBig>Already have an account yet?</CtaBig>
					<LoginLink>Login</LoginLink>
				</LoginContainer>
			</FormContainer>
		</Container>
	);
};
