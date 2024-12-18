import ErrorMessage from "@/app/_components/_top/_Diagnosis/_Form/ErrorMessage";
import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItemSpacer";
import RadioLabel from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioLabel";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";

import { personalitiesFirst } from "@/app/data/formData";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

const PersonalityFirst = ({ setFunctions, errorMessages }: Props) => {
	return (
		<>
			{personalitiesFirst.map((personality, i) => {
				const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
					setFunctions[i](e.target.value);
				};
				return (
					<FormItemSpacer key={`${personality.label}-${i}`}>
						<Label>{personality.label}</Label>
						<RadioSpacer direction='vertical'>
							{personality.radios.value.map((_, i, value) => {
								return (
									<RadioItemSpacer key={`${personality.radios.name}-${i}`}>
										<input
											id={personality.radios.personalitiesFirstLabel[i]}
											onChange={handleChange}
											type='radio'
											value={value[i]}
											name={personality.radios.name}
										/>
										<RadioLabel htmlFor={personality.radios.personalitiesFirstLabel[i]}>
											{personality.radios.personalitiesFirstLabel[i]}
										</RadioLabel>
									</RadioItemSpacer>
								);
							})}
						</RadioSpacer>
						{errorMessages[i] ? <ErrorMessage errorMessage={errorMessages[i]} /> : <></>}
					</FormItemSpacer>
				);
			})}
		</>
	);
};

export default PersonalityFirst;
