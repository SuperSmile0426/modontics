import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultTheme } from '../../styles/defaultTheme';
import { H1 } from '../../styles';

export const Container = styled.div`
	display: flex;
	width: 343px;
	flex-direction: column;
	align-items: center;
	gap: 40px;

	@media (min-width: ${defaultTheme.breakpoints.xl}) {
		padding: ${(props) => `0px ${props.theme.spacing.s}`};
	}

	@media (max-width: ${defaultTheme.breakpoints.sm}) {
		padding: ${(props) => `0px ${props.theme.spacing.s}`};
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	align-self: stretch;
`;

export const FormTitle = styled(H1)`
	font-weight: ${(props) => props.theme.typography.weight.semiBold};
	color: ${(props) => props.theme.colors.greys.charcoal};
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-self: stretch;
	gap: 4px;
`;

export const LoginLink = styled(Link)`
	font-weight: ${(props) => props.theme.typography.weight.bold};
	font-size: ${(props) => props.theme.typography.sizes.ctaBig.sizeWeb};
	line-height: ${(props) =>
		props.theme.typography.sizes.ctaBig.lineHeightDefault};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.primary.primary};
	text-decoration: none;
`;
