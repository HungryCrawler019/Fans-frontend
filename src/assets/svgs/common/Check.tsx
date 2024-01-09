import { IFansSvg } from "@usertypes/components";
import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

const CheckSvg = ({ ...props }: FansSvgProps) => {
	const { color, height, size, width, ...props_ } = props;
	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 11.872 8.576"
			{...props_}
		>
			<Path
				d="M12882.783,3586.212l3.547,3.525,6.488-7.007"
				transform="translate(-12881.864 -3581.811)"
				fill="none"
				stroke={color ?? "currentColor"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.3"
			/>
		</Svg>
	);
};

export const Check1Svg: IFansSvg = (props) => {
	const { color = "currentcolor" } = props;

	return (
		<Svg viewBox="0 0 11.872 8.576">
			<Path
				d="M12882.783,3586.212l3.547,3.525,6.488-7.007"
				transform="translate(-12881.864 -3581.811)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.3"
			/>
		</Svg>
	);
};

export const Check2Svg: IFansSvg = (props) => {
	const { color = "currentColor" } = props;

	return (
		<Svg viewBox="0 0 12.857 8.873">
			<Path
				d="M319.239,630.274l-6.821,6.821-3.633-3.633"
				transform="translate(-307.583 -629.072)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</Svg>
	);
};

export const Check3Svg: IFansSvg = (props) => {
	const { color = "currentColor" } = props;

	return (
		<Svg viewBox="0 0 13.206 9.246">
			<Path
				d="M12882.239,3585.783l4.143,4.142,6.66-7.195"
				transform="translate(-12881.037 -3581.529)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.7"
			/>
		</Svg>
	);
};

export const CheckStar1Svg: IFansSvg = (props) => {
	const { color } = props;
	return (
		<Svg viewBox="0 0 13.661 13">
			<Path
				d="M505.75,798.41a4.2,4.2,0,0,0-.433-.359c-.218-.169-.442-.332-.664-.5a.256.256,0,0,1-.094-.29c.037-.153.076-.306.125-.455a3.221,3.221,0,0,0,.259-1.116.91.91,0,0,0-.613-.859,2.792,2.792,0,0,0-.939-.108c-.247,0-.494-.01-.741-.021a.211.211,0,0,1-.2-.147c-.061-.166-.134-.329-.187-.5a3.625,3.625,0,0,0-.361-.919.935.935,0,0,0-1.3-.365,7.735,7.735,0,0,0-.721.467c-.174.113-.344.232-.525.333a.249.249,0,0,1-.206,0c-.177-.1-.345-.211-.514-.321-.244-.16-.479-.333-.731-.478a.914.914,0,0,0-.573-.121.957.957,0,0,0-.771.561c-.13.269-.215.56-.319.841-.06.161-.118.324-.178.485a.235.235,0,0,1-.225.165c-.242.008-.484.014-.726.014a2.723,2.723,0,0,0-.925.107.926.926,0,0,0-.627,1.05c.059.307.164.607.249.91.046.166.094.331.137.5a.226.226,0,0,1-.079.252c-.132.1-.261.21-.393.313a8.169,8.169,0,0,0-.722.567.978.978,0,0,0,0,1.462,4.833,4.833,0,0,0,.492.4c.2.158.409.31.615.464a.246.246,0,0,1,.091.277c-.038.158-.078.316-.128.47a3.538,3.538,0,0,0-.263,1.044,2.084,2.084,0,0,0,.036.292.9.9,0,0,0,.662.658,2.9,2.9,0,0,0,.883.079c.242,0,.485.013.727.024a.192.192,0,0,1,.183.128c.067.174.144.346.2.524a3.223,3.223,0,0,0,.413.992.858.858,0,0,0,.8.4,1.972,1.972,0,0,0,.985-.422c.228-.172.466-.331.7-.493a.193.193,0,0,1,.224,0c.163.1.329.2.488.309.188.128.365.272.557.394a1.176,1.176,0,0,0,.757.22.944.944,0,0,0,.782-.566c.13-.269.214-.561.318-.842.058-.157.114-.315.175-.471a.258.258,0,0,1,.25-.176l.741-.011a2.628,2.628,0,0,0,.909-.115.926.926,0,0,0,.605-1.037c-.06-.308-.164-.607-.248-.91-.047-.17-.1-.341-.14-.512a.216.216,0,0,1,.077-.238c.131-.1.261-.211.393-.314a8.252,8.252,0,0,0,.722-.566A.983.983,0,0,0,505.75,798.41Zm-3.565-.2-3.609,3.586a.681.681,0,0,1-.957,0l-1.8-1.793a.67.67,0,0,1,0-.951.681.681,0,0,1,.957,0l1.326,1.318,3.131-3.111a.681.681,0,0,1,.957,0A.67.67,0,0,1,502.185,798.212Z"
				transform="translate(-492.422 -792.648)"
				fill={color}
			/>
		</Svg>
	);
};

