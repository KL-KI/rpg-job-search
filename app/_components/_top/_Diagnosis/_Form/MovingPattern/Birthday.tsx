import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";
import { generateBirthdayInfo } from "@/app/data/formData";

const Birthday = () => {
	const birthdayInfo = generateBirthdayInfo();

	return (
		<FormItemSpacer>
			<Label>生年月日</Label>
			<div className='flex items-center'>
				<SelectItem
					label='年'
					name='birthday-yaer'
					options={birthdayInfo.year}
				/>
				<SelectItem
					label='月'
					name='birthday-month'
					options={birthdayInfo.month}
				/>
				<SelectItem
					label='日'
					name='birthday-day'
					options={birthdayInfo.day}
				/>
			</div>
		</FormItemSpacer>
	);
};

export default Birthday;
