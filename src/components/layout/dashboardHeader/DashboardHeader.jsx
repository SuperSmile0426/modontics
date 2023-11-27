import React from 'react';
import {
	Container,
	ItemContainer,
	BrandContainer,
	BrandLogo,
	BrandName,
	UserInfoContainer,
	UserInfo,
	User,
	UserAvatar,
	UserProfile,
	UserName,
	UserData,
	StyledLine,
	DotContainer,
	DotLine,
	NotificationContainer,
	BottomLine,
	Notification,
	NotificationIconImg,
	NotificationWrap,
	RightPanelContainer,
	RIghtPanelItem,
	SideFunction,
	FunctionName,
	LeftLine,
	LogoImg,
} from './DashboardHeader.styles';
import NotificationIcon from '../../../assets/icons/notification-icon.svg';

export const DashboardHeader = (props) => {
	const { sidePanel, setSidePanel } = props;

	const panelFunctions = [
		'Function A',
		'Function B',
		'Function C',
		'Function D',
	];

	return (
		<Container>
			<ItemContainer>
				<BrandContainer>
					<BrandLogo>
						<LogoImg src="src/assets/logo.png" alt="logo" />
						<BrandName>Akira Nakao</BrandName>
					</BrandLogo>
				</BrandContainer>
				<BottomLine />
			</ItemContainer>
			<ItemContainer>
				<UserInfoContainer>
					<DotContainer>
						<DotLine />
						<DotLine />
						<DotLine />
					</DotContainer>
					<UserInfo>
						<User>
							<StyledLine />
							<UserProfile>
								<UserAvatar src="https://gravatar.com/avatar/0a49be9cdd41c990dac3c4fd2411d560?s=400&d=robohash&r=x" />
								<UserName>Akira</UserName>
							</UserProfile>
							<UserData>F-23</UserData>
							<StyledLine />
						</User>
					</UserInfo>
				</UserInfoContainer>
				<BottomLine />
			</ItemContainer>
			<NotificationContainer>
				<Notification>
					<NotificationWrap>
						<NotificationIconImg src={NotificationIcon} />
					</NotificationWrap>
					<BottomLine />
				</Notification>
				<LeftLine />
				<RightPanelContainer>
					{panelFunctions.map((panel, index) => (
						<RIghtPanelItem
							key={index}
							active={(panel === sidePanel).toString()}
						>
							<SideFunction
								onClick={() => {
									if (panel === sidePanel) setSidePanel('');
									else setSidePanel(panel);
								}}
							>
								<NotificationIconImg src={NotificationIcon} />
								<FunctionName>{panel}</FunctionName>
							</SideFunction>
						</RIghtPanelItem>
					))}
				</RightPanelContainer>
			</NotificationContainer>
		</Container>
	);
};
