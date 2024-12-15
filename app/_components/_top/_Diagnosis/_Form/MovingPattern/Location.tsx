import SelectItem from "@/app/_components/_top/_Diagnosis/_Form/SelectItem";
import { prefectures } from "@/app/data/formData";

const Location = () => {
	return (
		<SelectItem
			label='現住所'
			name='location'
			options={prefectures}
		/>
	);
};

export default Location;
