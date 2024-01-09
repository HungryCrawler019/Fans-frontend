import { ChevronLeft1Svg } from "@assets/svgs/common";
import { FypSvg } from "@components/common/base";
import { FansGap, FansText, FansView } from "@components/controls";
import { useAppContext } from "@context/useAppContext";
import tw from "@lib/tailwind";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AutomatedChatsNativeStackParams,
	SettingsNativeStackScreenProps,
} from "@usertypes/navigations";
import { useRouter } from "expo-router";
import React from "react";
import AutomatedChatsScreen from "./AutomatedChats";
import MessageCreateScreen from "./MessageCreate";
import MessageImageScreen from "./MessageImage";

const AutomatedChatsNavigator =
	createNativeStackNavigator<AutomatedChatsNativeStackParams>();

const AutomatedChatsLayout = (
	props: SettingsNativeStackScreenProps<"AutomatedChats">,
) => {
	const router = useRouter();
	const { dispatch } = useAppContext();

	return (
		<AutomatedChatsNavigator.Navigator
			screenOptions={{
				header: (props) => {
					const { navigation } = props;

					const handlePress = () => {
						if (navigation.canGoBack()) {
							navigation.goBack();
						} else {
							if (router.canGoBack()) {
								router.back();
							} else {
								router.replace({
									pathname: "posts",
									params: { screen: "Home" },
								});
							}
						}
					};

					return (
						<FansView
							height={{ xs: 64, lg: 103 }}
							alignItems="center"
							flexDirection="row"
							padding={{ x: 24 }}
							style={tw.style(
								"bg-fans-white dark:bg-fans-black-1d",
								"border-b border-fans-grey-f0 dark:border-fans-grey-43",
							)}
						>
							<FansView
								touchableOpacityProps={{ onPress: handlePress }}
								width={40}
								height={40}
								padding={{ x: 4, y: 12 }}
							>
								<FypSvg
									width={8}
									height={16}
									svg={ChevronLeft1Svg}
									color="fans-grey-70 dark:fans-grey-b1"
								/>
							</FansView>
							<FansGap viewStyle={{ flex: "1" }} />
							<FansText fontFamily="inter-bold" fontSize={19}>
								Automated chats
							</FansText>
							<FansGap viewStyle={{ flex: "1" }} />
							<FansGap width={40} />
						</FansView>
					);
				},
			}}
		>
			<AutomatedChatsNavigator.Screen
				name="AutomatedChats"
				component={AutomatedChatsScreen}
				options={{ title: "Automated chats" }}
			/>
			<AutomatedChatsNavigator.Screen
				name="MessageImage"
				component={MessageImageScreen}
			/>
			<AutomatedChatsNavigator.Screen
				name="MessageCreate"
				component={MessageCreateScreen}
			/>
		</AutomatedChatsNavigator.Navigator>
	);
};

export default AutomatedChatsLayout;
