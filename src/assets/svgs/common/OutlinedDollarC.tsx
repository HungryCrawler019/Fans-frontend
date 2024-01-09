import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

const OutlinedDollarSvg = (props: FansSvgProps) => {
	const { color, height, size, width, ...props_ } = props;

	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 35.43 35.421"
			{...props_}
		>
			<Path
				d="M610.392,760.339c-2.891-.62-3.567-1.314-3.567-2.553v-.037c0-1.183,1.089-2.122,2.8-2.122a5.5,5.5,0,0,1,3.4,1.146.69.69,0,0,0,.432.131.713.713,0,0,0,.714-.713.764.764,0,0,0-.319-.6,6.579,6.579,0,0,0-3.715-1.281v-2.641a.616.616,0,1,0-1.232,0v2.679c-2.1.276-3.559,1.685-3.559,3.534v.038c0,2.159,1.389,3.136,4.412,3.792,2.761.582,3.418,1.277,3.418,2.5v.038c0,1.3-1.164,2.234-2.93,2.234a5.975,5.975,0,0,1-4.149-1.558.659.659,0,0,0-.451-.169.717.717,0,0,0-.713.732.669.669,0,0,0,.281.563,7.74,7.74,0,0,0,3.69,1.665v2.767a.616.616,0,0,0,1.232,0v-2.669l.053,0c2.61,0,4.488-1.465,4.488-3.718v-.038C614.672,762.048,613.32,760.977,610.392,760.339Z"
				transform="translate(-592.141 -743.375)"
				fill={color ?? "currentColor"}
				stroke={color ?? "currentColor"}
				strokeWidth="0.6"
			/>
			<Path
				d="M336.638,25.8h2.213c.089.018.177.044.266.056.809.119,1.627.193,2.424.36A17.733,17.733,0,0,1,355.381,41.79a17.05,17.05,0,0,1-1.953,9.925A17.3,17.3,0,0,1,338.1,61.2,16.626,16.626,0,0,1,328.006,58.3a17.418,17.418,0,0,1-7.7-11.7c-.121-.654-.185-1.321-.276-1.979V42.4c.02-.1.044-.2.06-.3.119-.809.2-1.625.362-2.424a17.715,17.715,0,0,1,14.2-13.608C335.315,25.963,335.978,25.887,336.638,25.8ZM322.509,43.484a15.235,15.235,0,1,0,15.269-15.209A15.245,15.245,0,0,0,322.509,43.484Z"
				transform="translate(-320.03 -25.796)"
				fill={color ?? "currentColor"}
			/>
		</Svg>
	);
};

export default OutlinedDollarSvg;