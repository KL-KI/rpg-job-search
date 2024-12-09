export type User = {
	id: string;
	password: string;
};

export const users = [
	{
		id: "KL_KI",
		password: "password",
	},
];

export const getUserById = (id: string) => {
	const found = users.find((user) => user.id === id);
	return found;
};
