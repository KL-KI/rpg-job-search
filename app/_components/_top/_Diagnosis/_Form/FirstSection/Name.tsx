import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";

import { Dispatch, SetStateAction } from "react";

interface Props {
	setFunction: Dispatch<SetStateAction<string>>;
}

const Name = ({ setFunction }: Props) => {
	return (
		<InputItem
			setFunction={setFunction}
			label='氏名'
			name='name'
			placeholder='氏名を入力してください'
		/>
	);
};

export default Name;
