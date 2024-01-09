import React, { FC } from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	fill?: string;
	size?: number;
}

const OfflineAccessSvg: FC<FansSvgProps> = (props) => {
	const { color, size, ..._props } = props;
	return (
		<Svg
			width={props.width ?? props.size}
			height={props.height ?? props.size}
			viewBox="0 0 23.597 20.911"
			{..._props}
		>
			<Path
				d="M-10.505,354.29a5.27,5.27,0,0,1-5.259-5.31,5.281,5.281,0,0,1,5.306-5.247,5.279,5.279,0,0,1,5.247,5.3A5.269,5.269,0,0,1-10.505,354.29Zm.969-5.268c.272-.267.52-.5.753-.739a.681.681,0,0,0,0-.973.689.689,0,0,0-.974,0c-.079.073-.153.152-.229.227l-.518.516c-.257-.266-.481-.52-.728-.749a.684.684,0,0,0-1.15.359.67.67,0,0,0,.212.648c.234.229.474.452.758.722a2.406,2.406,0,0,0-.245.179c-.187.181-.377.361-.552.555a.679.679,0,0,0,.31,1.126.683.683,0,0,0,.713-.2c.229-.231.461-.46.7-.7.244.25.469.482.7.711a.681.681,0,0,0,.694.2.683.683,0,0,0,.315-1.139C-9.008,349.505-9.269,349.278-9.536,349.022Z"
				transform="translate(28.808 -343.733)"
				fill={color}
			/>
			<Path
				d="M-21.993,347.991a6.794,6.794,0,0,0-.209,3.574l-.42-.071a10.732,10.732,0,0,0-8.325,1.855,2.324,2.324,0,0,1-.913.466,1.814,1.814,0,0,1-2.009-1.077,1.744,1.744,0,0,1,.593-2.112,14.162,14.162,0,0,1,2.768-1.636,14.231,14.231,0,0,1,4.5-1.178,14.787,14.787,0,0,1,3.9.149C-22.08,347.966-22.052,347.976-21.993,347.991Z"
				transform="translate(34.012 -344.878)"
				fill={color}
			/>
			<Path
				d="M-23.313,357.827a9.2,9.2,0,0,1,4.846,1.269,1.753,1.753,0,0,1,.877,1.832,1.843,1.843,0,0,1-1.4,1.451,1.734,1.734,0,0,1-1.265-.205,5.585,5.585,0,0,0-1.931-.708,5.349,5.349,0,0,0-3.534.609,2.172,2.172,0,0,1-1.22.337,1.847,1.847,0,0,1-1.6-1.3,1.721,1.721,0,0,1,.7-1.922,8.34,8.34,0,0,1,2.658-1.117A8.089,8.089,0,0,1-23.313,357.827Z"
				transform="translate(32.471 -347.752)"
				fill={color}
			/>
			<Path
				d="M-19.81,369.76a1.791,1.791,0,0,1-1.778,1.8,1.792,1.792,0,0,1-1.79-1.786,1.789,1.789,0,0,1,1.778-1.8A1.789,1.789,0,0,1-19.81,369.76Z"
				transform="translate(30.979 -350.646)"
				fill={color}
			/>
		</Svg>
	);
};

export default OfflineAccessSvg;
