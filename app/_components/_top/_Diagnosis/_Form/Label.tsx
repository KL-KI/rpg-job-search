import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Label = ({ children }: Props) => {
	return <label className='font-bold'>{children}</label>;
};

export default Label;
