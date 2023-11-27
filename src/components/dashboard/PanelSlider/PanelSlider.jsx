import React from 'react';
import { Container, Slider, Img } from './PanelSlider.styles';

export const PanelSlider = () => {
	return (
		<Container>
			<Img src="src/assets/droplet_1.png" />
			<Slider type="range" min="1" max="100" />
			<Img src="src/assets/droplet_2.png" />
		</Container>
	);
};
