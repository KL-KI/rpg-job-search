import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
	label: string;
	options: string[] | number[];
	name: string;
	htmlFor: string;
	setFunction: Dispatch<SetStateAction<string>>;
}

const SelectItem = ({ label, options, name, htmlFor, setFunction }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFunction(e.target.value);
	};
	return (
		<FormItemSpacer>
			<Label htmlFor={htmlFor}>{label}</Label>
			<select
				onChange={handleChange}
				id={htmlFor}
				name={name}
				className='py-1 px-2'
			>
				{options.map((option) => {
					return <option key={option}>{option}</option>;
				})}
			</select>
		</FormItemSpacer>
	);
};

export default SelectItem;
