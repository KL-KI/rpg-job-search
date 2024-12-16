import InputItem from "@/app/_components/_top/_Diagnosis/_Form/InputItem";
import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";
import { industries, jobTypes, currentEmploymentStatuss } from "@/app/data/formData";

import { useState } from "react";

const Applicants = () => {
	const [applicantCompany, setApplicantCompany] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	console.log(applicantCompany, phoneNumber);

	return (
		<>
			<InputItem
				setFunction={setApplicantCompany}
				label='応募企業名（団体名）'
				name='applicantCompany'
				placeholder='応募企業名（団体名）を入力してください'
			/>
			<SelectItem
				label='応募企業の業界'
				name='applicantCompanyIndustry'
				options={industries}
			/>
			<SelectItem
				label='応募職種'
				name='applicantJobType'
				options={jobTypes}
			/>
			<SelectItem
				label='雇用状況'
				name='currentEmploymentStatus'
				options={currentEmploymentStatuss}
			/>
			<InputItem
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
