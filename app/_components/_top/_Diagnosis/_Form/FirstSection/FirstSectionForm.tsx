import Email from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Email";
import Name from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Name";
import Furigana from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Furigana";
import WhoIsAnswer from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/WhoIsAnswer";
import Location from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/Location";
import Birthday from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/Birthday";
import GenderRadio from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/GenderRadio";

import { Dispatch, SetStateAction } from "react";
import { gendersInfo } from "@/app/data/formData";
import { inputNames } from "@/app/data/formSchema";

interface Props {
	answerer: string;
	setAnswerer: Dispatch<SetStateAction<string>>;
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

const FirstSectionForm = ({ answerer, setAnswerer, setFunctions, errorMessages }: Props) => {
	const [
		setEmail,
		setNameKanji,
		setNameKatakana,
		setGender,
		setBirthYear,
		setBirthMonth,
		setBirthDay,
		setAddress,
	] = setFunctions;
	const [
		emailErrorMessage,
		nameKanjiErrorMessage,
		nameKatakanaErrorMessage,
		backgroundErrorMessage,
		genderErrorMessage,
	] = errorMessages;

	return (
		<>
			<Name
				setFunction={setNameKanji}
				errorMessage={nameKanjiErrorMessage}
			/>
			<Furigana
				setFunction={setNameKatakana}
				errorMessage={nameKatakanaErrorMessage}
			/>
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
			<Email
				setEmail={setEmail}
				errorMessage={emailErrorMessage}
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
