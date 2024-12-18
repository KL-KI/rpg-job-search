import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import Input from "@/app/_components/_top/_Diagnosis/_Form/Input";
import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";

import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";
import ErrorMessage from "@/app/_components/_top/_Diagnosis/_Form/ErrorMessage";

interface Props {
	label: string;
	name: string;
	placeholder: string;
	type?: HTMLInputTypeAttribute;
	setFunction: Dispatch<SetStateAction<string>>;
	errorMessage: string;
	htmlFor: string;
}

const InputItem = ({
	label,
	name,
	placeholder,
	type,
	setFunction,
	errorMessage,
	htmlFor,
}: Props) => {
	return (
		<FormItemSpacer>
			<Label htmlFor={htmlFor}>{label}</Label>
			<Input
				htmlFor={htmlFor}
				name={name}
				placeholder={placeholder}
				type={type}
				setFunction={setFunction}
			/>
			{errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : null}
		</FormItemSpacer>
	);
};

export default InputItem;
