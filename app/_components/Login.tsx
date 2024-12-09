"use client";

import { doCredentialLogin } from "@/app/actions";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const Login = () => {
	const router = useRouter();

	const inputIdRef = useRef<HTMLInputElement>(null);
	const inputPasswordRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const formData = new FormData();

			formData.append("id", inputIdRef.current?.value as string);
			formData.append("password", inputPasswordRef.current?.value as string);

			const response = await doCredentialLogin(formData);

			if (!!response.error) {
			} else {
				router.push("/dashboard");
			}
		} catch (error) {
			throw new Error(String(error));
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<label htmlFor='id'>ID : </label>
				<input
					ref={inputIdRef}
					type='text'
					id='id'
					className='border-2 border-gray-400'
				/>
			</div>
			<div>
				<label htmlFor='password'>PASSWORD : </label>
				<input
					ref={inputPasswordRef}
					type='password'
					id='password'
					className='border-2 border-gray-400'
				/>
			</div>
			<button className='w-28 bg-sky-500 h-10 text-white rounded-sm'>submit</button>
		</form>
	);
};

export default Login;
