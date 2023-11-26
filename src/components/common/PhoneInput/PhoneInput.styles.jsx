import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';

export const CustomPhoneInput = styled(PhoneInput)`
	.PhoneInputCountry {
		/* Add your custom styles here */
		display: flex;
		width: 108px;
		height: 39px;
		padding: 2px 14px 2px 20px;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		border-radius: 8px;
		border: 1px solid var(--base-disabled-disabled-light, #dfdfdf);
		background: var(--surface-surface-grey-6, #fff);
	}
	.PhoneInputCountrySelectArrow {
		width: 8px;
		height: 8px;
	}

	display: flex;
	gap: 4px;
	width: 100%;
`;
