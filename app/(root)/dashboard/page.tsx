"use client";

import { doCredentialLogout } from "@/app/actions";

const Page = () => {
	return (
		<>
			<div>Welcome Dashboard Page</div>
			<button onClick={() => doCredentialLogout()}>Sign out</button>
		</>
	);
};

export default Page;
