import tw from "@lib/tailwind";
import React from "react";
import { Svg, SvgProps } from "react-native-svg";

interface FansSvgProps extends SvgProps {
	color?: string;
	colorFans?: string;
	fill?: string;
	size?: number;
}

const FansReferralStarsSvg = (props: FansSvgProps) => {
	const {
		size,
		width = size,
		height = size,
		colorFans = "current",
		style,
	} = props;

	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 34.796 34.796"
			style={style}
		>
			<path
				d="M1588.008,152.461l-.01,0h0l-.089.014-.1.015-.012,0-.106.017h0l0,0-.27.042-.177.03-.064.01-.319.057-.128.022-.083.015-.079.015-.041.008c-.123.024-.248.047-.373.073l-.017,0c-.15.03-.3.061-.453.095l-.081.017-.037.007-.069.017c-.135.029-.27.059-.407.091l-.024.005c-.069.017-.137.034-.206.049l-.286.069-.094.024-.023.007-.112.029-.2.051-.037.01q-.268.071-.537.147l-.1.029c-.059.017-.116.034-.174.052s-.134.039-.2.059l-.2.059-.111.035-.164.054q-.122.038-.243.081c-.047.015-.093.029-.14.046l-.048.017c-.4.138-.792.287-1.169.448l-.034.014-.285.125-.054.025c-.1.046-.2.093-.306.142l0,0c-.1.049-.2.1-.3.152l-.054.029-.229.122-.078.044c-.073.041-.144.083-.213.123l-.062.037q-.132.079-.259.162l-.044.029c-.068.046-.135.091-.2.138l-.074.052c-.057.042-.113.083-.167.125l-.068.052c-.074.059-.145.117-.214.177h0a5.549,5.549,0,0,0-.784.784h0l-.005.007c-.03.035-.059.073-.089.108s-.052.062-.079.1l-.014.019c-.02.025-.041.054-.061.081s-.064.081-.095.123l-.029.041c-.022.03-.046.064-.068.1s-.047.066-.069.1l-.037.056,0,.007c-.036.054-.071.108-.1.164l-.057.091c-.032.054-.066.11-.1.166l-.056.1c-.032.057-.066.115-.1.174l-.01.019c-.071.13-.138.264-.206.4l-.057.117c-.027.056-.054.113-.081.171l-.062.135-.074.166q-.035.081-.071.167c-.027.059-.052.118-.076.179-.035.086-.071.172-.106.26l-.051.132c-.027.069-.052.139-.079.208l-.045.127c-.031.079-.058.159-.086.238l-.034.1c-.081.233-.159.468-.233.706l-.019.059c-.032.106-.064.215-.1.321l-.013.044c-.079.274-.157.551-.23.826l-.019.069-.012.049c-.047.186-.094.372-.138.557l-.01.042-.014.052v.008l0,.008,0,.007c-.035.155-.071.307-.1.459l0,.01,0,.013-.037.171-.007.029,0,.017c-.086.4-.164.8-.233,1.179l-.005.03,0,.022c-.051.282-.1.556-.138.817l0,.03-.032.211-.009.049h0v.02l0,.012v-.01l0-.013,0-.008c-.017-.118-.035-.24-.056-.361l-.01-.061c-.017-.108-.034-.216-.052-.328l-.009-.049c-.02-.117-.042-.235-.062-.355l-.007-.037c-.022-.12-.046-.242-.069-.365l-.005-.03-.032-.164-.01-.049-.032-.157-.04-.2c-.017-.083-.036-.167-.052-.25l-.032-.149c-.022-.093-.042-.187-.064-.282l-.005-.025-.009-.035c-.039-.167-.079-.336-.121-.505l-.025-.106-.022-.086-.02-.081-.044-.164-.019-.071-.035-.135c-.021-.076-.041-.15-.062-.226s-.047-.166-.071-.248l0-.01,0-.01c-.054-.187-.11-.375-.167-.561-.022-.069-.047-.139-.069-.209l-.029-.093-.027-.083-.01-.029-.024-.069c-.047-.14-.1-.279-.147-.419-.017-.044-.03-.091-.047-.135l-.031-.083-.023-.066-.042-.113-.044-.108c-.026-.069-.052-.139-.08-.206l-.034-.079c-.03-.076-.062-.154-.094-.23l-.025-.054c-.057-.133-.116-.265-.176-.4l-.008-.019c-.021-.042-.041-.086-.059-.127s-.037-.076-.056-.113l-.024-.046c-.022-.047-.045-.093-.069-.138s-.052-.1-.079-.154l-.017-.03-.044-.083c-.02-.039-.042-.078-.064-.117l-.056-.1-.023-.041c-.041-.069-.081-.139-.123-.2l-.039-.066-.02-.032c-.041-.066-.083-.13-.125-.194l-.008-.01-.005-.01-.022-.03c-.041-.061-.083-.12-.125-.179l-.019-.027-.03-.039c-.037-.051-.073-.1-.11-.145l-.031-.039-.017-.02c-.051-.066-.1-.128-.157-.191h0a5.536,5.536,0,0,0-.784-.784l-.024-.02c-.04-.034-.081-.069-.123-.1l-.089-.071-.062-.049-.128-.095-.027-.02a9.278,9.278,0,0,0-.962-.6l-.025-.014-.25-.132-.029-.015-.049-.024-.1-.049-.074-.037-.062-.03-.025-.012-.035-.017-.191-.088-.044-.02-.01-.005-.084-.037-.1-.046-.1-.046-.069-.027c-.1-.042-.2-.081-.3-.122l-.14-.056c-.559-.218-1.143-.415-1.735-.591l-.012,0c-.115-.036-.231-.069-.346-.1l-.022-.007c-.336-.095-.674-.184-1.01-.267l-.074-.019-.284-.069-.137-.03-.251-.059c-.093-.02-.184-.041-.277-.059-.076-.017-.152-.034-.228-.049-.093-.02-.187-.039-.28-.057l-.13-.025c-.108-.022-.216-.042-.323-.062l-.071-.013c-.461-.086-.9-.159-1.316-.22l-.019,0-.032,0,.022,0,.01,0h0l.091-.013.1-.015.012,0,.106-.017h.005l.27-.044.176-.03.066-.01.319-.056.127-.024.083-.015.079-.015.042-.008c.123-.022.248-.047.373-.073l.014,0,.454-.095.081-.017.037-.008.071-.015c.135-.03.27-.061.405-.093l.025-.005c.068-.017.137-.034.206-.049l.284-.069.095-.024.023-.005.112-.029c.067-.019.133-.036.2-.052l.037-.01c.179-.047.358-.1.535-.147l.1-.027.174-.052.2-.061.2-.059.111-.035.162-.052.245-.081c.045-.017.093-.03.138-.046l.049-.019c.4-.138.791-.287,1.167-.448l.034-.014c.1-.041.193-.083.286-.125l.056-.025q.155-.068.3-.142l0,0c.1-.049.2-.1.306-.152l.052-.027c.078-.041.155-.083.23-.123l.079-.044.213-.123.061-.037c.088-.052.176-.106.26-.162l.042-.029q.1-.068.2-.137l.074-.054c.055-.041.111-.083.166-.125l.069-.052c.073-.057.145-.117.214-.177h0a5.453,5.453,0,0,0,.784-.784h0l.005-.007c.03-.036.061-.071.089-.108s.054-.062.079-.1l.015-.017.061-.081.094-.125.027-.039c.024-.032.046-.066.069-.1s.046-.066.068-.1l.037-.057.005-.007c.035-.054.069-.108.1-.164l.056-.091c.034-.054.068-.11.1-.166l.054-.095.1-.176.009-.019c.071-.13.14-.264.208-.4l.058-.117c.027-.056.054-.113.079-.171l.064-.135.073-.164c.025-.056.049-.111.073-.167l.076-.181c.036-.086.071-.172.1-.26l.051-.132c.027-.069.054-.137.079-.206l.047-.128.086-.238.032-.095c.081-.233.159-.47.233-.708l.019-.059c.034-.106.066-.213.1-.321l.014-.044c.081-.274.157-.551.23-.826l.018-.069.012-.049c.049-.186.094-.372.138-.557l.012-.042.012-.052,0-.008,0-.008,0-.007c.037-.154.071-.307.1-.459l0-.01,0-.013.037-.171.007-.027,0-.019c.088-.4.164-.8.233-1.179l0-.03.005-.022c.051-.282.1-.556.137-.817l0-.03.032-.211.007-.049h0l0-.02,0-.012,0,.01v.022c.019.118.038.24.056.363l.01.059c.017.108.036.216.054.328l.008.049c.021.117.041.235.063.355l.007.037c.022.12.044.242.068.365l.007.03.03.164.01.049.032.157.041.2c.019.083.035.167.054.25l.032.149c.02.093.042.187.064.282l.005.025.009.035c.039.167.079.336.12.505l.027.108.022.084.02.081.042.164.02.071c.012.046.022.091.035.135l.061.226.071.248,0,.01,0,.01c.054.187.108.375.167.561.022.069.046.138.069.209l.029.093.025.083.01.029.025.069c.047.14.1.28.145.419.017.044.032.091.049.135l.031.083.023.066.042.113.042.11.081.2.032.079c.032.076.063.154.1.23l.024.054q.086.2.177.4l.008.019c.021.042.039.086.059.128l.056.111.022.046c.024.047.046.093.069.139l.081.155.015.03.044.081c.02.041.042.078.064.115l.058.1.022.041c.041.069.083.138.123.206l.039.064.02.032.126.194.007.012.007.008.022.03c.041.061.081.12.124.179l.02.027.03.041c.035.049.073.1.11.145l.029.037.017.02c.052.066.1.13.157.191h0a5.439,5.439,0,0,0,.784.784l.024.02c.041.034.081.069.123.1l.089.071.063.049c.041.032.085.064.127.095l.027.02a9.035,9.035,0,0,0,.964.6l.025.014c.081.046.166.088.248.132l.029.015.051.024.1.049.076.037.063.032.025.01.022.012.2.093.044.022.01,0,.084.037.106.047.1.044.067.027q.147.063.3.122c.046.019.093.039.14.056.559.218,1.142.416,1.735.593l.01,0,.348.1.02.005c.338.1.676.184,1.012.269l.074.019.282.068.137.03c.084.02.169.041.253.059s.182.041.274.059c.076.017.154.034.23.049l.281.057.13.025.324.062.069.014c.463.086.905.159,1.316.22l.019,0,.032,0Zm7.175-13.652h-.005l-.047.007-.054.008-.007,0-.056.008h0l-.144.024-.095.015-.032.005-.171.03-.068.012-.044.008-.042.008-.022,0-.2.039-.009,0-.24.051-.044.008-.019.005-.037.008c-.073.015-.144.03-.216.047l-.013,0-.108.027-.152.035-.049.013-.014,0-.059.015-.107.029-.018.005c-.1.025-.191.051-.285.078l-.051.015-.093.027-.106.032-.1.03-.059.02-.086.027-.13.044-.074.024-.025.01c-.211.073-.419.152-.618.236l-.019.008-.152.066-.029.013c-.054.024-.108.049-.162.074l0,0c-.054.025-.108.052-.161.079l-.029.015-.122.066-.042.024c-.039.02-.076.042-.113.064l-.032.02-.138.086-.022.015c-.037.024-.073.049-.106.073l-.041.029-.088.066-.037.029c-.039.03-.076.061-.113.093h0a2.943,2.943,0,0,0-.415.415h0l0,.005-.047.056-.042.051-.007.01-.034.044-.049.066-.015.02-.035.052-.037.052-.02.029,0,0-.056.088-.03.047-.052.09-.029.051-.052.091-.005.01c-.037.069-.074.14-.11.213l-.031.061-.042.09-.034.073-.039.088-.039.088-.039.095c-.02.047-.039.093-.057.14l-.027.069-.04.11-.025.068-.046.127-.017.051c-.044.123-.084.248-.125.375l-.008.03c-.019.057-.035.113-.052.171l-.007.022c-.042.147-.083.294-.122.439l-.01.037-.007.025c-.025.1-.049.2-.073.3l-.007.024,0,.027,0,.005,0,0v0c-.02.083-.037.164-.056.245l0,.005v.007l-.019.091,0,.014,0,.01c-.046.215-.086.424-.123.625l0,.017,0,.012c-.025.149-.051.294-.073.432v.017l-.017.111-.005.027h0v.017h0v-.014l0,0c-.009-.064-.019-.128-.029-.193l-.005-.032-.029-.174-.005-.025c-.01-.062-.022-.125-.032-.189l0-.019c-.01-.064-.024-.128-.035-.194l0-.017-.017-.086-.005-.025-.017-.084-.022-.1-.027-.132-.019-.079-.032-.15,0-.012,0-.019c-.02-.09-.042-.179-.064-.269l-.013-.057-.012-.044-.01-.044-.023-.088-.01-.037-.019-.071-.032-.12-.039-.132v-.012c-.029-.1-.059-.2-.09-.3-.012-.037-.025-.073-.037-.11l-.015-.051-.014-.044,0-.015-.014-.035c-.025-.076-.051-.149-.078-.223l-.025-.071-.015-.046-.014-.034-.022-.061-.024-.057-.042-.108-.017-.042-.051-.122-.014-.029c-.03-.071-.061-.142-.093-.209l-.005-.01-.03-.068-.031-.059-.012-.025-.037-.073-.042-.083-.009-.015-.024-.044-.034-.062-.03-.052-.012-.022c-.022-.037-.044-.073-.066-.108l-.02-.035-.01-.017c-.022-.034-.044-.069-.068-.1l0-.005,0-.005-.012-.017-.066-.095-.01-.014-.015-.022-.059-.076-.015-.022-.009-.01-.084-.1h0a2.944,2.944,0,0,0-.416-.415l-.013-.01-.064-.056-.049-.037-.032-.025-.068-.051-.015-.01a4.543,4.543,0,0,0-.51-.319l-.014-.008c-.044-.024-.088-.047-.133-.069l-.015-.008-.025-.013-.052-.025-.04-.02-.032-.015-.013-.007-.02-.008-.1-.047-.024-.01-.005,0-.046-.019-.056-.025-.054-.024-.035-.013-.159-.066-.074-.029c-.3-.117-.606-.22-.919-.314l-.007,0-.184-.054-.01,0q-.269-.076-.537-.142l-.039-.01-.15-.035-.073-.017-.133-.03-.147-.032-.122-.025-.148-.03-.069-.014-.171-.034-.037-.007c-.245-.046-.479-.084-.7-.117l-.01,0-.017,0,.012,0h.005l.047-.007.054-.008.007,0,.056-.008h0l.144-.024.093-.015.034-.007.17-.029.068-.013.044-.007.042-.008.022,0,.2-.039.007,0,.241-.051.044-.008.019-.005.037-.008c.071-.015.144-.03.216-.047l.012,0,.11-.027.152-.035.049-.014.014,0,.057-.015.108-.027.019-.005c.095-.025.191-.051.285-.078l.051-.015.093-.027.1-.032.1-.03.059-.02.086-.029.13-.042.073-.024.025-.01c.213-.073.421-.152.62-.236l.018-.008.15-.066.031-.014c.054-.024.108-.049.16-.074l0,0c.054-.025.108-.052.16-.081l.029-.014.122-.066.042-.024.113-.066.032-.019q.071-.043.137-.086l.024-.015.106-.073.041-.029.088-.066.035-.029c.039-.03.078-.061.115-.093h0v0h0a2.746,2.746,0,0,0,.416-.415h0l0,0,.047-.056.042-.052.007-.008.032-.044.051-.066.015-.02.035-.052.037-.052.019-.03,0,0,.055-.086.029-.049.054-.088.029-.051.052-.093,0-.008c.037-.069.073-.14.11-.213l.03-.061.042-.091.034-.071.039-.088.037-.088.041-.1c.02-.046.039-.091.056-.138l.027-.069.042-.11.025-.068.045-.127.017-.051c.044-.123.084-.248.123-.375l.01-.03c.017-.057.036-.113.052-.171l.007-.024c.042-.145.083-.292.121-.437l.01-.037.005-.025c.027-.1.051-.2.074-.3l.005-.024.007-.027,0-.005v-.008l.056-.243v-.012l.021-.091,0-.015,0-.008c.046-.215.088-.424.123-.625l0-.017v-.012c.027-.149.052-.294.073-.434l0-.015.017-.111,0-.027h0l0-.01v-.007h0v.017c.01.062.02.127.031.193l0,.032.029.174.005.025c.01.062.02.125.032.189l0,.019c.012.064.024.128.037.194l0,.017.015.086,0,.025.019.084.02.1.029.132.017.079.034.15,0,.012.005.019c.021.09.041.179.064.269l.013.057.012.044.01.044.022.088.01.037.021.071.032.12.039.132v.012c.029.1.059.2.09.3l.035.112.017.051.013.042.005.017.013.035c.023.074.051.149.078.223l.025.071.015.044.014.036.022.061.022.057.044.108.017.042.051.122.012.029c.032.071.063.142.094.209l.005.01.03.068.03.059.012.025.037.073.042.083.008.015.022.044.035.061.029.054.013.02c.022.037.042.074.064.11l.022.035.01.017c.022.034.044.068.068.1l0,.007,0,.005.012.017c.02.032.042.062.066.095l.01.014.015.022.059.076.015.02.009.012c.029.034.056.068.084.1v0h0a2.952,2.952,0,0,0,.415.416l.012.01.066.054.047.039.033.025.068.051.013.01a4.757,4.757,0,0,0,.512.319l.014.008.132.069.015.008.027.012.052.027.041.019.032.017.013.007.012.005.108.051.024.01,0,0,.044.02.057.025.052.024.037.013c.052.022.1.044.157.064l.074.03c.3.117.606.22.921.314l.007,0,.184.054.01,0c.179.049.358.1.537.142l.039.008.15.037.073.017.133.03.145.032.122.025.15.03.069.014.17.034.037.007c.245.046.48.084.7.117l.01,0,.017,0Z"
				transform="translate(-1560.398 -131.479)"
				fill={tw.color(colorFans)}
			/>
		</Svg>
	);
};

export default FansReferralStarsSvg;
