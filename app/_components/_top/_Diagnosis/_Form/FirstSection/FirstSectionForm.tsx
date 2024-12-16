import Email from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Email";
import Name from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Name";
import Furigana from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/Furigana";
import WhoIsAnswer from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/WhoIsAnswer";

import { Schema } from "@/app/_components/_top/_Diagnosis/Diagnosis";

import { useContext } from "react";

import { Dispatch, SetStateAction } from "react";

interface Props {
	answerer: string;
	setAnswerer: Dispatch<SetStateAction<string>>;
	setFunctions: Dispatch<SetStateAction<string>>[];
}

const FirstSectionForm = ({ answerer, setAnswerer, setFunctions }: Props) => {
	const [setEmail, setNameKanji, setNameKatakana, setBackground] = setFunctions;

	const { email } = useContext(Schema)!;

	return (
		<>
			<Email
				setEmail={setEmail}
				schema={email}
			/>
			{/* <Name setNameKanji={setNameKanji} />
			<Furigana setNameKatakana={setNameKatakana} />
			<WhoIsAnswer
				answerer={answerer}
				setBackground={setBackground}
				setAnswerer={setAnswerer}
			/> */}
		</>
	);
};

export default FirstSectionForm;
