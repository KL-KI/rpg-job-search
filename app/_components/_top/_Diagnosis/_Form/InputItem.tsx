import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import Input from "@/app/_components/_top/_Diagnosis/_Form/Input";
import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";

import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

interface Props {
	label: string;
	name: string;
	placeholder: string;
	type?: HTMLInputTypeAttribute;
	setFunction: Dispatch<SetStateAction<string>>;
}

const InputItem = ({ label, name, placeholder, type, setFunction }: Props) => {
	return (
		<FormItemSpacer>
			<Label>{label}</Label>
			<Input
				name={name}
				placeholder={placeholder}
				type={type}
				setFunction={setFunction}
			/>
		</FormItemSpacer>
	);
};

export default InputItem;
