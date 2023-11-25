import React from 'react';
import { Container, FormContainer, FormTitle } from './RegisterForm.styles';
import { InputForm, Button } from '../common';

export const RegisterFormComponent = () => {
	return (
		<Container>
			<FormTitle>Create a New Account</FormTitle>
			<FormContainer>
				<InputForm title="First Name" required />
				<InputForm title="Last Name" required />
				<div>Primary Phone Number</div>
				<div>Verify Phone</div>
				<InputForm title="New Password" required type="password" />
				<InputForm title="Retype Password" required type="password" />
				<Button name="Next" />
				<div>Login</div>
			</FormContainer>
		</Container>
	);
};
