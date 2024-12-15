import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";

const Email = () => {
	return (
		<InputItem
			label='メールアドレス'
			name='email'
			placeholder='メールアドレスを入力してください'
			type='email'
		/>
	);
};

export default Email;
