import {
	FansGap,
	FansHorizontalDivider,
	FansScreen2,
	FansView,
} from "@components/controls";
import { useAppContext } from "@context/useAppContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import VideoCallSetupStepper from "./VideoCallSetupStepper";
import VideoStepperButtons from "./VideoStepperButtons";

const FanProfileSetup = () => {
	// Define the state for currentStep and steps
	const [currentStep, setCurrentStep] = useState(0);
	const { state, dispatch } = useAppContext();
	const router = useRouter();

	// Define the steps array
	const steps = [
		{ label: "Step 1", component: Step1 },
		{ label: "Step 2", component: Step2 },
		{ label: "Step 2", component: Step3 },
	];

	const totalSteps = steps.length;

	const handleNextStep = () => {
		if (currentStep < totalSteps - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePrevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSaveFanProfile = async () => {
		router.push("/profile");
	};

	const Component = steps[currentStep].component;

	return (
		<FansScreen2 contentStyle={{ maxWidth: 670 }}>
			<FansHorizontalDivider />
			<FansView style={{ marginTop: 20 }}>
				<VideoCallSetupStepper
					currentStep={currentStep}
					steps={steps}
					setCurrentStep={setCurrentStep}
				/>
			</FansView>
			<View>
				<Component />
			</View>
			<View>
				<VideoStepperButtons
					currentStep={currentStep}
					totalSteps={totalSteps}
					handlePrevStep={handlePrevStep}
					handleNextStep={handleNextStep}
					handleEnableVideoCalls={handleSaveFanProfile}
				/>
			</View>
			<FansGap height={20} />
		</FansScreen2>
	);
};

export default FanProfileSetup;
