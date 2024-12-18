import PersonalityFirst from "@/app/_components/_top/_Diagnosis/_Form/PersonalityType/PersonalityFirst";
import PersonalitySecond from "@/app/_components/_top/_Diagnosis/_Form/PersonalityType/PersonalitySecond";

import { Dispatch, SetStateAction } from "react";

interface Props {
	setFunctionsFirst: Dispatch<SetStateAction<string>>[];
	errorMessagesFirst: string[];
	setFunctionsSecond: Dispatch<SetStateAction<string>>[];
	errorMessagesSecond: string[];
}

const PersonalityType = ({
	setFunctionsFirst,
	errorMessagesFirst,
	setFunctionsSecond,
	errorMessagesSecond,
}: Props) => {
	return (
		<>
			<PersonalityFirst
				setFunctions={setFunctionsFirst}
				errorMessages={errorMessagesFirst}
			/>
			<PersonalitySecond
				setFunctions={setFunctionsSecond}
				errorMessages={errorMessagesSecond}
			/>
		</>
	);
};

export default PersonalityType;
