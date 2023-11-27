import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderComponent } from './header/Header';
import { DashboardHeader } from './dashboardHeader/DashboardHeader';
import { SideNav } from './sideNav/SideNav';
import { Container } from './Layout.styles';

const withLayout = (WrappedComponent) => {
	const WithLayout = (props) => {
		const location = useLocation();
		const [sidePanel, setSidePanel] = useState('Function A');

		return (
			<>
				{location.pathname === '/' ? (
					<HeaderComponent />
				) : (
					location.pathname === '/dashboard' && (
						<DashboardHeader
							setSidePanel={setSidePanel}
							sidePanel={sidePanel}
						/>
					)
				)}
				<Container>
					<WrappedComponent {...props} />
					{location.pathname === '/dashboard' && sidePanel && <SideNav />}
				</Container>
			</>
		);
	};

	return WithLayout;
};

export default withLayout;
