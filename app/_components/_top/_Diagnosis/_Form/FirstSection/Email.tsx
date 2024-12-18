import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import { Dispatch, SetStateAction } from "react";

import { inputNames } from "@/app/data/formSchema";

interface Props {
	setEmail: Dispatch<SetStateAction<string>>;
	errorMessage: string;
}

const Email = ({ setEmail, errorMessage }: Props) => {
	return (
		<InputItem
			htmlFor={inputNames.email}
			label='メールアドレス'
			name='email'
			placeholder='メールアドレスを入力してください'
			type='email'
			setFunction={setEmail}
			errorMessage={errorMessage}
		/>
	);
};

export default Email;
