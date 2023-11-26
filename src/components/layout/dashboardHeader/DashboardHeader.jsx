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

export const DashboardHeader = () => {
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
					<RIghtPanelItem>
						<SideFunction>
							<NotificationIconImg src={NotificationIcon} />
							<FunctionName>Function A</FunctionName>
						</SideFunction>
					</RIghtPanelItem>
					<RIghtPanelItem>
						<SideFunction>
							<NotificationIconImg src={NotificationIcon} />
							<FunctionName>Function B</FunctionName>
						</SideFunction>
					</RIghtPanelItem>
					<RIghtPanelItem active>
						<SideFunction>
							<NotificationIconImg src={NotificationIcon} />
							<FunctionName>Function C</FunctionName>
						</SideFunction>
					</RIghtPanelItem>
					<RIghtPanelItem>
						<SideFunction>
							<NotificationIconImg src={NotificationIcon} />
							<FunctionName>Function D</FunctionName>
						</SideFunction>
					</RIghtPanelItem>
				</RightPanelContainer>
			</NotificationContainer>
		</Container>
	);
};
