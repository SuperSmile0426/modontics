import React from 'react';
import { Container, IconImg, IconContainer } from './ViewerPanel.styles';

export const ViewerPanel = () => {
	return (
		<Container>
			<IconContainer>
				<IconImg src="src/assets/square.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/view.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/grid.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/edit.png" />
			</IconContainer>
		</Container>
	);
};
