import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex: 1;
	padding: 2px 8px;
	justify-content: center;
	align-items: flex-start;
	gap: 4px;
	align-self: stretch;
	border-radius: ${(props) => props.theme.spacing.xs};
	border: ${(props) =>
		`1px solid ${
			props.errors
				? props.theme.colors.supportive.flamingo
				: props.theme.colors.greys.gainsboro
		}`};
	background: ${(props) =>
		props.errors
			? props.theme.colors.supportive.snow
			: props.theme.colors.blacksAndWhite.white};

	&:focus-within {
		border: ${(props) => `1px solid ${props.theme.colors.greys.charcoal}`};
	}
`;

export const StyledInput = styled.input`
	display: flex;
	padding: ${(props) => props.theme.spacing.xs};
	align-items: center;
	flex: 1 0 0;
	align-self: stretch;
	border: none;
	outline: none;

	background: ${(props) =>
		props.errors
			? props.theme.colors.supportive.snow
			: props.theme.colors.blacksAndWhite.white};

	&::placeholder {
		color: ${(props) => props.theme.colors.greys.charcoal};
	}
`;

export const CodeButton = styled.button`
	position: absolute;
	right: 0;
	padding: ${(props) => props.theme.spacing.xs};
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	border: none;
	font-size: ${(props) => props.theme.typography.sizes.ctaMedium.sizeWeb};
	color: ${(props) => props.theme.colors.primary.primary};
	cursor: pointer;
`;
