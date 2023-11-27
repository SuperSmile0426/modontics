import React from 'react';
import {
	Container,
	StyledLabel,
	Title,
	StyledError,
	StyledErrorMsg,
} from './InputForm.styles';
import { Input } from '../Input/Input';
import { Phone } from '../PhoneInput/PhoneInput';
import { VerifyCode } from '../VerifyCode/VerifyCode';

export const InputForm = (props) => {
	const {
		title,
		type,
		required,
		errors,
		inputRef,
		value,
		setSendCode,
		onChange,
		disabled,
		...rest
	} = props;

	return (
		<Container>
			<StyledLabel>
				<Title>
					{title}
					{required && '*'}
				</Title>
			</StyledLabel>
			{type === 'phone' ? (
				<Phone
					errors={errors}
					value={value}
					onChange={onChange}
					setSendCode={setSendCode}
				/>
			) : type === 'code' ? (
				<VerifyCode
					errors={errors}
					disabled={disabled}
					value={value}
					onChange={onChange}
				/>
			) : (
				<Input
					errors={errors}
					type={type}
					{...rest}
					ref={inputRef}
					value={value}
					onChange={onChange}
				/>
			)}
			{!!errors && (
				<StyledError>
					<StyledErrorMsg>{errors.message}</StyledErrorMsg>
				</StyledError>
			)}
		</Container>
	);
};
