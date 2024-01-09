import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function FilledHeartSvg({ ...props }: SvgProps) {
	return (
		<Svg {...props} viewBox="0 0 25.626 22.652">
			<Path
				d="M600.964,756.945c.276-.407.522-.8.8-1.171a6.532,6.532,0,0,1,3.554-2.541,6.24,6.24,0,0,1,5.635,1.089,7.326,7.326,0,0,1,2.821,6.494,8.9,8.9,0,0,1-2.013,5.078,29,29,0,0,1-4.185,4.3c-1.982,1.726-3.976,3.437-5.967,5.154a.822.822,0,0,1-1.263,0c-2.5-2.181-5.02-4.348-7.5-6.558a18.328,18.328,0,0,1-3.158-3.606,8.356,8.356,0,0,1-1.038-7.656,6.665,6.665,0,0,1,6.728-4.513,6.306,6.306,0,0,1,4.542,2.43c.325.388.591.826.881,1.243C600.858,756.763,600.9,756.849,600.964,756.945Z"
				transform="translate(-588.156 -752.986)"
				fill={props.color ?? "#fff"}
			/>
		</Svg>
	);
}