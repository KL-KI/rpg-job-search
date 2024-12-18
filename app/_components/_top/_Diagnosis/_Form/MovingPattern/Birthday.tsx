import FormItemSpacer from "@/app/_components/_top/_Diagnosis/_Form/FormItemSpacer";
import Label from "@/app/_components/_top/_Diagnosis/_Form/Label";
import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";

import { generateBirthdayInfo } from "@/app/data/formData";
import { Dispatch, SetStateAction } from "react";

interface Props {
	setBirthYear: Dispatch<SetStateAction<string>>;
	setBirthMonth: Dispatch<SetStateAction<string>>;
	setBirthDay: Dispatch<SetStateAction<string>>;
	birthYearHtmlFor: string;
	birthMonthHtmlFor: string;
	birthDayHtmlFor: string;
}

const Birthday = ({
	setBirthYear,
	setBirthMonth,
	setBirthDay,
	birthYearHtmlFor,
	birthMonthHtmlFor,
	birthDayHtmlFor,
}: Props) => {
	const birthdayInfo = generateBirthdayInfo();

	return (
		<FormItemSpacer>
			<Label>生年月日</Label>
			<div className='flex items-center'>
				<SelectItem
					setFunction={setBirthYear}
					htmlFor={birthYearHtmlFor}
					label='年'
					name='birthday-yaer'
					options={birthdayInfo.year}
				/>
				<SelectItem
					setFunction={setBirthMonth}
					htmlFor={birthMonthHtmlFor}
					label='月'
					name='birthday-month'
					options={birthdayInfo.month}
				/>
				<SelectItem
					setFunction={setBirthDay}
					htmlFor={birthDayHtmlFor}
					label='日'
					name='birthday-day'
					options={birthdayInfo.day}
				/>
			</div>
		</FormItemSpacer>
	);
};

export default Birthday;
