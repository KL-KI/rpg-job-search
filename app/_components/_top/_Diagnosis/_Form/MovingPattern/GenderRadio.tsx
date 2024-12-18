import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";
import RadioItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItemSpacer";
import RadioLabel from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioLabel";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import ErrorMessage from "@/app/_components/_top/_Diagnosis/_Form/ErrorMessage";

interface Props {
	genderInfo: {
		label: string;
		gender: string[];
	};
	setFunction: Dispatch<SetStateAction<string>>;
	htmlFor: string;
	errorMessage: string;
}

const GenderRadio = ({ genderInfo, htmlFor, setFunction, errorMessage }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFunction(e.target.value);
	};
	return (
		<FormItemSpacer>
			<Label>{genderInfo.label}</Label>
			<RadioSpacer direction='vertical'>
				{genderInfo.gender.map((g, i) => {
					return (
						<RadioItemSpacer key={g}>
							<input
								id={`${htmlFor}-${i}`}
								onChange={handleChange}
								type='radio'
								value={g}
								name={"gender"}
							/>
							<RadioLabel htmlFor={`${htmlFor}-${i}`}>{g}</RadioLabel>
						</RadioItemSpacer>
					);
				})}
			</RadioSpacer>
			{errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <></>}
		</FormItemSpacer>
	);
};

export default GenderRadio;
