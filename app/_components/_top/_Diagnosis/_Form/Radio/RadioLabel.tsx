import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const RadioLabel = ({ children }: Props) => {
	return <label>{children}</label>;
};

export default RadioLabel;
