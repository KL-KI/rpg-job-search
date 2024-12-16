import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import { Dispatch, SetStateAction } from "react";

interface Props {
	setFunction: Dispatch<SetStateAction<string>>;
}

const Furigana = ({ setFunction }: Props) => {
	return (
		<InputItem
			setFunction={setFunction}
			label='カタカナ'
			name='furigana'
			placeholder='カタカナを入力してください'
		/>
	);
};

export default Furigana;
