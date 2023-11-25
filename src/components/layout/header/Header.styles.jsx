import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 64px;
	padding: ${(props) => `0px ${props.theme.spacing.m}`};
	align-items: center;
	align-self: stretch;

	border-bottom: ${(props) => `1px solid ${props.theme.colors.greys.smoke}`};
`;

export const BrandContainer = styled.div`
	display: flex;
	height: 64px;
	padding: ${(props) => props.theme.spacing.xs};
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
	flex: 1 0 0;
`;
