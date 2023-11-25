import styled from 'styled-components';
import { CtaMedium } from '../../../styles';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
`;

export const StyledLabel = styled.div`
	display: flex;
	padding: 4px;
	align-items: center;
	gap: 10px;
	align-self: stretch;
`;

export const Title = styled(CtaMedium)`
	color: ${(props) => props.theme.colors.greys.dawn};
`;
