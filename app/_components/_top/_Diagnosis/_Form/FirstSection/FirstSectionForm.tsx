import Email from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Email";
import Name from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Name";
import Furigana from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Furigana";
import WhoIsAnswer from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/WhoIsAnswer";

import { Dispatch, SetStateAction } from "react";

interface Props {
	answerer: string;
	setAnswerer: Dispatch<SetStateAction<string>>;
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

const FirstSectionForm = ({ answerer, setAnswerer, setFunctions, errorMessages }: Props) => {
	const [setEmail, setNameKanji, setNameKatakana] = setFunctions;
	const [
		emailErrorMessage,
		nameKanjiErrorMessage,
		nameKatakanaErrorMessage,
		backgroundErrorMessage,
	] = errorMessages;

	return (
		<>
			<Email
				setEmail={setEmail}
				errorMessage={emailErrorMessage}
			/>
			<Name
				setFunction={setNameKanji}
				errorMessage={nameKanjiErrorMessage}
			/>
			<Furigana
				setFunction={setNameKatakana}
				errorMessage={nameKatakanaErrorMessage}
			/>
			<WhoIsAnswer
				answerer={answerer}
				setAnswerer={setAnswerer}
				errorMessage={backgroundErrorMessage}
			/>
		</>
	);
};

export default FirstSectionForm;
