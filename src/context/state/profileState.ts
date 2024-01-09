import {
	defaultHighlight,
	defaultProfileSettings,
	defaultSocialLinks,
	defaultSubscriptions,
} from "@constants/common";
import { SubscriptionTypes } from "@usertypes/commonEnums";
import {
	IHighlight,
	IMedia,
	IPlayList,
	IPost,
	IProfile,
	IProfileSettings,
} from "@usertypes/types";

export interface IProfileState extends IProfile {
	playlists: IPlayList[];
	medias: IMedia[];
	posts: IPost[];
	highlights: IHighlight[];

	addedPostIds: string[];
	highlightForm: IHighlight;
	settings: IProfileSettings;
}

export const defaultProfileStateData: IProfileState = {
	id: "0",
	userId: "0",
	displayName: "",
	migrationLink: "",
	profileLink: "",
	verified: false,
	bio: "",
	cover: [],
	previews: [],
	isNSFW: null,
	subscriptionType: SubscriptionTypes.Flat,
	isEnabled: false,
	location: "",
	imageCount: 0,
	videoCount: 0,
	subscriptionCount: 0,
	commentCount: 0,
	likeCount: 0,
	socialLinks: defaultSocialLinks,
	subscriptions: [defaultSubscriptions],
	tiers: [],
	roles: [],
	categories: [],

	posts: [],
	playlists: [],
	medias: [],
	highlights: [],

	addedPostIds: [],
	highlightForm: defaultHighlight,
	stories: [],
	settings: defaultProfileSettings,
};

export const profileInitialState: IProfileState = {
	...defaultProfileStateData,
};
