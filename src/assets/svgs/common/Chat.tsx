import tw from "@lib/tailwind";
import { IFansSvg, IFypSvgProps } from "@usertypes/components";
import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

export const Chat1Svg: IFansSvg = (props) => {
	const { color } = props;
	return (
		<Svg viewBox="0 0 15.302 15.305">
			<Path
				d="M168.144,806.257a7.515,7.515,0,0,0,4.086-1.217q.707.238,1.415.472l1.019.339a.793.793,0,0,0,1.048-1.043l-.333-1q-.264-.794-.531-1.587a7.643,7.643,0,1,0-14.083-5.71,7.46,7.46,0,0,0-.29,1.827v0a7.75,7.75,0,0,0,6.405,7.81A8.056,8.056,0,0,0,168.144,806.257Zm4.044-2.333a.818.818,0,0,0-.454.141,6.469,6.469,0,0,1-4.684,1.015,6.667,6.667,0,0,1-5.488-6.734,6.453,6.453,0,0,1,.249-1.535,6.557,6.557,0,1,1,12.032,4.981.82.82,0,0,0-.059.685q.283.839.562,1.679l.165.5-.524-.174c-.5-.168-1.01-.335-1.513-.506A.9.9,0,0,0,172.187,803.924Z"
				transform="translate(-160.474 -790.952)"
				fill={color}
			/>
		</Svg>
	);
};

export const FilledChatSvg = (props: IFypSvgProps) => {
	const { color, height, size, width, ...props_ } = props;

	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 27.465 27.443"
			{...props_}
		>
			<Path
				d="M-185.339,312.569a13.649,13.649,0,0,0-1.114-2.747,13.712,13.712,0,0,0-18.571-5.582,13.714,13.714,0,0,0-5.581,18.572q-.479,1.422-.953,2.847l-.6,1.787a1.416,1.416,0,0,0,0,1.151,1.422,1.422,0,0,0,1.877.721l1.829-.61q1.271-.42,2.538-.846a13.493,13.493,0,0,0,7.33,2.183,14.53,14.53,0,0,0,2.272-.187,13.9,13.9,0,0,0,11.491-14.012A13.371,13.371,0,0,0-185.339,312.569Zm-19.717,5.7a1.95,1.95,0,0,1-1.954-1.946,1.948,1.948,0,0,1,1.945-1.954,1.95,1.95,0,0,1,1.955,1.945A1.951,1.951,0,0,1-205.056,318.269Zm6.523,0a1.949,1.949,0,0,1-1.958-1.938,1.948,1.948,0,0,1,1.938-1.958,1.967,1.967,0,0,1,1.958,1.958A1.948,1.948,0,0,1-198.533,318.265Zm6.47,0A1.953,1.953,0,0,1-194,316.334v-.013a1.949,1.949,0,0,1,1.945-1.955,1.95,1.95,0,0,1,1.946,1.954A1.95,1.95,0,0,1-192.063,318.266Z"
				transform="translate(212.279 -302.602)"
				fill={color}
			/>
		</Svg>
	);
};

const ChatSvg = (props: FansSvgProps) => {
	const {
		color = "currentColor",
		fill = "transparent",
		height,
		size,
		width,
		...props_
	} = props;

	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 24.995 25"
			{...props_}
		>
			<G transform="translate(-160.553 -754.952)">
				<G transform="translate(160.553 754.952)">
					<Path
						d="M173.02,779.952a12.276,12.276,0,0,1-6.674-1.988q-1.154.389-2.311.771l-1.665.555a1.295,1.295,0,0,1-1.712-1.7l.544-1.627q.432-1.3.868-2.592a12.485,12.485,0,1,1,23-9.326,12.181,12.181,0,0,1,.474,2.984v0a12.659,12.659,0,0,1-10.462,12.757A13.147,13.147,0,0,1,173.02,779.952Z"
						transform="translate(-160.553 -754.952)"
						fill={tw.color(fill)}
					/>
					<Path
						d="M173.02,779.952a12.276,12.276,0,0,1-6.674-1.988q-1.154.389-2.311.771l-1.665.555a1.295,1.295,0,0,1-1.712-1.7l.544-1.627q.432-1.3.868-2.592a12.485,12.485,0,1,1,23-9.326,12.181,12.181,0,0,1,.474,2.984v0a12.659,12.659,0,0,1-10.462,12.757A13.147,13.147,0,0,1,173.02,779.952Zm-6.6-3.81a1.336,1.336,0,0,1,.741.23,10.567,10.567,0,0,0,7.651,1.658,10.89,10.89,0,0,0,8.964-11,10.719,10.719,0,1,0-20.061,5.63,1.34,1.34,0,0,1,.1,1.119q-.462,1.371-.918,2.743l-.271.811.857-.284c.825-.274,1.649-.548,2.472-.826A1.472,1.472,0,0,1,166.415,776.142Z"
						transform="translate(-160.553 -754.952)"
						fill={props.color ?? "currentColor"}
					/>
				</G>
				<G
					transform="translate(165.355 765.68)"
					fill={props.color ?? "currentColor"}
				>
					<Path
						d="M179.455,769.735a1.778,1.778,0,0,0,1.764,1.759,1.774,1.774,0,1,0,.007-3.548A1.775,1.775,0,0,0,179.455,769.735Z"
						transform="translate(-167.618 -767.946)"
					/>
					<Path
						d="M175.309,767.946a1.774,1.774,0,1,0,1.783,1.783A1.791,1.791,0,0,0,175.309,767.946Z"
						transform="translate(-167.618 -767.946)"
					/>
					<Path
						d="M169.381,767.946a1.774,1.774,0,0,0,.008,3.548,1.774,1.774,0,1,0-.008-3.548Z"
						transform="translate(-167.618 -767.946)"
					/>
				</G>
			</G>
		</Svg>
	);
};

export default ChatSvg;
