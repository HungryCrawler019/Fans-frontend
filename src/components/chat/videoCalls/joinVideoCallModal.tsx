import { GemTitleSvg, CloseSvg, VideoRecordSvg } from "@assets/svgs/common";
import UserAvatar from "@components/avatar/UserAvatar";
import {
	FypSvg,
	FypLinearGradientView,
	FypText,
} from "@components/common/base";
import { FansView, FansIconButton } from "@components/controls";
import { getCreatorProfileByLink } from "@helper/endpoints/profile/apis";
import tw from "@lib/tailwind";
import { chatInboxAtom } from "@state/chat";
import { IProfile } from "@usertypes/types";
import { useLocalSearchParams } from "expo-router";
import React, { FC, useState, useEffect } from "react";
import { Modal } from "react-native";
import { useRecoilValue } from "recoil";

interface Props {
	visible: boolean;
	handleClose: () => void;
	handleJoinVideoCall: () => void;
}

const JoinVideoCallModal: FC<Props> = (props) => {
	const { visible, handleClose, handleJoinVideoCall } = props;
	const { id } = useLocalSearchParams();
	const chatId = id ?? "0";
	const inbox = useRecoilValue(chatInboxAtom);
	const conversation = inbox.data.get(chatId as string);

	const [isRecordAll, setIsRecordAll] = useState(false);
	const [receiver, setReceiver] = useState<IProfile | null>();

	const handleCancelCall = () => {
		handleClose();
	};

	const fetchReceiverData = async () => {
		const resp = await getCreatorProfileByLink({
			profileLink: conversation?.name ?? "",
		});
		if (resp.ok) {
			setReceiver(resp.data);
		} else {
			setReceiver(null);
		}
	};

	useEffect(() => {
		if (chatId !== "0" && conversation?.name) {
			fetchReceiverData();
		}
	}, [chatId]);

	return (
		<Modal transparent visible={visible}>
			<FansView
				width="screen"
				height="screen"
				position="relative"
				padding={{ x: 18 }}
				style={tw.style(
					"bg-fans-black/70 justify-end",
					"pb-[68px] md:pb-10",
				)}
			>
				<FypSvg
					svg={GemTitleSvg}
					color="fans-white"
					width={208}
					height={40}
					style={tw.style(
						"absolute top-[55px] left-[140px]",
						"hidden md:flex",
					)}
				/>

				<FansIconButton
					size={25}
					backgroundColor="bg-fans-white/30"
					onPress={handleClose}
					style={tw.style(
						"absolute top-4 right-[18px] z-10 md:hidden",
					)}
				>
					<FypSvg
						svg={CloseSvg}
						width={10}
						height={10}
						color="fans-white"
					/>
				</FansIconButton>
				<FypText
					fontSize={42}
					lineHeight={56}
					fontWeight={600}
					textAlign="center"
					style={tw.style(
						"md:hidden mt-[22px] text-fans-white mb-25",
					)}
				>
					00:04:59
				</FypText>
				{receiver ? (
					<FansView
						alignItems="center"
						style={tw.style(!tw.prefixMatch("md") ? "flex-1" : "")}
					>
						<FansView
							position="relative"
							width={{ xs: 109, md: 137 }}
							height={{ xs: 109, md: 137 }}
							style={tw.style("mb-5 md:mb-7")}
						>
							<UserAvatar
								image={receiver.avatar}
								size={tw.prefixMatch("md") ? "137px" : "109px"}
							/>
							<FypLinearGradientView
								colors={["#1d21E5", "#a854f5", "#d885ff"]}
								width={{ xs: 42, md: 57 }}
								height={{ xs: 42, md: 57 }}
								borderRadius={57}
								alignItems="center"
								justifyContent="center"
								position="absolute"
								style={tw.style(
									"border-[4px] border-fans-black-39 bottom-[-10px] right-0",
								)}
							>
								<FypSvg
									svg={VideoRecordSvg}
									width={{ xs: 18, md: 26 }}
									height={{ xs: 17, md: 26 }}
									color="fans-white"
								/>
							</FypLinearGradientView>
						</FansView>
						<FypText
							fontSize={23}
							lineHeight={31}
							fontWeight={700}
							textAlign="center"
							style={tw.style(
								"text-fans-white mb-8 md:mb-[66px]",
							)}
						>
							Video call with{`\n`}
							{receiver.displayName}
						</FypText>
						<FansView
							width={60}
							height={30}
							borderRadius={30}
							margin={{ b: 15 }}
							justifyContent="center"
							style={tw.style("bg-fans-grey-70 hidden md:flex")}
						>
							<FypText
								fontSize={13}
								fontWeight={600}
								lineHeight={17}
								textAlign="center"
								style={tw.style("text-fans-white")}
							>
								NOW
							</FypText>
						</FansView>
						<FypText
							fontSize={20}
							fontWeight={500}
							lineHeight={28}
							textAlign="center"
							style={tw.style(
								"text-fans-white mb-10 md:mb-[66px] hidden md:flex",
							)}
						>
							{tw.prefixMatch("md")
								? `Wednesday 26, April${`\n`}10 PM`
								: "Wednesday 26, April - 10 PM"}
						</FypText>

						<FansView
							style={tw.style(
								"flex-col-reverse md:flex-col gap-[68px] md:gap-30",
								tw.prefixMatch("md")
									? ""
									: "flex-1 justify-between",
							)}
						>
							<FansView alignItems="center">
								<FansView margin={{ b: 14 }} width="full">
									<FansView
										pressableProps={{
											onPress: handleJoinVideoCall,
										}}
									>
										<FypLinearGradientView
											colors={
												tw.prefixMatch("md")
													? ["#a854f5", "#a854f5"]
													: ["#1d21e5", "#d885ff"]
											}
											width="full"
											height={42}
											borderRadius={42}
											alignItems="center"
											justifyContent="center"
											style={tw.style(
												"bg-fans-purple max-w-[358px] mx-auto",
											)}
										>
											<FypText
												fontSize={19}
												lineHeight={26}
												fontWeight={700}
												textAlign="center"
												style={tw.style(
													"text-fans-white",
												)}
											>
												Join video call
											</FypText>
										</FypLinearGradientView>
									</FansView>
								</FansView>
								<FypText
									fontSize={17}
									lineHeight={22}
									fontWeight={600}
									textAlign="center"
									style={tw.style("text-fans-white")}
									onPress={handleCancelCall}
								>
									Cancel call
								</FypText>
							</FansView>

							<FansView alignItems="center">
								<FansView
									flexDirection="row"
									alignItems="center"
									justifyContent="between"
									height={34}
									width={184}
									borderRadius={34}
									padding={{ l: 24, r: 18 }}
									style={tw.style(
										"bg-fans-grey-70 mb-3 md:mb-6",
										isRecordAll && "bg-fans-white",
									)}
									pressableProps={{
										onPress: () =>
											setIsRecordAll(!isRecordAll),
									}}
								>
									<FypText
										fontSize={17}
										lineHeight={22}
										style={tw.style(
											"text-fans-white",
											isRecordAll && "text-fans-black",
										)}
									>
										Record call
									</FypText>
									<FansView
										flexDirection="row"
										alignItems="center"
										gap={3}
									>
										{isRecordAll && (
											<FansView
												width={8}
												height={8}
												borderRadius={8}
												style={tw.style("bg-fans-red")}
											></FansView>
										)}
										<FypText
											fontSize={15}
											lineHeight={20}
											fontWeight={500}
											style={tw.style(
												"text-fans-white text:bg-fans-black-1d",
												isRecordAll && "text-fans-red",
											)}
										>
											{isRecordAll ? "ON" : "OFF"}
										</FypText>
									</FansView>
								</FansView>
								<FypText
									fontSize={16}
									lineHeight={21}
									textAlign="center"
									style={tw.style(
										"text-fans-grey-b1 max-w-[468px]",
									)}
								>
									When turned on, recording will only made
									available for you to re-watch, and will not
									be distributed to any third parties
								</FypText>
							</FansView>
						</FansView>
					</FansView>
				) : null}
			</FansView>
		</Modal>
	);
};

export default JoinVideoCallModal;
