import { IFansSvg } from "@usertypes/components";
import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	size?: number;
}

export const Reply1Svg: IFansSvg = (props) => {
	const { color } = props;
	return (
		<Svg viewBox="0 0 16.499 11.559">
			<Path
				d="M13.635,6.36H13.4c-2.569,0-5.138-.009-7.706,0A4.34,4.34,0,0,0,2.533,7.606a3.845,3.845,0,0,0-1.059,2.684,2.846,2.846,0,0,1-.018.366.739.739,0,0,1-.783.6A.743.743,0,0,1,0,10.507,5.244,5.244,0,0,1,4.036,5.128,7.116,7.116,0,0,1,5.754,4.9c2.53-.024,5.061-.011,7.591-.011h.288c-.091-.1-.145-.156-.2-.214q-1.694-1.7-3.39-3.389A.729.729,0,0,1,9.832.493a.692.692,0,0,1,.61-.487.7.7,0,0,1,.6.212Q13.487,2.657,15.927,5.1a.708.708,0,0,1,0,1.046q-2.436,2.446-4.881,4.881a.732.732,0,1,1-1.028-1.043q1.7-1.707,3.4-3.407C13.484,6.52,13.54,6.46,13.635,6.36Z"
				transform="translate(0.151 0.15)"
				fill={color}
				stroke="#fff"
				strokeWidth="0.3"
			/>
		</Svg>
	);
};

const ReplySvg = (props: FansSvgProps) => {
	const { color, height, size, width, ...props_ } = props;

	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 25.356 17.718"
			{...props_}
		>
			<G transform="translate(25.205 17.568) rotate(180)">
				<Path
					d="M21.1,9.839h-.369c-3.974,0-7.948-.015-11.922.006a6.714,6.714,0,0,0-4.885,1.922A5.948,5.948,0,0,0,2.28,15.919a4.4,4.4,0,0,1-.028.566,1.143,1.143,0,0,1-1.211.922A1.149,1.149,0,0,1,0,16.256,8.113,8.113,0,0,1,6.244,7.934,11.01,11.01,0,0,1,8.9,7.582c3.915-.037,7.83-.016,11.745-.016h.445c-.141-.149-.225-.242-.313-.331q-2.621-2.623-5.245-5.243A1.127,1.127,0,0,1,15.211.763a1.071,1.071,0,0,1,.943-.753,1.085,1.085,0,0,1,.935.327Q20.866,4.11,24.64,7.89a1.1,1.1,0,0,1,.006,1.618Q20.878,13.292,17.1,17.06A1.133,1.133,0,1,1,15.5,15.447q2.629-2.641,5.267-5.271C20.862,10.087,20.948,9.994,21.1,9.839Z"
					transform="translate(0.151 0.15)"
					stroke={color ?? "currentColor"}
					strokeWidth="0.3"
				/>
			</G>
		</Svg>
	);
};

export default ReplySvg;
