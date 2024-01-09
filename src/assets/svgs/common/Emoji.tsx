import React from "react";
import { Svg, G, Path, SvgProps } from "react-native-svg";

export default function EmojiSvg({ ...props }: SvgProps) {
	return (
		<Svg {...props} viewBox="0 0 20.779 20.773">
			<G transform="translate(-320.03 -25.796)">
				<G transform="translate(320.03 25.796)">
					<Path
						d="M329.77,25.8h1.3c.052.011.1.026.156.033.475.07.954.113,1.422.211a10.4,10.4,0,0,1,8.116,9.136A10,10,0,0,1,339.617,41a10.149,10.149,0,0,1-8.99,5.564,9.751,9.751,0,0,1-5.919-1.7,10.215,10.215,0,0,1-4.516-6.862c-.071-.384-.109-.775-.162-1.161v-1.3c.012-.059.026-.117.035-.176.07-.475.116-.953.213-1.422a10.389,10.389,0,0,1,8.33-7.981C328.994,25.894,329.383,25.849,329.77,25.8Zm-8.287,10.373a8.935,8.935,0,1,0,8.955-8.919A8.941,8.941,0,0,0,321.484,36.169Z"
						transform="translate(-320.03 -25.796)"
						fill={props.color ?? "#707070"}
					/>
				</G>
				<G transform="translate(325.865 32.72)">
					<Path
						d="M329.45,39.742a4.768,4.768,0,0,1-3.471-1.574,5.767,5.767,0,0,1-.577-.7.786.786,0,0,1,.184-1.127.8.8,0,0,1,1.14.207,3.762,3.762,0,0,0,1.664,1.369,2.858,2.858,0,0,0,3.082-.592,5.1,5.1,0,0,0,.694-.758.823.823,0,0,1,1.155-.23.794.794,0,0,1,.174,1.16,5.107,5.107,0,0,1-3.6,2.233c-.047,0-.095.013-.142.014C329.653,39.743,329.551,39.742,329.45,39.742Z"
						transform="translate(-324.922 -30.84)"
						fill={props.color ?? "#707070"}
					/>
					<Path
						d="M326.994,32.673a1.011,1.011,0,1,1-1.013-1.014A1.013,1.013,0,0,1,326.994,32.673Z"
						transform="translate(-324.971 -31.659)"
						fill={props.color ?? "#707070"}
					/>
					<Path
						d="M331.981,31.659a1.011,1.011,0,1,1-1.01,1.018A1.012,1.012,0,0,1,331.981,31.659Z"
						transform="translate(-323.885 -31.659)"
						fill={props.color ?? "#707070"}
					/>
				</G>
			</G>
		</Svg>
	);
}