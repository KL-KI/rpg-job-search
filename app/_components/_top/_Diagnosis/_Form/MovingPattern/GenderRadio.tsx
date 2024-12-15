import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";
import RadioItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItemSpacer";

interface Props {
	genderInfo: {
		label: string;
		gender: string[];
	};
}

const GenderRadio = ({ genderInfo }: Props) => {
	return (
		<FormItemSpacer>
			<Label>{genderInfo.label}</Label>
			<RadioSpacer direction='vertical'>
				{genderInfo.gender.map((g) => {
					return (
						<RadioItemSpacer key={g}>
							<input
								type='radio'
								value={g}
								name={"gender"}
							/>
							<Label>{g}</Label>
						</RadioItemSpacer>
					);
				})}
			</RadioSpacer>
		</FormItemSpacer>
	);
};

export default GenderRadio;
