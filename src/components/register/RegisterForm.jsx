import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
	Container,
	FormContainer,
	FormTitle,
	LoginContainer,
	LoginLink,
} from './RegisterForm.styles';
import { InputForm, Button } from '../common';
import { CtaBig } from '../../styles';

const schema = Yup.object().shape({
	firstName: Yup.string().required('Please enter a valid First Name'),
	lastName: Yup.string().required('Please enter a valid Last Name'),
	password: Yup.string()
		.required('Please enter a valid Password')
		.min(8, 'Password must be at least 8 characters'),
	confirmPassword: Yup.string()
		.required('Please confirm your password')
		.oneOf([Yup.ref('password')], 'Passwords do not match'),
	phoneNumber: Yup.string().required('Please enter a valid phone number'),
	verifyCode: Yup.string().oneOf(['1111'], 'Incorrect Code'),
});

export const RegisterForm = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });
	const [sendCode, setSendCode] = useState(false);

	const onSubmit = () => {
		navigate('/dashboard');
	};

	return (
		<Container>
			<FormTitle>Create a New Account</FormTitle>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="firstName"
					control={control}
					render={({ field }) => (
						<InputForm
							title="First Name"
							required
							errors={errors.firstName}
							inputRef={field.ref}
							value={field.value ?? ''}
							onChange={field.onChange}
						/>
					)}
				/>
				<Controller
					name="lastName"
					control={control}
					render={({ field }) => (
						<InputForm
							title="Last Name"
							required
							errors={errors.lastName}
							inputRef={field.ref}
							value={field.value ?? ''}
							onChange={field.onChange}
						/>
					)}
				/>
				<Controller
					name="phoneNumber"
					control={control}
					render={({ field }) => (
						<InputForm
							title="Primary Phone Number"
							required
							type="phone"
							errors={errors.phoneNumber}
							value={field.value ?? ''}
							onChange={field.onChange}
							setSendCode={setSendCode}
						/>
					)}
				/>
				<Controller
					name="verifyCode"
					control={control}
					render={({ field }) => (
						<InputForm
							title="Verify Phone"
							required
							type="code"
							errors={errors.verifyCode}
							value={field.value ?? ''}
							onChange={field.onChange}
							setSendCode={setSendCode}
							disabled={!sendCode}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<InputForm
							title="Password"
							required
							type="password"
							errors={errors.password}
							inputRef={field.ref}
							value={field.value ?? ''}
							onChange={field.onChange}
						/>
					)}
				/>
				<Controller
					name="confirmPassword"
					control={control}
					render={({ field }) => (
						<InputForm
							title="Retype Password"
							required
							type="password"
							errors={errors.confirmPassword}
							inputRef={field.ref}
							value={field.value ?? ''}
							onChange={field.onChange}
						/>
					)}
				/>
				<Button name="Next" disabled={Object.keys(errors).length} />
				<LoginContainer>
					<CtaBig>Already have an account yet?</CtaBig>
					<LoginLink>Login</LoginLink>
				</LoginContainer>
			</FormContainer>
		</Container>
	);
};
