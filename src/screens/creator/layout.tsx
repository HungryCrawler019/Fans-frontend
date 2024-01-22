import { FansText } from "@components/controls";
import { CommonActionType, useAppContext } from "@context/useAppContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReferAndEarnScreen from "@screens/settings/referral/ReferAndEarn";
import { CreatorProfileNavigationStacks } from "@usertypes/navigations";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import OrderVideoCallScreen from "./orderVideoCall";
import PostInteractiveScreen from "./postInteractiveScreen";
import PreviewScreen from "./previewScreen";
import ProfileScreen from "./profileScreen";

const Stack = createNativeStackNavigator<CreatorProfileNavigationStacks>();

const CreatorProfileLayout = () => {
	const { username } = useLocalSearchParams();
	const { dispatch } = useAppContext();

	useEffect(() => {
		dispatch.setCommon({
			type: CommonActionType.setCreatorUsername,
			data: username as string,
		});
	}, [username]);

	return (
		<Stack.Navigator
			initialRouteName="Creator"
			screenOptions={{
				headerTitleAlign: "center",
				headerTitle: ({ children }) => (
					<FansText fontFamily="inter-bold" fontSize={19}>
						{children}
					</FansText>
				),
			}}
		>
			<Stack.Screen
				name="Creator"
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Preview"
				component={PreviewScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Post"
				component={PostInteractiveScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="OrderVideoCallScreen"
				component={OrderVideoCallScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ReferAndEarn"
				component={ReferAndEarnScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default CreatorProfileLayout;
