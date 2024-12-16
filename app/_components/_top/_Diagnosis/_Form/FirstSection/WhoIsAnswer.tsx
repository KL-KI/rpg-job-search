import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import RadioItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioItemSpacer";
import RadioLabel from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioLabel";
import RadioSpacer from "@/app/_components/_top/_Diagnosis/_Form/Radio/RadioSpacer";
import { answerList } from "@/app/data/formData";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
	answerer: string;
	setAnswerer: Dispatch<SetStateAction<string>>;
}

const WhoIsAnswer = ({ answerer, setAnswerer }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAnswerer(e.target.value);
	};

	return (
		<FormItemSpacer>
			<Label>経緯</Label>
			<RadioSpacer direction='vertical'>
				{answerList.map((answer) => {
					return (
						<RadioItemSpacer key={answer.value}>
							<input
								name='answerer'
								type='radio'
								value={answer.value}
								checked={answer.value === answerer}
								onChange={handleChange}
							/>
							<RadioLabel key={answer.value}>{answer.value}</RadioLabel>
						</RadioItemSpacer>
					);
				})}
			</RadioSpacer>
		</FormItemSpacer>
	);
};

export default WhoIsAnswer;
