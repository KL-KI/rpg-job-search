import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";

import { prefectures } from "@/app/data/formData";
import { inputNames } from "@/app/data/formSchema";
import { Dispatch, SetStateAction } from "react";

interface Props {
	setAddress: Dispatch<SetStateAction<string>>;
}

const Location = ({ setAddress }: Props) => {
	return (
		<SelectItem
			setFunction={setAddress}
			htmlFor={inputNames.address}
			label='現住所'
			name='location'
			options={prefectures}
		/>
	);
};

export default Location;
