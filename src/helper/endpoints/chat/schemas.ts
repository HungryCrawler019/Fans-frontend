// This file is supposed to be synced between frontend and backend
// frontend: helper/endpoints/chat/schemas.ts
// backend: web/routes/chat/schemas.ts
import {
	IConversationMeta,
	IMessage,
	MessageType,
} from "@helper/CommonAPISchemas";

export interface ChatPaginatedQuery {
	page: number;
	itemsPerPage: number;
}

export interface ChatWSInfoRespBody {
	webSocketUrl: string;
}

export interface ChatConversationRespBody {
	conversations: IConversationMeta[];
}

export interface ChatIdParams {
	id: string;
}

export interface ChatUserIdParams {
	userId: string;
}

export interface ChatConversationByUserRespBody extends IConversationMeta {}

export interface ChatConversationMessagesQuery {
	/**
	 * The number of messages to fetch
	 */
	limit: number;

	/**
	 * The message ID from before which to fetch messages. `before` and `after` are mutually exclusive.
	 */
	before?: string;
	/**
	 * The message ID from after which to fetch messages. `before` and `after` are mutually exclusive.
	 */
	after?: string;
}

export interface ChatConversationMessagesRespBody {
	messages: IMessage[];
}

export interface ChatConversationMessagesPostReqBody {
	messageType?: MessageType;
	content: string;
	uploadIds?: string[];
}

export interface ChatConversationMessagesPostRespBody extends IMessage {}

export interface ChatFansListReqParams {
	category: number;
	page: number;
}

export interface ChatFansListRespBody {
	fans: {
		id: string;
		username: string;
		displayName?: string;
		avatar?: string;
	}[];
}

export interface ChatNoteReqBody {
	note: string;
}

export interface ChatNote {
	note: string;
	profile: {
		displayName: string;
		avatar: string;
	};
}

export interface ChatNoteRespBody {
	notes: ChatNote[];
}

export interface ChatAutomatedMessageWelcomeReqBody {
	text: string;
	image?: string;
	enabled: boolean;
}

export interface ChatAutomatedMessageWelcomeRespBody {
	text: string;
	image?: string;
	enabled: boolean;
}