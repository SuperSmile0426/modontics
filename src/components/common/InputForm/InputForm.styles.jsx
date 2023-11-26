import styled from 'styled-components';
import { CtaMedium, CtaSmall } from '../../../styles';

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

export const StyledError = styled.div`
	display: flex;
	height: 28px;
	padding: ${(props) => `${props.theme.spacing.xs} 0`};
	align-items: center;
	gap: ${(props) => props.theme.spacing.xxs};
	align-self: stretch;
`;

export const StyledErrorMsg = styled(CtaSmall)`
	color: ${(props) => props.theme.colors.supportive.flamingo};
`;
