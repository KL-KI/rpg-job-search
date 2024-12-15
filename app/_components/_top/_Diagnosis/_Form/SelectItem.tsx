import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";

interface Props {
	label: string;
	options: string[] | number[];
	name: string;
}

const SelectItem = ({ label, options, name }: Props) => {
	return (
		<FormItemSpacer>
			<Label>{label}</Label>
			<select
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
