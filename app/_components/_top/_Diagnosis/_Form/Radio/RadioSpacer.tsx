import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface Props {
	children: ReactNode;
	direction: "horizon" | "vertical";
}

const radioSpacer = tv({
	base: "flex",
	variants: {
		direction: {
			horizon: "flex-row items-center justify-between",
			vertical: "flex-col items-start gap-y-px",
		},
	},
});

const RadioSpacer = ({ children, direction }: Props) => {
	return <div className={radioSpacer({ direction })}>{children}</div>;
};

export default RadioSpacer;
