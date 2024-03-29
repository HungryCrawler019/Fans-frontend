import {
	CloseSvg,
	ImageSvg,
	MusicSvg,
	StorySvg,
	TextSvg,
	VideoCallSvg,
	FundSvg,
	PollSvg,
	VaultSvg,
} from "@assets/svgs/common";
import { FypText, FypSvg } from "@components/common/base";
import BottomSheetWrapper from "@components/common/bottomSheetWrapper";
import { FansDivider, FansView, FansIconButton } from "@components/controls";
import { defaultPostFormData } from "@constants/defaultFormData";
import {
	CommonActionType,
	PostsActionType,
	useAppContext,
} from "@context/useAppContext";
import tw from "@lib/tailwind";
import { useFeatureGates } from "@state/featureGates";
import { PostStepTypes, PostType } from "@usertypes/commonEnums";
import useDocumentPicker from "@utils/useDocumentPicker";
import { useRouter } from "expo-router";
import React, { FC, useMemo } from "react";
import { useWindowDimensions } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import Toast from "react-native-toast-message";

interface PostItemInterface {
	title: string;
	icon: React.ReactNode;
	onSelect: () => void;
}

export const PostTypeItem: FC<PostItemInterface> = (props) => {
	const { onSelect, title, icon } = props;

	return (
		<FansView
			style={tw.style("w-1/3")}
			pressableProps={{ onPress: onSelect }}
		>
			<FansView
				style={tw.style(
					"h-10 mb-2 items-center justify-center md:mb-[18px] md:h-14",
				)}
			>
				{icon}
			</FansView>
			<FypText
				fontSize={{ xs: 19, md: 21 }}
				lineHeight={{ xs: 26, md: 28 }}
				textAlign="center"
				style={tw.style(
					"font-normal md:font-medium text-fans-black dark:text-fans-white",
				)}
			>
				{title}
			</FypText>
		</FansView>
	);
};

