"use server";

import { signIn, signOut } from "@/auth";

export const doCredentialLogin = async (formData: FormData) => {
	try {
		const response = await signIn("credentials", {
			id: formData.get("id"),
			password: formData.get("password"),
			redirect: false,
		});
		return response;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		throw new Error(errorMessage);
	}
};

export const doCredentialLogout = async () => {
	await signOut({ redirectTo: "/" });
};
