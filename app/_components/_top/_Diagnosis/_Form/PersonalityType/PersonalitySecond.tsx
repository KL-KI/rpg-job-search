import RadioItem from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItem";

import { personalitiesSecond } from "@/app/data/formData";

import { Dispatch, SetStateAction } from "react";

import { inputNames } from "@/app/data/formSchema";

interface Props {
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

const PersonalitySecond = ({ setFunctions, errorMessages }: Props) => {
	const {
		imagineAchieveGoal,
		focusPreventingBadThings,
		focusAccomplishInFuture,
		thinkPreventFailure,
		thinkMyTypeIsEffortToDream,
		worryDoNotResponsibilitiesRole,
		imagineBadThingsToMe,
		focusAchieveGoodResult,
		aimAchieveDream,
		thinkAchieveGoodResult,
		thinkKindOfPersonInFuture,
		worryWillNotAchieveNumericalGoal,
		imagineWishesComingTrue,
		focusAvoidingFailure,
		thinkKindOfPersonHateBecomeInFuture,
		thinkImportantGainsThanAvoidingLosses,
	} = inputNames;

	const htmlForObj = {
		imagineAchieveGoal,
		focusPreventingBadThings,
		focusAccomplishInFuture,
		thinkPreventFailure,
		thinkMyTypeIsEffortToDream,
		worryDoNotResponsibilitiesRole,
		imagineBadThingsToMe,
		focusAchieveGoodResult,
		aimAchieveDream,
		thinkAchieveGoodResult,
		thinkKindOfPersonInFuture,
		worryWillNotAchieveNumericalGoal,
		imagineWishesComingTrue,
		focusAvoidingFailure,
		thinkKindOfPersonHateBecomeInFuture,
		thinkImportantGainsThanAvoidingLosses,
	};

	const htmlFors = Object.values(htmlForObj).map((value) => {
		return value;
	});

	return (
		<>
			{personalitiesSecond.map((personality, i) => {
				return (
					<RadioItem
						setFunction={setFunctions[i]}
						htmlFor={htmlFors[i]}
						errorMessage={errorMessages[i]}
						key={personality.label}
						label={personality.label}
						radios={personality.radios}
						name={personality.name}
					/>
				);
			})}
		</>
	);
};

export default PersonalitySecond;
