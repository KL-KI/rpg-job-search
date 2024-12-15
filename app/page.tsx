"use client";

import Diagnosis from "@/app/_components/_top/_Diagnosis/Diagnosis";
import MainVisual from "@/app/_components/_top/MainVisual";
import WhatIsRPGSearchJob from "@/app/_components/_top/WhatIsRPGSearchJob";

export default function Home() {
	return (
		<>
			<MainVisual />
			<WhatIsRPGSearchJob />
			<section className='my-32 space-y-16'>
				<div
					id='image'
					className='aspect-video w-full bg-gray-400 grid place-items-center'
				>
					ゲームキャラクターで結果が分かり親しみやすく自分の性格を知ることができる！
					<br />
					心理学に基づいたオリジナル適性診断。強味・性格・向いている環境などが分かる
				</div>
				<p className='text-center font-bold'>
					<em className='not-italic'>RPG適性診断</em>を始める
				</p>
			</section>
			<Diagnosis />
		</>
	);
}
