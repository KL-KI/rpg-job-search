import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItemSpacer";
import RadioLabel from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioLabel";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";
import { personalitiesFirst } from "@/app/data/formData";

const PersonalityFirst = () => {
	return (
		<>
			{personalitiesFirst.map((personality, i) => {
				return (
					<FormItemSpacer key={`${personality.label}-${i}`}>
						<Label>{personality.label}</Label>
						<RadioSpacer direction='vertical'>
							{personality.radios.value.map((_, i, value) => {
								return (
									<RadioItemSpacer key={`${personality.radios.name}-${i}`}>
										<input
											type='radio'
											value={value[i]}
											name={personality.radios.name}
										/>
										<RadioLabel>{personality.radios.personalitiesFirstLabel[i]}</RadioLabel>
									</RadioItemSpacer>
								);
							})}
						</RadioSpacer>
					</FormItemSpacer>
				);
			})}
		</>
	);
};

export default PersonalityFirst;
