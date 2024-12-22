import { Suspense } from "react";

import Result from "@/app/(root)/result/_components/Result";

const Page = () => {
	return (
		<div className='max-w-screen-lg mx-auto space-y-8 mt-16'>
			<div>
				<div
					id='sample-image'
					className='aspect-video bg-muted-foreground rounded-2xl mx-auto'
				/>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Result />
			</Suspense>
		</div>
	);
};

export default Page;
