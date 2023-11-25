import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 2px 8px;
	justify-content: center;
	align-items: flex-start;
	gap: 4px;
	align-self: stretch;
	border-radius: ${(props) => props.theme.spacing.xs};
	border: ${(props) => `1px solid ${props.theme.colors.greys.gainsboro}`};
	background: ${(props) => props.theme.colors.blacksAndWhite.white};

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

	&::placeholder {
		color: ${(props) => props.theme.colors.greys.charcoal};
	}
`;

export const CodeButton = styled.button`
	padding: ${(props) => props.theme.spacing.xs};
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	border: none;
	font-size: ${(props) => props.theme.typography.sizes.ctaMedium.sizeWeb};
	color: ${(props) => props.theme.colors.primary.primary};
`;
