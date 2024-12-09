import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { getUserById, User } from "@/app/data/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials: Partial<User>) {
				// 早期リターン
				if (credentials === null) return null;
				try {
					const user = getUserById(credentials.id || "");

					if (user) {
						const isMatch = user?.password === credentials.password;

						if (isMatch) {
							return user;
						} else {
							throw new Error("CHECK YOUR PASSWORD");
						}
					} else {
						throw new Error("USER NOT FOUND");
					}
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : String(error);
					throw new Error(errorMessage);
				}
			},
		}),
	],
});
