import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const RadioItemSpacer = ({ children }: Props) => {
	return <div className='flex gap-x-2'>{children}</div>;
};

export default RadioItemSpacer;
