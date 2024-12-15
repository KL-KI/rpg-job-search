import RadioItem from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItem";
import { personalitiesSecond } from "@/app/data/formData";

const PersonalitySecond = () => {
	return (
		<>
			{personalitiesSecond.map((personality) => {
				return (
					<RadioItem
						key={personality.label}
						label={personality.label}
						radios={personality.radios}
						name={personality.name}
					/>
				);
			})}
		</>
	);
};

export default PersonalitySecond;
