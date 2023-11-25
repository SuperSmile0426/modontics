import styled from 'styled-components';
import { CtaBig } from '../../../styles';

export const StyledButton = styled.button`
	display: flex;
	height: 38px;
	padding: 8px 24px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;

	border: none;
	border-radius: 8px;
	background: ${(props) => props.theme.colors.primary.primary};
`;

export const StyledText = styled(CtaBig)`
	color: ${(props) => props.theme.colors.blacksAndWhite.white};
`;
