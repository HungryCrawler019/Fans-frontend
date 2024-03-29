import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	size?: number;
}

const ArchivedPostSvg = ({ ...props }: FansSvgProps) => (
	<Svg
		width={props.width ?? props.size}
		height={props.height ?? props.size}
		viewBox="0 0 17.394 17.496"
	>
		<G transform="translate(-645.351 -369.75)">
			<Path
				fill={props.color ?? "#000"}
				d="M654,387.246a8.727,8.727,0,0,1-6.4-2.78.75.75,0,1,1,1.1-1.024,7.25,7.25,0,1,0,5.354-12.192.75.75,0,0,1,.006-1.5h.006a8.673,8.673,0,0,1,6.339,2.784,8.746,8.746,0,0,1-6.4,14.712Z"
			/>
			<Path
				fill={props.color ?? "#000"}
				d="M651.573,382.127a.75.75,0,0,1-.524-1.286l2.2-2.156V375a.75.75,0,0,1,1.5,0v4a.748.748,0,0,1-.226.536l-2.426,2.377A.747.747,0,0,1,651.573,382.127Z"
			/>
			<Path
				fill={props.color ?? "#000"}
				d="M651.146,386.014h0m-5.784-6.116h0a.753.753,0,0,1,.621-.864h0a.738.738,0,0,1,.853.622h0a.751.751,0,0,1-.611.863h0l-.11,0h0A.744.744,0,0,1,645.362,379.9Zm1.005-3.9a.757.757,0,0,1-.392-.991h0a.742.742,0,0,1,.982-.382h0a.735.735,0,0,1,.392.982h0a.769.769,0,0,1-.671.454h0A.864.864,0,0,1,646.367,375.995Zm2.559-3.726a.745.745,0,0,1,.208-1.035h0c.01-.01.019-.021.029-.021h0c0-.01.01-.01.02-.02h0a.747.747,0,0,1,1.035.218h0a.743.743,0,0,1-.208,1.034h0a.109.109,0,0,1-.039.031h0a.771.771,0,0,1-.4.129h0A.77.77,0,0,1,648.926,372.269Z"
			/>
		</G>
	</Svg>
);

export default ArchivedPostSvg;
