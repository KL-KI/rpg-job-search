import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const FormItemSpacer = ({ children }: Props) => {
	return <div className='flex flex-col gap-y-2'>{children}</div>;
};

export default FormItemSpacer;