const PostTypesDialog = () => {
	const router = useRouter();
	const { state, dispatch } = useAppContext();
	const { openNewPostTypesModal } = state.common;
	const featureGates = useFeatureGates();

	const open = useMemo(
		() => (openNewPostTypesModal ? true : false),
		[openNewPostTypesModal],
	);
	const { useAudioPicker, useVideoPicker, useImagePicker } =
		useDocumentPicker();

	const { width } = useWindowDimensions();
	const offset = useSharedValue(0);

	const animationStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: withSpring(offset.value * width * -1, {
						damping: 90,
						stiffness: 90,
					}),
				},
			],
		};
	});

	const onClose = () => {
		dispatch.setCommon({
			type: CommonActionType.toggleNewPostTypesModal,
			data: false,
		});
	};

	const handleOpenImagePicker = async (
		postType: PostType,
		allowMultiple: boolean,
	) => {
		const result = await useImagePicker(allowMultiple);
		if (result.ok) {
			const medias = result.data;
			dispatch.setPosts({
				type: PostsActionType.updatePostForm,
				data: {
					...defaultPostFormData,
					type: postType,
					medias: medias,
					thumb:
						medias.length > 0
							? medias[0]
							: defaultPostFormData.thumb,
				},
			});
			onClose();
			router.push({
				pathname: "posts",
				params: { screen: "Thumbnail" },
			});
		} else {
			Toast.show({
				type: "error",
				text1: result?.message ?? "",
			});
		}
	};

	const handleOpenVideoPicker = async () => {
		const result = await useVideoPicker();
		if (result.ok) {
			dispatch.setPosts({
				type: PostsActionType.updatePostForm,
				data: {
					type: PostType.Video,
					medias: result.data,
				},
			});
			onClose();
			router.push({ pathname: "posts", params: { screen: "Thumbnail" } });
		} else {
			Toast.show({
				type: "error",
				text1: result?.message ?? "",
			});
		}
	};

	const handleOpenAudioPicker = async () => {
		const result = await useAudioPicker();
		if (result.ok) {
			dispatch.setPosts({
				type: PostsActionType.updatePostForm,
				data: {
					type: PostType.Audio,
					medias: result.data,
				},
			});
			onClose();
			router.push({
				pathname: "posts",
				params: { screen: "Thumbnail" },
			});
		} else {
			Toast.show({
				type: "error",
				text1: result?.message ?? "",
			});
		}
	};

	const onSelect = async (postType: PostType, desktopMode: boolean) => {
		if (desktopMode) {
			dispatch.setPosts({
				type: PostsActionType.updatePostForm,
				data: {
					...defaultPostFormData,
					type: postType,
				},
			});
			onClose();
			let postStep: PostStepTypes = PostStepTypes.Thumbnail;
			switch (postType) {
				case PostType.Poll:
					postStep = PostStepTypes.NewPollPost;
					break;
				case PostType.Fundraiser:
					postStep = PostStepTypes.NewFundraiserPost;
					break;
				case PostType.Text:
					postStep = PostStepTypes.Text;
					break;
				case PostType.Vault:
					postStep = PostStepTypes.Vault;
					break;
				default:
					postStep = PostStepTypes.Thumbnail;
					break;
			}
			dispatch.setPosts({
				type: PostsActionType.updatePostModal,
				data: {
					visible: true,
					step: postStep,
				},
			});
		} else {
			switch (postType) {
				case PostType.Story:
				case PostType.Photo:
					handleOpenImagePicker(
						postType,
						postType === PostType.Photo,
					);
					break;
				case PostType.Video:
					handleOpenVideoPicker();
					break;
				case PostType.Text:
					onClose();
					router.push({
						pathname: "posts",
						params: { screen: "Text" },
					});
					break;
				case PostType.Audio:
					handleOpenAudioPicker();
					break;
				case PostType.Fundraiser:
					dispatch.setPosts({
						type: PostsActionType.updatePostForm,
						data: {
							type: PostType.Fundraiser,
						},
					});
					onClose();
					router.push({
						pathname: "posts",
						params: { screen: "Fundraiser" },
					});
					break;
				case PostType.Poll:
					dispatch.setPosts({
						type: PostsActionType.updatePostForm,
						data: {
							type: PostType.Fundraiser,
						},
					});
					onClose();
					router.push({
						pathname: "posts",
						params: { screen: "Poll" },
					});
					break;
				case PostType.Vault:
					onClose();
					router.push({
						pathname: "posts",
						params: { screen: "Vault" },
					});
					break;
				default:
					break;
			}
		}
	};

	const postTypes = [
		{
			title: "Photo",
			type: PostType.Photo,
			icon: (
				<ImageSvg
					width={33}
					height={33}
					color="#a854f5"
					style={tw.style("md:w-[57.5px] md:h-[57.5px]")}
				/>
			),
		},
		{
			title: "Video",
			type: PostType.Video,
			icon: (
				<VideoCallSvg
					width={36}
					height={33}
					color="#a854f5"
					style={tw.style("md:w-[63px] md:h-[58.5px]")}
				/>
			),
		},
		{
			title: "Story",
			type: PostType.Story,
			icon: (
				<StorySvg
					width={36}
					height={36}
					color="#a854f5"
					style={tw.style("md:w-[63px] md:h-[62.85px]")}
				/>
			),
		},
		{
			title: "From Vault",
			type: PostType.Vault,
			icon: (
				<VaultSvg
					width={36}
					color="#a854f5"
					height={36}
					style={tw.style("md:w-[51px] md:h-[43px]")}
				/>
			),
			hide: !featureGates.has("2024_01-new-vault-design"),
		},
		{
			title: "Audio",
			type: PostType.Audio,
			icon: (
				<MusicSvg
					width={30}
					height={33}
					color="#a854f5"
					style={tw.style("md:w-[52px] md:h-[58.5px]")}
				/>
			),
		},
		// {
		// 	title: "Fundraiser",
		// 	type: PostType.Fundraiser,
		// 	icon: (
		// 		<FundSvg
		// 			width={27.34}
		// 			height={38.6}
		// 			color="#a854f5"
		// 			style={tw.style("md:w-[48.5px] md:h-[68.5px]")}
		// 		/>
		// 	),
		// },
		{
			title: "Text",
			type: PostType.Text,
			icon: (
				<TextSvg
					width={40}
					height={29}
					color="#a854f5"
					style={tw.style("md:w-[71.5px] md:h-[51.6px]")}
				/>
			),
		},
		// {
		// 	title: "Poll",
		// 	type: PostType.Poll,
		// 	icon: (
		// 		<PollSvg
		// 			width={30.89}
		// 			height={30.8}
		// 			color="#a854f5"
		// 			style={tw.style("md:w-[55px] md:h-[54.6px]")}
		// 		/>
		// 	),
		// },
	];

	return (
		<BottomSheetWrapper
			open={open}
			onClose={onClose}
			dialogWrapperStyle="md:max-w-[740px]"
			topLineStyle="md:hidden"
		>
			<FansView style={tw.style("pb-3 md:pb-0")}>
				<FansView style={tw.style("relative md:py-[34px]")}>
					<FypText
						fontSize={{ xs: 19, md: 23 }}
						lineHeight={{ xs: 26, md: 31 }}
						fontWeight={700}
						textAlign="center"
						style={tw.style(
							"mb-[50px] md:mb-0 text-fans-black dark:text-fans-white",
						)}
					>
						Create post
					</FypText>
					<FansView
						style={tw.style(
							"hidden absolute right-[34px] top-[35px] md:flex w-7.5 h-7.5",
						)}
					>
						<FansIconButton
							onPress={onClose}
							backgroundColor="bg-fans-black/30 dark:bg-fans-white/30"
							size={30}
						>
							<FypSvg
								svg={CloseSvg}
								width={13.2}
								height={13.2}
								color="fans-white dark:fans-black-1d"
							/>
						</FansIconButton>
					</FansView>
				</FansView>
				<FansDivider
					style={tw.style("hidden md:flex mx-[34px] mb-[38px]")}
				/>

				<FansView
					style={tw.style(
						"h-[190px] relative overflow-hidden md:hidden",
					)}
				>
					<Animated.View
						style={[
							tw.style("absolute flex-row top-0"),
							animationStyles,
						]}
					>
						<FansView
							style={[
								tw.style("flex-row flex-wrap gap-y-[45px]"),
								{ width: width },
							]}
						>
							{postTypes
								.filter((el) => !el.hide)
								.slice(0, 6)
								.map((postType) => (
									<PostTypeItem
										key={postType.type}
										title={postType.title}
										onSelect={() =>
											onSelect(postType.type, false)
										}
										icon={postType.icon}
									/>
								))}
						</FansView>
						{/* <View
								style={[
									tw.style("flex-row flex-wrap gap-y-[45px]"),
									{ width: width },
								]}
							>
								{postTypes
									.slice(6, postTypes.length)
									.map((postType) => (
										<PostTypeItem
											key={postType.type}
											title={postType.title}
											onSelect={() =>
												onSelect(postType.type, false)
											}
											icon={postType.icon}
										/>
									))}
							</View> */}
					</Animated.View>
				</FansView>
				<FansView
					style={tw.style(
						"hidden md:flex px-[34px] pb-[42px] flex-wrap flex-row justify-center gap-y-9",
					)}
				>
					{postTypes
						.filter((el) => !el.hide)
						.map((postType) => (
							<PostTypeItem
								key={postType.type}
								title={postType.title}
								onSelect={() => onSelect(postType.type, true)}
								icon={postType.icon}
							/>
						))}
				</FansView>
			</FansView>
		</BottomSheetWrapper>
	);
};

export default PostTypesDialog;
