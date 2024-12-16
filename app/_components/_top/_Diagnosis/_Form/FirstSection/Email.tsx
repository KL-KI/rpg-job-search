import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import { Dispatch, SetStateAction } from "react";

interface Props {
	setEmail: Dispatch<SetStateAction<string>>;
	schema: { min: number };
}

const Email = ({ setEmail, schema }: Props) => {
	console.log(schema);

	return (
		<InputItem
			label='メールアドレス'
			name='email'
			placeholder='メールアドレスを入力してください'
			type='email'
			setFunction={setEmail}
		/>
	);
};

export default Email;
