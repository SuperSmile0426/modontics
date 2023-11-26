import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderComponent } from './header/Header';
import { DashboardHeader } from './dashboardHeader/DashboardHeader';

const withLayout = (WrappedComponent) => {
	const WithLayout = (props) => {
		const location = useLocation();
		return (
			<>
				{location.pathname === '/' ? <HeaderComponent /> : <DashboardHeader />}
				<WrappedComponent {...props} />
			</>
		);
	};

	return WithLayout;
};

export default withLayout;
