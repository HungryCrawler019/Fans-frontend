import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

export default function InstagramSvg({ ...props }: FansSvgProps) {
	return (
		<Svg
			width={props.width ?? props.size}
			height={props.height ?? props.size}
			{...props}
			viewBox="0 0 24.729 24.762"
		>
			<G transform="translate(-449.547 -36.313)">
				<Path
					d="M474.078,44.7a13.661,13.661,0,0,0-.289-2.677,6.687,6.687,0,0,0-1.75-3.358,6.911,6.911,0,0,0-4.637-2.041c-1.089-.068-2.274-.114-3.622-.139q-1.045-.019-2.043-.02c-1.543,0-3.016.037-4.458.11l-.233.011a9.662,9.662,0,0,0-1.892.217,6.548,6.548,0,0,0-4.94,4.542,11.744,11.744,0,0,0-.472,3.337c-.062,2.641-.062,5.336,0,8.008a12.458,12.458,0,0,0,.338,2.859,6.565,6.565,0,0,0,4.738,4.927,9.7,9.7,0,0,0,2.49.316c1.087.039,2.174.069,3.265.1l1.333.037,1.4-.039c1.1-.03,2.209-.059,3.314-.1a9.711,9.711,0,0,0,2.05-.226A6.544,6.544,0,0,0,473.613,56a11.835,11.835,0,0,0,.466-3.338C474.14,50.033,474.14,47.355,474.078,44.7Zm-1.567,8.123a9.1,9.1,0,0,1-.391,2.732,4.964,4.964,0,0,1-4.051,3.533,10.415,10.415,0,0,1-1.489.143c-1.578.075-3.137.112-4.663.112q-1.455,0-2.866-.045l-.214-.008c-.773-.025-1.572-.051-2.358-.105a5.314,5.314,0,0,1-3.724-1.726,5.241,5.241,0,0,1-1.2-2.45,11.029,11.029,0,0,1-.245-2.151c-.072-2.811-.072-5.617,0-8.343a9.494,9.494,0,0,1,.432-2.821,4.954,4.954,0,0,1,3.987-3.412,10.047,10.047,0,0,1,1.571-.145c1.1-.04,2.191-.072,3.286-.1L461.908,38c1.609.019,3.513.056,5.435.184a5.222,5.222,0,0,1,3.948,2,5.553,5.553,0,0,1,1.033,2.446,16.354,16.354,0,0,1,.21,3.027C472.534,47.851,472.534,50.348,472.512,52.821Z"
					fill={props.color ?? "#fff"}
					stroke={props.color ?? "#fff"}
					strokeWidth="0.3"
				/>
				<Path
					d="M463.831,44.8h0a5.866,5.866,0,0,0,0,11.733h0a5.866,5.866,0,0,0,0-11.733Zm0,10.174h0a4.308,4.308,0,1,1,0-8.616h.005a4.308,4.308,0,0,1-.007,8.616Z"
					transform="translate(-1.966 -1.983)"
					fill={props.color ?? "#fff"}
					stroke={props.color ?? "#fff"}
					strokeWidth="0.3"
				/>
				<Path
					d="M474.11,42.255h0a1.263,1.263,0,0,0-.9,2.151,1.247,1.247,0,0,0,.89.374h0a1.263,1.263,0,0,0,.009-2.526Z"
					transform="translate(-5.506 -1.378)"
					fill={props.color ?? "#fff"}
					stroke={props.color ?? "#fff"}
					strokeWidth="0.3"
				/>
			</G>
		</Svg>
	);
}
