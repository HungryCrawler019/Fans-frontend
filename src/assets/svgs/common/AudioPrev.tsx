import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	size?: number;
}

const AudioPrevSvg = ({ ...props }: FansSvgProps) => (
	<Svg
		width={props.width ?? props.size}
		height={props.height ?? props.size}
		viewBox="0 0 23.703 22.247"
	>
		<G transform="translate(-776.593 -457.323)">
			<Path
				d="M799.166,463.947a11.252,11.252,0,0,0-18.353-3.085v-2.478a.75.75,0,0,0-1.5,0v4.78a.75.75,0,0,0,.75.75h4.782a.75.75,0,0,0,0-1.5h-3.424a9.794,9.794,0,1,1,12.612,14.651.751.751,0,0,0,.781,1.282A11.286,11.286,0,0,0,799.166,463.947Z"
				fill={props.color ?? "#707070"}
				stroke={props.color ?? "#707070"}
				strokeWidth="0.1"
			/>
			<Path
				d="M776.643,471.329v1.592l2.243-1.433h.056v7.9h1.738V469.8h-1.653Z"
				fill={props.color ?? "#707070"}
				stroke={props.color ?? "#707070"}
				strokeWidth="0.1"
			/>
			<Path
				d="M787.766,473.472a2.958,2.958,0,0,0-1.555-.41,2.663,2.663,0,0,0-1.067.209,1.975,1.975,0,0,0-.754.521h-.057l.276-2.543h4.126V469.8h-5.563l-.5,4.945,1.568.258a1.735,1.735,0,0,1,.66-.432,2.245,2.245,0,0,1,.848-.159,1.81,1.81,0,0,1,.937.241,1.731,1.731,0,0,1,.641.663,1.914,1.914,0,0,1,.23.965,1.889,1.889,0,0,1-.225.95,1.668,1.668,0,0,1-.627.652,1.761,1.761,0,0,1-.909.234,1.717,1.717,0,0,1-1.114-.373,1.315,1.315,0,0,1-.511-.962h-1.686a2.567,2.567,0,0,0,.461,1.414,2.952,2.952,0,0,0,1.173.972,3.843,3.843,0,0,0,1.677.354,3.674,3.674,0,0,0,1.792-.424,3.114,3.114,0,0,0,1.213-1.166,3.267,3.267,0,0,0,.437-1.693,3.351,3.351,0,0,0-.393-1.639A2.924,2.924,0,0,0,787.766,473.472Z"
				fill={props.color ?? "#707070"}
				stroke={props.color ?? "#707070"}
				strokeWidth="0.1"
			/>
		</G>
	</Svg>
);

export default AudioPrevSvg;