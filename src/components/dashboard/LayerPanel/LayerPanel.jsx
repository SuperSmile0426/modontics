import React from 'react';
import {
	Container,
	LayerContainer,
	Layer,
	Img,
	LayerName,
} from './LayerPanel.styles';
import { PanelSlider } from '../PanelSlider/PanelSlider';

export const LayerPanel = () => {
	return (
		<Container>
			<LayerContainer>
				<Layer active="true">
					<Img src="src/assets/face.png" />
					<LayerName>Face</LayerName>
				</Layer>
				<Layer>
					<Img src="src/assets/jaw.png" />
					<LayerName>Jaw</LayerName>
				</Layer>
			</LayerContainer>
			<PanelSlider />
		</Container>
	);
};
