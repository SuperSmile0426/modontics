import { useEffect, useRef, useState } from 'react';

export const useVerificationHook = (codeLength, value) => {
	const [inputStates, setInputStates] = useState(
		new Array(codeLength).fill('')
	);
	const inputBoxReference = useRef([]);

	useEffect(() => {
		if (value)
			setInputStates([
				...value.split(''),
				...new Array(4 - value.length).fill(''),
			]);
	}, [value, codeLength]);

	const handleChange = (value, index) => {
		if (!Number.isNaN(Number(value))) {
			const newArr = [...inputStates];
			if (value) newArr[index] = value[0];
			else newArr[index] = '';

			if (value[1] && index < codeLength - 1) {
				newArr[index + 1] = value[1];
			}
			setInputStates(newArr);
			if (value && index < codeLength - 1)
				inputBoxReference.current[index + 1]?.focus();
		} else return;
	};

	const handleBackspaceAndEnter = (e, index) => {
		const target = e.target;

		if (e.key === 'Backspace' && !target.value && index > 0) {
			inputBoxReference.current[index - 1]?.focus();
		}
		if (e.key === 'Enter' && target.value && index < codeLength - 1) {
			inputBoxReference.current[index + 1]?.focus();
		}
		e.preventDefault();
	};

	return {
		inputStates,
		inputBoxReference,
		handleChange,
		handleBackspaceAndEnter,
	};
};
