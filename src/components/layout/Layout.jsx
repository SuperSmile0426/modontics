import React from 'react';
import { HeaderComponent } from './header/Header';

const withLayout = (WrappedComponent) => {
	const WithLayout = (props) => {
		return (
			<>
				<HeaderComponent />
				<WrappedComponent {...props} />
			</>
		);
	};

	return WithLayout;
};

export default withLayout;
