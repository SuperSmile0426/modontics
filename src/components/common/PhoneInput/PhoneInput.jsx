import React, { useEffect, useState } from 'react';
import {
	// parsePhoneNumber,
	getCountryCallingCode,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Input } from '../Input/Input';
import { CustomPhoneInput } from './PhoneInput.styles';

export const Phone = () => {
	const [, setPhoneCountryCode] = useState('HK');
	const [code, setCode] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value) {
			setCode(true);
		} else setCode(false);
	}, [value]);

	return (
		<CustomPhoneInput
			onCountryChange={(v) => setPhoneCountryCode(v)}
			limitMaxLength={true}
			initialValueFormat="national"
			value={value}
			onChange={setValue}
			countryCallingCodeEditable
			defaultCountry="HK"
			inputComponent={Input}
			numberInputProps={{ code: code }}
			flagComponent={(props) => (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						height: '100%',
						gap: '8px',
					}}
				>
					<img
						src={props.flagUrl.replace('{XX}', props.country)}
						alt={props.countryName}
					/>
					<span>{getCountryCallingCode(props.country)}</span>
				</div>
			)}
		/>
	);
};
