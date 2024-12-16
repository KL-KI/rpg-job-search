import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

interface Props {
	placeholder: string;
	type?: HTMLInputTypeAttribute;
	name: string;
	setFunction: Dispatch<SetStateAction<string>>;
}

const Input = ({ placeholder, type = "text", name, setFunction }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFunction(e.target.value);
	};
	return (
		<input
			className='border-[1px] border-black py-1 px-2 rounded-sm'
			placeholder={placeholder}
			type={type}
			name={name}
			onChange={handleChange}
		/>
	);
};

export default Input;
