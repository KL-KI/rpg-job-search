import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";

import { industries, jobTypes, employmentStatuss, passedYear } from "@/app/data/formData";

const InHouse = () => {
	return (
		<>
			<InputItem
				label='所属の会社名（団体名）'
				name='organization'
				placeholder='所属の会社名（団体名）を入力してください'
			/>
			<SelectItem
				label='所属会社の業界'
				name='organizationIndustry'
				options={industries}
			/>
			<InputItem
				label='department'
				name='所属部署'
				placeholder='所属部署を入力してください'
			/>
			<SelectItem
				label='現在の職種'
				name='jobType'
				options={jobTypes}
			/>
			<SelectItem
				label='雇用形態'
				name='employmentStatus'
				options={employmentStatuss}
			/>
			<SelectItem
				label='入社経過年数'
				name='yearsPassed'
				options={passedYear}
			/>
			<InputItem
				label='社員番号'
				name='employeeId'
				placeholder='社員番号を入力してください'
			/>
		</>
	);
};

export default InHouse;
