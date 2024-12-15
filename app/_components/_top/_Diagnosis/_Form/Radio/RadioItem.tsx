import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioLabel from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioLabel";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";

interface Props {
	label: string;
	name: string;
	radios: {
		label: string[];
		value: number[];
	};
}

const RadioItem = ({ label, radios, name }: Props) => {
	return (
		<FormItemSpacer>
			<Label>{label}</Label>
			<RadioSpacer direction='horizon'>
				{radios.label.map((_, i, label) => {
					return (
						<div
							className='flex flex-col items-center justify-center'
							key={`${name}-${label[i]}`}
						>
							<input
								type='radio'
								value={radios.value[i]}
								name={name}
							/>
							<RadioLabel>{label[i]}</RadioLabel>
						</div>
					);
				})}
			</RadioSpacer>
		</FormItemSpacer>
	);
};

export default RadioItem;
