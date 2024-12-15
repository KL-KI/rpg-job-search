import { HTMLInputTypeAttribute } from "react";

interface Props {
	placeholder: string;
	type?: HTMLInputTypeAttribute;
	name: string;
}

const Input = ({ placeholder, type = "text", name }: Props) => {
	return (
		<input
			className='border-[1px] border-black py-1 px-2 rounded-sm'
			placeholder={placeholder}
			type={type}
			name={name}
		/>
	);
};

export default Input;
