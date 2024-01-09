import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

const OutlineCameraSvg = ({ ...props }: FansSvgProps) => {
	const { width, height, size, color, ...props_ } = props;
	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			{...props_}
			viewBox="0 0 15.989 14.428"
		>
			<G transform="translate(-167.256 -100.722)">
				<Path
					d="M175.24,115.148q-2.723,0-5.446,0a2.471,2.471,0,0,1-2.393-1.689,2.71,2.71,0,0,1-.137-.841q-.015-3.558,0-7.116a2.494,2.494,0,0,1,2.521-2.528c.276,0,.551,0,.827,0a.665.665,0,0,0,.7-.486,5.811,5.811,0,0,1,.371-.871,1.758,1.758,0,0,1,1.57-.885q2.006-.019,4.011,0a1.855,1.855,0,0,1,1.773,1.307c.059.166.112.335.174.5a.635.635,0,0,0,.619.435c.426.009.856-.013,1.277.035a2.444,2.444,0,0,1,2.13,2.314c.029,1.4.013,2.809.009,4.214a.614.614,0,0,1-.633.615.623.623,0,0,1-.612-.655q0-1.973,0-3.948a1.213,1.213,0,0,0-.7-1.188,1.746,1.746,0,0,0-.6-.134c-.274-.022-.551,0-.826-.006A1.888,1.888,0,0,1,178,102.9c-.057-.162-.107-.326-.166-.487a.633.633,0,0,0-.62-.435q-1.95,0-3.9,0a.647.647,0,0,0-.665.462,6.278,6.278,0,0,1-.35.848,1.817,1.817,0,0,1-1.622.935c-.281.007-.562,0-.843,0a1.258,1.258,0,0,0-1.327,1.334q0,.882,0,1.763,0,2.629,0,5.258a1.236,1.236,0,0,0,.926,1.268,1.5,1.5,0,0,0,.4.049q5.415,0,10.83,0a1.253,1.253,0,0,0,1.326-1.241.625.625,0,1,1,1.248.057,2.5,2.5,0,0,1-2.521,2.433c-1.612.006-3.225,0-4.837,0Z"
					transform="translate(0 0)"
					fill={color ?? "currentColor"}
				/>
				<Path
					d="M178.364,115.754a3.9,3.9,0,1,1,3.919-3.884A3.913,3.913,0,0,1,178.364,115.754Zm.031-6.554a2.652,2.652,0,1,0,2.64,2.662A2.662,2.662,0,0,0,178.394,109.2Z"
					transform="translate(-3.101 -3.103)"
					fill={color ?? "currentColor"}
				/>
			</G>
		</Svg>
	);
};

export default OutlineCameraSvg;
