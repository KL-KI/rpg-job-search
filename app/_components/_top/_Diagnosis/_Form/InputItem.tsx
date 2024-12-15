import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import Input from "@/app/_components/_top/_Diagnosis/_Form/Input";
import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";

import { HTMLInputTypeAttribute } from "react";

interface Props {
	label: string;
	name: string;
	placeholder: string;
	type?: HTMLInputTypeAttribute;
}

const InputItem = ({ label, name, placeholder, type }: Props) => {
	return (
		<FormItemSpacer>
			<Label>{label}</Label>
			<Input
				name={name}
				placeholder={placeholder}
				type={type}
			/>
		</FormItemSpacer>
	);
};

export default InputItem;
