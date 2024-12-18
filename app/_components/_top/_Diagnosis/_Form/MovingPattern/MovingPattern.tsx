import RadioItem from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItem";
import GenderRadio from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/GenderRadio";
import Birthday from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/Birthday";
import Location from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/Location";

import { movingPatterns, gendersInfo } from "@/app/data/formData";
import { inputNames } from "@/app/data/formSchema";

import { Dispatch, SetStateAction } from "react";

interface Props {
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
	setGender: Dispatch<SetStateAction<string>>;
	genderErrorMessage: string;
	setBirthYear: Dispatch<SetStateAction<string>>;
	setBirthMonth: Dispatch<SetStateAction<string>>;
	setBirthDay: Dispatch<SetStateAction<string>>;
	setAddress: Dispatch<SetStateAction<string>>;
}

const MovingPattern = ({
	setFunctions,
	errorMessages,
	setGender,
	genderErrorMessage,
	setBirthYear,
	setBirthMonth,
	setBirthDay,
	setAddress,
}: Props) => {
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
			{/* 性別 */}
			<GenderRadio
				errorMessage={genderErrorMessage}
				setFunction={setGender}
				htmlFor={inputNames.gender}
				genderInfo={gendersInfo}
			/>
			<Birthday
				setBirthYear={setBirthYear}
				setBirthMonth={setBirthMonth}
				setBirthDay={setBirthDay}
				birthYearHtmlFor={inputNames.birthYear}
				birthMonthHtmlFor={inputNames.birthMonth}
				birthDayHtmlFor={inputNames.birthDay}
			/>
			<Location setAddress={setAddress} />
		</>
	);
};

export default MovingPattern;
