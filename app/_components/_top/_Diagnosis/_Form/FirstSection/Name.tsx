import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";

import { Dispatch, SetStateAction } from "react";

import { inputNames } from "@/app/data/formSchema";

interface Props {
	setFunction: Dispatch<SetStateAction<string>>;
	errorMessage: string;
}

const Name = ({ setFunction, errorMessage }: Props) => {
	return (
		<InputItem
			htmlFor={inputNames.nameKanji}
			setFunction={setFunction}
			label='氏名'
			name='name'
			placeholder='氏名を入力してください'
			errorMessage={errorMessage}
		/>
	);
};

export default Name;
