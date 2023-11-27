import React from 'react';
import {
	Container,
	IconContainer,
	IconImg,
	WheelCenter,
} from './WheelPanel.styles';

export const WheelPanel = () => {
	return (
		<Container>
			<IconContainer>
				<IconImg src="src/assets/upper.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/face_right.png" />
				<WheelCenter>
					<IconImg src="src/assets/face_front.png" />
				</WheelCenter>
				<IconImg src="src/assets/face_left.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/lower.png" />
			</IconContainer>
		</Container>
	);
};
