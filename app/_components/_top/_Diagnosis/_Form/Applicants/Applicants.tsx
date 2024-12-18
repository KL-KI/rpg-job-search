import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";

import { industries, jobTypes, currentEmploymentStatuss } from "@/app/data/formData";
import { inputNames } from "@/app/data/formSchema";

import { Dispatch, SetStateAction } from "react";

interface Props {
	setFunctions: Dispatch<SetStateAction<string>>[];
	errorMessages: string[];
}

const Applicants = ({ setFunctions, errorMessages }: Props) => {
	const [
		setApplyOrganization,
		setApplyOrganizationIndustry,
		setApplyJobType,
		setApplyEmploymentStatus,
		setPhoneNumber,
	] = setFunctions;
	const [applyOrganizationErrorMessage, phoneNumberErrorMessage] = errorMessages;

	return (
		<>
			<InputItem
				errorMessage={applyOrganizationErrorMessage}
				htmlFor={inputNames.applyOrganization}
				setFunction={setApplyOrganization}
				label='応募企業名（団体名）'
				name='applicantCompany'
				placeholder='応募企業名（団体名）を入力してください'
			/>
			<SelectItem
				htmlFor={inputNames.applyOrganizationIndustry}
				setFunction={setApplyOrganizationIndustry}
				label='応募企業の業界'
				name='applicantCompanyIndustry'
				options={industries}
			/>
			<SelectItem
				htmlFor={inputNames.applyJobType}
				setFunction={setApplyJobType}
				label='応募職種'
				name='applicantJobType'
				options={jobTypes}
			/>
			<SelectItem
				htmlFor={inputNames.applyEmploymentStatus}
				setFunction={setApplyEmploymentStatus}
				label='雇用状況'
				name='currentEmploymentStatus'
				options={currentEmploymentStatuss}
			/>
			<InputItem
				errorMessage={phoneNumberErrorMessage}
				htmlFor={inputNames.phoneNumber}
				setFunction={setPhoneNumber}
				label='携帯電話番号'
				name='phoneNumber'
				placeholder='携帯電話番号を入力してください'
				type='tel'
			/>
		</>
	);
};

export default Applicants;
