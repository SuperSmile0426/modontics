import React from 'react';
import { Container, FormContainer, FormTitle } from './RegisterForm.styles';

export const RegisterFormComponent = () => {
	return (
		<Container>
			<FormTitle>Create a New Account</FormTitle>
			<FormContainer>
				<div>First Name</div>
				<div>Last Name</div>
				<div>Next Button</div>
				<div>Login</div>
			</FormContainer>
		</Container>
	);
};
