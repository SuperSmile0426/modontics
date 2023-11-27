import React from 'react';
import { Container, GoToHome } from './NotFound.styles';

export const Notfound = () => {
	return (
		<Container>
			<GoToHome to="/">Go Back To Home</GoToHome>
		</Container>
	);
};
