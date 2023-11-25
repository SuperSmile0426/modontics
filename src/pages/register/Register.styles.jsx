import styled from 'styled-components';
import { defaultTheme } from '../../styles';

export const Container = styled.div`
	margin-top: 100px;
	margin-inline: auto;

	@media (max-width: ${defaultTheme.breakpoints.sl}) {
		margin-top: 68px;
	}
	@media (max-width: ${defaultTheme.breakpoints.sm}) {
		margin-top: 28px;
	}
`;