export const CheckStar2Svg: IFansSvg = (props) => {
	const { color } = props;
	return (
		<Svg viewBox="0 0 15.661 15">
			<Path
				d="M507.7,799.3a4.821,4.821,0,0,0-.5-.414c-.25-.2-.506-.383-.761-.574a.3.3,0,0,1-.108-.334c.043-.176.087-.353.143-.526a3.737,3.737,0,0,0,.3-1.288,1.05,1.05,0,0,0-.7-.99,3.181,3.181,0,0,0-1.077-.125c-.283,0-.566-.012-.849-.024a.242.242,0,0,1-.232-.17c-.07-.192-.153-.38-.214-.574a4.193,4.193,0,0,0-.414-1.06,1.069,1.069,0,0,0-1.49-.422,8.9,8.9,0,0,0-.826.538c-.2.13-.394.268-.6.384a.284.284,0,0,1-.236,0c-.2-.111-.4-.244-.59-.371-.279-.184-.549-.384-.838-.552a1.042,1.042,0,0,0-.657-.139,1.1,1.1,0,0,0-.883.648c-.149.31-.246.646-.366.971-.069.186-.135.373-.2.56a.269.269,0,0,1-.258.19c-.277.009-.555.017-.832.017a3.1,3.1,0,0,0-1.06.123,1.068,1.068,0,0,0-.719,1.211c.068.355.188.7.285,1.05.053.191.108.382.157.575a.262.262,0,0,1-.09.291c-.151.12-.3.243-.451.362a9.384,9.384,0,0,0-.828.654,1.134,1.134,0,0,0,0,1.687,5.517,5.517,0,0,0,.564.466c.232.182.469.358.7.536a.285.285,0,0,1,.1.319c-.044.182-.089.364-.147.542a4.105,4.105,0,0,0-.3,1.2,2.417,2.417,0,0,0,.041.337,1.037,1.037,0,0,0,.759.759,3.308,3.308,0,0,0,1.012.091c.277-.006.556.014.833.027a.22.22,0,0,1,.21.147c.077.2.165.4.229.6a3.729,3.729,0,0,0,.474,1.144.981.981,0,0,0,.912.467,2.254,2.254,0,0,0,1.129-.487c.262-.2.535-.382.8-.569a.221.221,0,0,1,.257,0c.187.117.377.232.559.356.216.147.419.314.639.454a1.343,1.343,0,0,0,.867.254,1.082,1.082,0,0,0,.9-.653c.149-.311.245-.647.364-.972.067-.181.131-.363.2-.543a.3.3,0,0,1,.287-.2c.283-.005.566-.008.849-.012a2.994,2.994,0,0,0,1.042-.132,1.069,1.069,0,0,0,.694-1.2c-.068-.355-.188-.7-.284-1.051-.054-.2-.11-.393-.16-.591a.25.25,0,0,1,.088-.275c.151-.121.3-.244.451-.363A9.45,9.45,0,0,0,507.7,801,1.139,1.139,0,0,0,507.7,799.3Zm-4.087-.228-4.138,4.138a.777.777,0,0,1-1.1,0l-2.069-2.069a.776.776,0,1,1,1.1-1.1l1.52,1.521,3.589-3.59a.776.776,0,0,1,1.1,1.1Z"
				transform="translate(-492.422 -792.648)"
				fill={color}
			/>
		</Svg>
	);
};

export default CheckSvg;