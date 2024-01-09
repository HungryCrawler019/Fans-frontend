import React from "react";
import {
	Svg,
	Defs,
	Path,
	Stop,
	LinearGradient,
	SvgProps,
} from "react-native-svg";

interface FansSvgProps extends SvgProps {
	size?: number;
}

const YellowGemSvg = ({ ...props }: FansSvgProps) => (
	<Svg
		width={props.width ?? props.size}
		height={props.height ?? props.size}
		viewBox="0 0 41.213 38.201"
		{...props}
	>
		<Defs>
			<LinearGradient
				id="linear-gradient"
				x1="-0.111"
				y1="0.895"
				x2="1.121"
				y2="0.122"
				gradientUnits="objectBoundingBox"
			>
				<Stop offset="0.054" stopColor="#fa7142" />
				<Stop offset="0.625" stopColor="#f98c28" />
				<Stop offset="0.915" stopColor="#fcce59" />
			</LinearGradient>
		</Defs>
		<Path
			d="M-48.884-54.919c-4.495-3.7-8.992-7.306-13.408-10.82l-.066.02-20.731,6.1-.281.082-6.7,13.392c3.495,2.592,11.363,8.4,25.386,18.61,4.392-7.185,12.267-21.034,15.827-27.326C-48.867-54.88-48.866-54.9-48.884-54.919Zm-17.182,6.75h-.006l-.057.008-.063.01H-66.2l-.066.011h0l-.169.026-.11.019-.039.007-.2.035-.079.014-.051.01-.049.009-.026,0-.232.045-.01,0-.282.058-.05.011-.023.005-.043.01-.253.057-.014,0-.129.03-.177.042-.059.015-.015,0-.069.018-.125.032-.023.007c-.111.03-.222.059-.334.091l-.061.018-.108.032-.124.038-.122.036-.07.022-.1.034-.152.05-.086.029-.03.011c-.249.086-.492.179-.727.278l-.021.009-.178.078-.034.015c-.064.029-.127.058-.189.089h0c-.064.031-.127.063-.189.095l-.033.018-.143.076-.049.027-.132.076-.039.023c-.054.033-.108.067-.161.1l-.026.017-.126.086-.047.033-.1.077-.042.033c-.045.036-.09.073-.133.11h0a3.477,3.477,0,0,0-.488.487h0l0,0-.056.067c-.016.02-.033.039-.049.061l-.009.011c-.013.016-.025.033-.038.05s-.039.051-.059.078l-.017.024-.042.061-.043.061-.023.036,0,0-.066.1-.035.056-.062.1-.034.06-.061.109-.005.011c-.045.081-.087.163-.129.248-.011.024-.023.048-.036.073l-.05.106c-.014.028-.026.056-.039.085l-.046.1-.045.1c-.016.037-.032.073-.047.111-.023.054-.045.108-.066.163l-.032.082-.049.129-.03.079-.053.149-.02.059q-.076.218-.145.44l-.011.036c-.02.067-.041.133-.061.2l-.008.027q-.076.256-.143.514l-.012.043-.008.03c-.03.116-.058.231-.086.346l-.007.027-.008.033v0l0,.005v0c-.023.1-.045.191-.066.287l0,.006,0,.008-.023.107,0,.017,0,.011c-.054.251-.1.5-.144.734l0,.018,0,.014c-.032.175-.06.345-.085.508l0,.02c-.007.044-.014.088-.02.131l0,.03h0l0,.013v-.013c-.011-.073-.023-.149-.035-.225l-.006-.038c-.011-.067-.022-.134-.033-.2l-.005-.031c-.012-.073-.026-.146-.039-.221l0-.023c-.014-.075-.028-.151-.042-.227l0-.019c-.007-.034-.013-.068-.02-.1l-.006-.03c-.006-.032-.014-.065-.02-.1s-.017-.081-.026-.123-.022-.1-.033-.156l-.02-.092c-.013-.059-.026-.117-.04-.176l0-.015L-75-41.392c-.024-.1-.049-.21-.076-.315-.005-.023-.01-.045-.016-.067l-.014-.052-.013-.051-.026-.1-.012-.044-.022-.084c-.012-.047-.026-.094-.039-.141s-.029-.1-.045-.155l0-.005,0-.007c-.034-.116-.068-.233-.1-.349-.014-.044-.029-.087-.042-.131-.007-.019-.012-.039-.019-.058L-75.442-43l-.007-.019-.014-.042c-.03-.089-.061-.175-.092-.261l-.029-.085-.019-.051-.015-.041c-.008-.023-.017-.048-.026-.071s-.017-.045-.027-.067l-.05-.128-.02-.049-.059-.143L-75.815-44c-.036-.083-.073-.165-.11-.246l-.005-.011c-.012-.026-.024-.054-.037-.079L-76-44.4l-.014-.03-.043-.085-.05-.1-.01-.019-.027-.051c-.014-.024-.027-.048-.04-.072s-.023-.042-.035-.062l-.015-.026c-.025-.043-.051-.085-.076-.128l-.024-.04-.013-.02c-.026-.041-.051-.082-.078-.121l0-.007,0-.006-.013-.019-.077-.111-.012-.017-.019-.024c-.023-.031-.045-.061-.069-.091l-.018-.023-.011-.013c-.033-.041-.065-.08-.1-.118h0a3.365,3.365,0,0,0-.488-.487l-.014-.013-.077-.064-.056-.044-.039-.031-.079-.059-.017-.012a5.67,5.67,0,0,0-.6-.375l-.016-.009-.155-.082-.017-.009-.031-.015-.062-.03-.046-.023-.039-.019-.015-.008-.023-.011-.118-.054-.027-.013-.006,0-.053-.023-.066-.029-.064-.028-.042-.017c-.061-.026-.123-.051-.185-.076l-.088-.035c-.347-.135-.711-.258-1.079-.368l-.007,0-.216-.064-.013,0c-.21-.06-.42-.115-.629-.167l-.047-.011-.176-.042-.085-.02-.157-.036-.172-.038-.141-.03-.175-.036-.081-.017-.2-.039-.043-.008c-.287-.054-.563-.1-.819-.138l-.011,0-.02,0,.014,0h.006l.056-.008.063-.009.008,0,.066-.01h0l.168-.027.11-.018.04-.007.2-.036.079-.014.051-.009.049-.009.026-.005.232-.045.008,0,.283-.059.051-.011.023,0,.044-.01.253-.057.015,0,.129-.031.177-.042.059-.015.015,0,.069-.017.125-.033.023-.006c.111-.029.222-.06.334-.092l.061-.017.108-.033.124-.037.122-.037.069-.022.1-.033.153-.051.086-.028.03-.011c.249-.087.492-.18.727-.279l.021-.009.178-.077.034-.015.189-.088,0,0,.189-.095.033-.017.143-.076.049-.027.132-.077.039-.023.161-.1.026-.018c.043-.028.085-.057.126-.085l.046-.033c.036-.026.07-.051.1-.078l.042-.033c.046-.036.091-.073.134-.11h0a3.372,3.372,0,0,0,.487-.488h0l0,0,.055-.067.05-.06.008-.011.039-.051.059-.077.017-.025.043-.061c.014-.02.029-.04.042-.061l.023-.036,0,0c.022-.033.044-.068.065-.1l.036-.056.061-.1c.012-.02.023-.039.034-.06.021-.036.042-.072.061-.108l.006-.011c.044-.081.087-.164.129-.249l.036-.073.05-.105c.013-.029.026-.057.039-.085l.045-.1.045-.1c.016-.037.032-.075.047-.113.023-.053.045-.107.066-.162l.032-.082c.017-.042.033-.085.049-.129l.029-.079c.018-.049.036-.1.054-.148l.02-.059c.051-.145.1-.293.145-.44l.011-.037c.02-.067.041-.132.061-.2l.008-.027c.051-.171.1-.343.143-.514l.012-.043.008-.03q.044-.175.086-.347l.007-.026.008-.033v-.005l0-.005v0c.023-.1.045-.191.065-.286l0-.006,0-.008.023-.106,0-.017,0-.011c.054-.251.1-.5.145-.734l0-.019,0-.014c.031-.175.06-.346.085-.509l0-.019c.007-.045.013-.088.02-.132l0-.03h0l0-.012v.012c.011.073.022.149.034.225l.007.038c.011.067.021.135.033.2l.005.03c.012.073.025.147.039.222l0,.023c.014.075.028.151.042.227l0,.02c.006.034.012.067.019.1l.007.03c.006.033.013.066.02.1s.017.082.026.123.022.1.033.156l.02.092c.013.058.026.117.039.176l0,.015.005.022c.024.1.049.209.075.315.006.022.011.044.017.067l.014.053.012.051.026.1.012.044.023.085c.012.047.025.093.039.14s.029.1.044.155l0,.006,0,.007q.05.175.1.349c.014.043.029.086.042.13l.018.058.017.051.006.018.015.042c.03.088.061.174.092.261.01.028.019.057.03.084l.019.052.015.041.026.07c.009.023.018.045.026.067.017.043.033.086.051.128l.02.049c.02.048.039.1.059.143l.015.034c.036.083.073.166.11.246l.005.012.036.079c.011.024.023.047.035.07l.014.029.043.085.05.1.01.018.027.051c.013.024.026.048.04.072l.035.063.015.025c.025.043.05.086.076.128l.025.041.013.02c.026.041.051.081.078.12l0,.008,0,.006.014.019.077.11.012.017.019.025c.023.03.045.061.069.09l.018.024.011.013q.048.06.1.118h0a3.368,3.368,0,0,0,.487.488l.015.012.076.065.056.044.039.03.079.059.017.013a5.6,5.6,0,0,0,.6.374l.016.009c.051.028.1.055.155.082l.017.009.031.016.061.029.047.023.039.02.015.007.014.007.126.059.027.012.006,0,.053.023.066.029.063.027.042.017.186.076.087.035c.348.136.712.258,1.079.368l.007,0,.216.063.013,0c.21.059.421.115.629.166l.047.011.176.042.084.02.158.036.17.037.143.03.175.036.082.016.2.039.044.008c.287.054.563.1.818.137l.012,0,.02,0Zm4.466-8.5h0l-.03,0-.033.005h0l-.036.006h0l-.089.014-.058.01-.021,0-.106.018-.042.008-.027.005-.026,0-.014,0-.123.023-.005,0-.15.031-.026.005-.012,0-.023.005-.134.03-.008,0-.068.017-.094.022-.031.008-.008,0-.036.009-.067.017-.012,0-.177.048-.032.009-.057.017-.066.02-.065.02-.036.011-.054.018-.081.026-.046.015-.016.006c-.132.045-.261.1-.385.147l-.011,0-.095.042-.018.008-.1.046h0c-.034.017-.068.033-.1.051l-.018.009-.076.041-.026.014c-.024.013-.047.026-.07.041l-.02.011-.085.054-.014.01-.067.045-.024.017-.055.042-.023.017c-.024.019-.048.039-.07.058h0a1.816,1.816,0,0,0-.259.259h0l0,0-.03.036-.026.032,0,.006-.02.026-.031.041-.009.014-.023.032-.023.033-.012.019,0,0-.034.054-.019.029-.033.054-.018.032c-.011.019-.022.039-.033.057l0,.006c-.023.043-.046.087-.069.132l-.019.038-.026.057-.02.045-.024.054-.024.055-.025.059c-.012.028-.023.057-.035.086l-.017.043-.026.069-.015.042-.029.079-.011.032c-.026.076-.052.155-.077.233l-.006.02-.032.106,0,.014c-.026.091-.051.182-.076.273l-.006.023,0,.016c-.016.061-.032.123-.046.184l0,.014,0,.017v.008c-.012.051-.023.1-.035.152v.008l-.013.056,0,.01,0,.006c-.029.133-.054.263-.076.389l0,.01,0,.008q-.025.14-.045.27l0,.01-.011.07,0,.016h0v0c-.005-.039-.012-.079-.018-.12l0-.02-.018-.108,0-.016c-.006-.039-.013-.078-.02-.117l0-.013q-.01-.059-.023-.12l0-.01-.011-.054,0-.016-.011-.052-.014-.065-.017-.082-.011-.048c-.007-.031-.014-.062-.021-.094l0-.008,0-.011c-.013-.055-.026-.111-.04-.166l-.008-.036-.008-.028-.007-.027-.014-.054-.007-.023-.011-.045-.02-.074-.023-.082v0l0,0c-.017-.061-.036-.123-.055-.185-.007-.023-.015-.046-.023-.069l-.01-.031-.008-.027,0-.01-.008-.023c-.016-.046-.032-.092-.048-.138l-.016-.045-.01-.027-.008-.022-.014-.037-.014-.036c-.008-.023-.017-.045-.026-.067l-.011-.026-.031-.076-.008-.018c-.019-.044-.039-.088-.058-.13l0-.006-.02-.042-.018-.037-.008-.015-.023-.045-.026-.051-.005-.01-.014-.027-.022-.038-.018-.033L-67-54.9c-.013-.023-.026-.045-.04-.067l-.013-.022L-67.055-55c-.014-.021-.027-.043-.042-.064l0,0,0,0-.007-.01-.041-.059-.007-.009-.01-.013-.036-.048-.01-.013-.005-.007-.052-.063h0a1.807,1.807,0,0,0-.259-.259l-.008-.007-.04-.034-.03-.023-.02-.016-.042-.031-.009-.007a2.819,2.819,0,0,0-.318-.2L-68-55.876l-.082-.043-.009,0-.017-.008-.033-.016-.025-.012-.02-.011-.008,0-.012-.005-.062-.029-.015-.007,0,0-.028-.012-.035-.015-.033-.014-.023-.01-.1-.039-.046-.019c-.185-.072-.377-.137-.573-.2l0,0-.115-.033-.007,0q-.167-.048-.334-.088l-.025-.006-.093-.023-.045-.011-.083-.019-.092-.02L-70-56.541l-.092-.019-.043-.008-.107-.02-.023,0c-.152-.028-.3-.052-.434-.073H-70.7l-.011,0h.011l.029,0,.033-.005h0l.035-.005h0l.089-.014.058-.01.022,0,.105-.018.042-.008.027-.005.026-.005.014,0,.123-.024h0l.15-.031.026-.006.013,0,.023-.005.135-.03.008,0,.068-.017.094-.023.031-.008.008,0,.036-.009.067-.017.012,0,.177-.048.033-.01.057-.017.067-.02.064-.02.036-.012.054-.017.08-.026.046-.015.016-.006q.2-.069.386-.148l.011-.005.094-.041.018-.008.1-.047h0q.051-.024.1-.05l.018-.009.076-.041.026-.014.07-.041.02-.012.085-.053.014-.01.067-.045.025-.018.054-.041.023-.017c.024-.019.048-.039.071-.058h0a1.815,1.815,0,0,0,.259-.259h0l0,0,.029-.036.026-.032,0-.006.02-.026c.011-.014.021-.027.031-.042l.009-.013.023-.032.023-.033.012-.018v0l.035-.054.018-.03.033-.055.018-.031.033-.058,0-.005c.023-.043.046-.087.068-.132l.019-.039.026-.056.021-.045.024-.054.023-.055.026-.059.034-.086.017-.043c.008-.023.017-.045.026-.069l.016-.042.028-.079.011-.032c.026-.077.052-.155.076-.234l.006-.019c.011-.036.022-.07.032-.106l0-.014c.026-.091.052-.182.076-.273l.007-.023,0-.016c.016-.062.031-.123.045-.185l0-.014,0-.017v-.008c.012-.051.023-.1.035-.152v-.008l.012-.056,0-.01v-.006c.029-.133.054-.263.077-.389l0-.01,0-.008q.025-.14.045-.27l0-.01.011-.07,0-.016h0v0c.006.039.012.079.018.12l0,.02c.005.036.011.071.017.108l0,.016.02.117,0,.012.023.12,0,.011.011.054,0,.016.011.052.013.065.018.083.011.048.02.094,0,.008,0,.012c.013.055.026.11.04.166l.008.036.008.028.007.027.014.054.006.023.012.045.02.074c.008.027.015.054.023.082v.006c.018.062.036.124.055.185l.023.069.01.031.008.027,0,.01.008.023.048.138.016.045.011.027.008.021.014.038.014.036.026.068.011.026.032.076.008.018c.019.044.039.087.058.13l0,.006.019.042.018.037.008.015.023.045.026.051.005.01.014.027.021.038.018.033.008.013c.013.023.026.046.04.068l.013.022.007.01.042.064,0,0,0,0,.007.011c.014.02.027.039.042.058l.006.009.01.014.036.048.01.013.006.007.051.063h0a1.782,1.782,0,0,0,.258.259l.008.007.041.034.029.023.02.016.042.031.009.007a3,3,0,0,0,.318.2l.008,0,.082.044.009,0,.017.008.033.016.025.012.02.011.008,0,.008,0,.067.032.014.007h0l.028.012.035.016.034.014.022.009.1.04.046.019c.185.072.377.137.573.2h0l.114.034.007,0c.111.032.223.061.334.089l.025.006.094.023.045.011.083.019.091.02.076.016.093.02.043.008.107.02.023,0c.153.028.3.052.434.073h.01Z"
			transform="translate(90.065 65.739)"
			fill="url(#linear-gradient)"
		/>
	</Svg>
);

export default YellowGemSvg;
