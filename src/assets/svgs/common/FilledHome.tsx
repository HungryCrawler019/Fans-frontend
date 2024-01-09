import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function FilledHomeSvg({ ...props }: SvgProps) {
	return (
		<Svg {...props} viewBox="0 0 24.383 25">
			<Path
				d="M34.072,779.629l-2.536,0a1.786,1.786,0,0,1-1.858-1.871v-5.472a.523.523,0,0,0-.028-.194.922.922,0,0,0-.194-.02H25.921a.4.4,0,0,0-.181.029.566.566,0,0,0-.02.165v5.45a1.8,1.8,0,0,1-1.92,1.913h-.782q-2.345,0-4.691,0a2.739,2.739,0,0,1-2.772-2.268,2.659,2.659,0,0,1-.046-.524l0-10.826a2.786,2.786,0,0,1,.94-2.116l9.308-8.455a2.741,2.741,0,0,1,3.873-.016l9.294,8.442a2.833,2.833,0,0,1,.969,2.187q0,1.943,0,3.887v6.875a2.743,2.743,0,0,1-1.917,2.68,2.957,2.957,0,0,1-.88.129Q35.581,779.63,34.072,779.629Z"
				transform="translate(-15.507 -754.629)"
				fill={props.color}
			/>
		</Svg>
	);
}
