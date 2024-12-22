import RadioItem from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItem";

import { movingPatterns } from "@/app/data/formData";
import { inputNames } from "@/app/data/formSchema";

import { Dispatch, SetStateAction } from "react";

interface Props {
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

const MovingPattern = ({ setFunctions, errorMessages }: Props) => {
	const htmlForStartIndex = Object.values(inputNames).indexOf(inputNames.canTalkStranger);
	const htmlForEndIndex = Object.values(inputNames).indexOf(inputNames.gender);
	const htmlFors = Object.values(inputNames).slice(htmlForStartIndex, htmlForEndIndex + 1);

	return (
		<>
			{/* 行動パターン */}
			{movingPatterns.map((movingPattern, i) => {
				return (
					<RadioItem
						key={movingPattern.label}
						htmlFor={htmlFors[i]}
						setFunction={setFunctions[i]}
						errorMessage={errorMessages[i]}
						label={movingPattern.label}
						radios={movingPattern.radios}
						name={movingPattern.name}
					/>
				);
			})}
		</>
	);
};

export default MovingPattern;
