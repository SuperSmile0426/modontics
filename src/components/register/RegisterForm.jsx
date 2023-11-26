import React from 'react';
import { Container, FormContainer, FormTitle } from './RegisterForm.styles';
import { InputForm, Button } from '../common';

export const RegisterForm = () => {
	return (
		<Container>
			<FormTitle>Create a New Account</FormTitle>
			<FormContainer>
				<InputForm title="First Name" required />
				<InputForm title="Last Name" required />
				<InputForm title="Primary Phone Number" type="phone" required />
				<div>Verify Phone</div>
				<InputForm title="New Password" type="input" required />
				<InputForm title="Retype Password" required type="password" />
				<Button name="Next" />
				<div>Login</div>
			</FormContainer>
		</Container>
	);
};
