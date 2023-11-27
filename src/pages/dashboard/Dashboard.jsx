import React from 'react';
import { Container } from './Dashboard.styles';
import { LayerPanel, ViewerPanel, WheelPanel } from '../../components';

export const Dashboard = () => {
	return (
		<Container>
			<LayerPanel />
			<ViewerPanel />
			<WheelPanel />
		</Container>
	);
};
