import { IFypSvgProps } from "@usertypes/components";
import React from "react";
import { Svg, G, Path } from "react-native-svg";

export const ShopSvg = (props: IFypSvgProps) => {
	const { color, height, size, width, ...props_ } = props;

	return (
		<Svg
			width={width ?? size}
			height={height ?? size}
			viewBox="0 0 20.177 25.448"
			{...props_}
		>
			<G transform="translate(-7.553 -168)">
				<Path
					fill={color}
					d="M12.554,173.726c0-.244-.008-.462,0-.68a4.935,4.935,0,0,1,2.983-4.572,5.065,5.065,0,0,1,7.123,3.8,8.813,8.813,0,0,1,.067.95c.008.156,0,.314,0,.486.1,0,.177.012.254.014.511,0,1.024,0,1.536,0a2.5,2.5,0,0,1,2.507,2.321c.073.968.1,1.939.152,2.91q.126,2.634.249,5.266.087,1.865.173,3.731c.042.926.077,1.853.126,2.779A2.544,2.544,0,0,1,26.27,193.2a2.7,2.7,0,0,1-1.155.244q-1.483,0-2.967,0H10.2a2.536,2.536,0,0,1-2.214-1.128,2.4,2.4,0,0,1-.431-1.5q.068-1.629.144-3.255.066-1.443.138-2.885.122-2.593.246-5.187c.044-.953.077-1.906.133-2.859a5.232,5.232,0,0,1,.147-1.123,2.481,2.481,0,0,1,2.368-1.783c.512-.008,1.025,0,1.537,0Zm5.082,18.023c2.472,0,4.945-.01,7.417.007a.908.908,0,0,0,.976-1.009c-.063-.89-.085-1.782-.126-2.673q-.085-1.879-.175-3.757-.122-2.606-.247-5.213c-.044-.943-.1-1.886-.13-2.83a.9.9,0,0,0-.975-.889c-1.033.018-2.066.017-3.1.019q-4.08.012-8.16.019c-.767,0-1.536,0-2.3,0a.831.831,0,0,0-.872.81c-.02.228-.027.458-.037.687q-.09,1.92-.178,3.837-.122,2.593-.247,5.187c-.045.952-.093,1.9-.137,2.857-.032.679-.063,1.358-.087,2.038a.806.806,0,0,0,.523.836,1.436,1.436,0,0,0,.467.065Q13.941,191.753,17.636,191.749ZM21,173.713a3.466,3.466,0,0,0-1.636-3.534,3.374,3.374,0,0,0-3.8.236,3.42,3.42,0,0,0-1.274,3.3Z"
					transform="translate(0)"
				/>
				<Path
					fill={color}
					d="M17.068,181.184a5.065,5.065,0,0,1-4.974-3.9,1.292,1.292,0,0,1,0-.6.789.789,0,0,1,.78-.562.834.834,0,0,1,.823.549c.045.124.071.254.107.381a3.385,3.385,0,0,0,6.52-.012c.032-.119.057-.24.1-.356a.849.849,0,0,1,1-.545.819.819,0,0,1,.655.869,2.747,2.747,0,0,1-.129.592A5.076,5.076,0,0,1,17.068,181.184Z"
					transform="translate(0.601 1.084)"
				/>
			</G>
		</Svg>
	);
};