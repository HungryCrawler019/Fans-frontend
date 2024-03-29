import { IFansSvg } from "@usertypes/components";
import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

const PinSvg = (props: FansSvgProps) => {
	const { color, height, size, width, ...props_ } = props;

	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="72.517 17.035 21.965 21.965"
			{...props_}
		>
			<Path
				d="M87.195 33.149c.116-.197.213-.408.3-.62.384-.94.483-1.978.301-3.175-.014-.09-.008-.129.06-.211.594-.72 1.182-1.443 1.77-2.167l.237-.294 2.464-1.53a.791.791 0 0 0 .142-1.232l-4.87-4.87a.794.794 0 0 0-1.233.14l-1.534 2.47-.556.454c-.643.523-1.286 1.046-1.926 1.57-.05.042-.076.055-.165.043a12.507 12.507 0 0 0-.737-.078l-.24-.02a.76.76 0 0 0-.128-.002l-.245.014c-.176.01-.334.02-.49.038-.69.08-1.346.292-1.952.63a1.445 1.445 0 0 0-.716.935c-.092.372-.09.929.45 1.469l.005.004 2.775 2.774-3.94 3.94a.792.792 0 0 0 1.12 1.12l3.94-3.94 2.77 2.77c.04.04.08.08.124.119.343.307.79.442 1.23.373a1.475 1.475 0 0 0 1.044-.724Z"
				fill={props.color ?? "currentColor"}
				fillRule="evenodd"
			/>
		</Svg>
	);
};

export const Pin1Svg: IFansSvg = (props) => {
	const { color } = props;

	return (
		<Svg viewBox="0 0 21.965 21.965">
			<Path
				d="M307.274,310.553a4.757,4.757,0,0,0-.227-.651,5.872,5.872,0,0,0-2.032-2.458.213.213,0,0,1-.107-.192c-.089-.929-.185-1.856-.281-2.783l-.04-.376.66-2.824a.792.792,0,0,0-.771-.971h-6.888a.792.792,0,0,0-.771.971l.662,2.831-.073.713q-.127,1.236-.251,2.473a.168.168,0,0,1-.087.146c-.2.152-.4.316-.576.466l-.184.155a.759.759,0,0,0-.093.089l-.163.184c-.117.132-.222.25-.319.373a5.206,5.206,0,0,0-.935,1.827,1.445,1.445,0,0,0,.154,1.166,1.487,1.487,0,0,0,1.357.72h3.93v5.572a.792.792,0,1,0,1.584,0v-5.572h3.917c.057,0,.114,0,.173,0a1.49,1.49,0,0,0,1.133-.606A1.475,1.475,0,0,0,307.274,310.553Z"
				transform="translate(16.996 -420.756) rotate(45)"
				fill={color}
			/>
		</Svg>
	);
};

export const Pin2Svg: IFansSvg = (props) => {
	const { size, color } = props;
	return (
		<Svg width={size} height={size} viewBox="0 0 50 50">
			<Path
				fill={color}
				d="M31.95,39.934a1,1,0,0,1-.707-.293l-20.9-20.9a1,1,0,0,1,0-1.414,15.665,15.665,0,0,1,11.15-4.618,15.846,15.846,0,0,1,3.639.423L33.413,1.5A3.507,3.507,0,0,1,36.074,0a2.15,2.15,0,0,1,1.549.634l11.764,11.9a2.141,2.141,0,0,1,.606,1.7A3.55,3.55,0,0,1,48.488,16.7L36.81,24.66a15.767,15.767,0,0,1-4.152,14.98A1,1,0,0,1,31.95,39.934Z"
			/>
			<Path
				fill={color}
				d="M16.525,27.753.216,48.38a1,1,0,0,0,1.4,1.4L22.233,33.46Z"
			/>
		</Svg>
	);
};

export default PinSvg;
