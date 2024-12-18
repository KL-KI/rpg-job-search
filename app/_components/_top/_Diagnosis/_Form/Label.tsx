import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	htmlFor?: string;
}

const Label = ({ children, htmlFor }: Props) => {
	return (
		<label
			htmlFor={htmlFor}
			className='font-bold'
		>
			{children}
		</label>
	);
};

export default Label;
