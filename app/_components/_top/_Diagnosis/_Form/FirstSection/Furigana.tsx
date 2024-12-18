import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";

import { Dispatch, SetStateAction } from "react";

import { inputNames } from "@/app/data/formSchema";

interface Props {
	setFunction: Dispatch<SetStateAction<string>>;
	errorMessage: string;
}

const Furigana = ({ setFunction, errorMessage }: Props) => {
	return (
		<InputItem
			htmlFor={inputNames.nameKatakana}
			setFunction={setFunction}
			label='カタカナ'
			name='furigana'
			placeholder='カタカナを入力してください'
			errorMessage={errorMessage}
		/>
	);
};

export default Furigana;
