import RadioItem from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItem";
import GenderRadio from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/GenderRadio";
import Birthday from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/Birthday";
import Location from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/Location";

import { movingPatterns, gendersInfo } from "@/app/data/formData";

const MovingPattern = () => {
	return (
		<>
			{/* 行動パターン */}
			{movingPatterns.map((movingPattern) => {
				return (
					<RadioItem
						key={movingPattern.label}
						label={movingPattern.label}
						radios={movingPattern.radios}
						name={movingPattern.name}
					/>
				);
			})}
			{/* 性別 */}
			<GenderRadio genderInfo={gendersInfo} />
			<Birthday />
			<Location />
		</>
	);
};

export default MovingPattern;
