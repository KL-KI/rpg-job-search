import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";

import { industries, jobTypes, employmentStatuss, passedYear } from "@/app/data/formData";

import { Dispatch, SetStateAction } from "react";

import { inputNames } from "@/app/data/formSchema";

interface Props {
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

/**
 * @date 2024/12/16
 * @description 所属部署まで終わったので、その次からバリデーションの続きを設定する
 * **/

const InHouse = ({ setFunctions, errorMessages }: Props) => {
	const [
		setOrganization,
		setOrganizationIndustry,
		setDepartment,
		setEmployeeId,
		setJobType,
		setEmploymentStatus,
		setPassedYear,
	] = setFunctions;
	const [organizationErrorMessage, departmentErrorMessage] = errorMessages;
	return (
		<>
			<InputItem
				htmlFor={inputNames.organization}
				errorMessage={organizationErrorMessage}
				setFunction={setOrganization}
				label='所属の会社名（団体名）'
				name='organization'
				placeholder='所属の会社名（団体名）を入力してください'
			/>
			<SelectItem
				setFunction={setOrganizationIndustry}
				htmlFor={inputNames.organizationIndustry}
				label='所属会社の業界'
				name='organizationIndustry'
				options={industries}
			/>
			<InputItem
				htmlFor={inputNames.department}
				errorMessage={departmentErrorMessage}
				setFunction={setDepartment}
				label='department'
				name='所属部署'
				placeholder='所属部署を入力してください'
			/>
			<SelectItem
				setFunction={setJobType}
				htmlFor={inputNames.jobType}
				label='現在の職種'
				name='jobType'
				options={jobTypes}
			/>
			<SelectItem
				setFunction={setEmploymentStatus}
				htmlFor={inputNames.employmentStatus}
				label='雇用形態'
				name='employmentStatus'
				options={employmentStatuss}
			/>
			<SelectItem
				setFunction={setPassedYear}
				htmlFor={inputNames.passedYear}
				label='入社経過年数'
				name='yearsPassed'
				options={passedYear}
			/>
			<InputItem
				errorMessage=''
				htmlFor={inputNames.employeeId}
				setFunction={setEmployeeId}
				label='社員番号'
				name='employeeId'
				placeholder='社員番号を入力してください'
			/>
		</>
	);
};

export default InHouse;
