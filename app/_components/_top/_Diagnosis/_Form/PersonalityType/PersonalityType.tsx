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
			<p className='text-center my-4'>あと少しで診断完了です！</p>
			<PersonalitySecond
				setFunctions={setFunctionsSecond}
				errorMessages={errorMessagesSecond}
			/>
		</>
	);
};

export default PersonalityType;
