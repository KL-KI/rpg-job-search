import { useState } from "react";

import InHouse from "@/app/_components/_top/_Diagnosis/_Form/InHouse/InHouse";
import Applicants from "@/app/_components/_top/_Diagnosis/_Form/Applicants/Applicants";
import FirstSectionForm from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/FirstSectionForm";
import MovingPattern from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/MovingPattern";
import PersonalityType from "@/app/_components/_top/_Diagnosis/_Form/PersonalityType/PersonalityType";

const Diagnosis = () => {
	const ANSWER_AS_STUFF = "社員・職員として解答（社内向けアンケート）";
	const ANSWER_AS_RECRUIT = "採用選考への応募者として解答（適性検査）";

	const [answerer, setAnswerer] = useState("");

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<section className='w-[90%] mx-auto max-w-screen-sm'>
			<form className='flex flex-col gap-y-4'>
				<FirstSectionForm
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
			</form>
		</section>
	);
};

export default Diagnosis;
