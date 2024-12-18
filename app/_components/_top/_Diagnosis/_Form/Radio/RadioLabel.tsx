import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	htmlFor: string;
}

const RadioLabel = ({ children, htmlFor }: Props) => {
	return <label htmlFor={htmlFor}>{children}</label>;
};

export default RadioLabel;
