import Email from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Email";
import Name from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Name";
import Furigana from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Furigana";
import WhoIsAnswer from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/WhoIsAnswer";

import { Dispatch, SetStateAction } from "react";

interface Props {
	answerer: string;
	setAnswerer: Dispatch<SetStateAction<string>>;
}

const FirstSectionForm = ({ answerer, setAnswerer }: Props) => {
	return (
		<>
			<Email />
			<Name />
			<Furigana />
			<WhoIsAnswer
				answerer={answerer}
				setAnswerer={setAnswerer}
			/>
		</>
	);
};

export default FirstSectionForm;
