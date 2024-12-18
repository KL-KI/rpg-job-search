import ErrorMessage from "@/app/_components/_top/_Diagnosis/_Form/ErrorMessage";
import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioLabel from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioLabel";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
	htmlFor: string;
	setFunction: Dispatch<SetStateAction<string>>;
	errorMessage: string;
	label: string;
	name: string;
	radios: {
		label: string[];
		value: number[];
	};
}

const RadioItem = ({ label, radios, name, htmlFor, setFunction, errorMessage }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFunction(e.target.value);
	};
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
								id={`${htmlFor}-${i}`}
								value={radios.value[i]}
								name={name}
								onChange={handleChange}
							/>
							<RadioLabel htmlFor={`${htmlFor}-${i}`}>{label[i]}</RadioLabel>
						</div>
					);
				})}
			</RadioSpacer>
			{errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <></>}
		</FormItemSpacer>
	);
};

export default RadioItem;
