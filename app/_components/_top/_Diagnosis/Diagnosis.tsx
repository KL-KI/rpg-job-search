import { useState, createContext } from "react";

import InHouse from "@/app/_components/_top/_Diagnosis/_Form/InHouse/InHouse";
import Applicants from "@/app/_components/_top/_Diagnosis/_Form/Applicants/Applicants";
import FirstSectionForm from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/FirstSectionForm";
import MovingPattern from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/MovingPattern";
import PersonalityType from "@/app/_components/_top/_Diagnosis/_Form/PersonalityType/PersonalityType";

export const Schema = createContext<{ email: { min: number } } | null>(null);

const Diagnosis = () => {
	const ANSWER_AS_STUFF = "社員・職員として解答（社内向けアンケート）";
	const ANSWER_AS_RECRUIT = "採用選考への応募者として解答（適性検査）";

	const schema = {
		email: {
			min: 4,
		},
	};

	const [answerer, setAnswerer] = useState("");

	const [email, setEmail] = useState("");
	const [nameKanji, setNameKanji] = useState("");
	const [nameKatakana, setNameKatakana] = useState("");
	const [background, setBackground] = useState("");

	// const onSubmit = (data: any) => {
	// 	console.log(data);
	// };

	console.log(email, nameKanji, nameKatakana, background);

	return (
		<section className='w-[90%] mx-auto max-w-screen-sm'>
			<form className='flex flex-col gap-y-4'>
				<Schema.Provider value={schema}>
					<FirstSectionForm
						setFunctions={[setEmail, setNameKanji, setNameKatakana, setBackground]}
						answerer={answerer}
						setAnswerer={setAnswerer}
					/>
					{answerer === ANSWER_AS_STUFF && <InHouse />}
					{answerer === ANSWER_AS_RECRUIT && <Applicants />}
					<MovingPattern />
					<PersonalityType />
					<button
						type='submit'
						className='bg-black text-white h-14 rounded-sm grid place-items-center'
					>
						診断結果を見る
					</button>
				</Schema.Provider>
			</form>
		</section>
	);
};

export default Diagnosis;
