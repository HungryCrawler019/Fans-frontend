import {
	BlockSvg,
	ReportSvg,
	UserSvg,
	EmergencySvg,
} from "@assets/svgs/common";
import { FypSvg } from "@components/common/base";
import { FansView } from "@components/controls";
import { MenuItem } from "@components/posts/common";
import tw from "@lib/tailwind";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Modal } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

interface Props {
	open: boolean;
	handleClose: () => void;
	handlePressEmergency: () => void;
}

const ThreeDotsModal: FC<Props> = (props) => {
	const { open, handleClose, handlePressEmergency } = props;
	const router = useRouter();
	const positionY = useSharedValue(0);

	const panGesture = Gesture.Pan()
		.onBegin((e) => {
			positionY.value = e.translationY;
		})
		.onEnd((e) => {
			if (positionY.value < e.translationY) {
				handleClose();
			}
		});

	const handleViewProfile = () => {
		router.replace("/profile");
	};

	const handleBlock = () => {
		handleClose();
	};

	const handleReport = () => {
		handleClose();
	};

	return (
		<Modal transparent visible={open}>
			<FansView
				width="full"
				height="full"
				position="relative"
				alignItems="center"
				style={tw.style(
					"bg-fans-black/30 justify-end md:justify-center",
				)}
				touchableOpacityProps={{
					activeOpacity: 1,
					onPress: handleClose,
				}}
			>
				<FansView
					touchableOpacityProps={{ activeOpacity: 1 }}
					style={tw.style(
						"w-full md:w-[450px]",
						"h-auto max-h-9/10",
						"rounded-t-[7px] md:rounded-[15px] md:rounded-t-[15px]",
						"bg-fans-white dark:bg-fans-black-1d",
					)}
				>
					<FansView height={40} style={tw.style("md:hidden")}>
						<GestureDetector gesture={panGesture}>
							<FansView padding={{ t: 16, b: 20 }}>
								<FansView
									width={38}
									height={4}
									borderRadius={4}
									style={tw.style(
										"bg-fans-grey-70/40 dark:bg-fans-grey-b1/40 mx-auto",
									)}
								></FansView>
							</FansView>
						</GestureDetector>
					</FansView>
					<FansView flex="1" style={tw.style("md:pt-5")}>
						<MenuItem
							title="View profile"
							icon={
								<FypSvg
									svg={UserSvg}
									width={23}
									height={23}
									color="fans-black dark:fans-white"
								/>
							}
							onPress={handleViewProfile}
						/>
						<MenuItem
							title="Block"
							icon={
								<FypSvg
									svg={BlockSvg}
									width={25}
									height={25}
									color="fans-red"
								/>
							}
							onPress={handleBlock}
							labelClass="text-fans-red"
						/>
						<MenuItem
							title="Report"
							icon={
								<FypSvg
									svg={ReportSvg}
									width={25}
									height={23}
									color="fans-red"
								/>
							}
							onPress={handleReport}
							labelClass="text-fans-red"
						/>
						<MenuItem
							title="SOS emergency"
							icon={
								<FypSvg
									svg={EmergencySvg}
									width={25}
									height={25}
									color="fans-red"
								/>
							}
							onPress={handlePressEmergency}
							labelClass="text-fans-red"
						/>
					</FansView>
				</FansView>
			</FansView>
		</Modal>
	);
};

export default ThreeDotsModal;