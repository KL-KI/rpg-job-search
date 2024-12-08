"use client";

import MainVisual from "@/app/_components/MainVisual";

export default function Home() {
	return (
		<>
			<MainVisual />
			<p>RPG適性診断と10種類のRPGゲーム風のキャラクターで適性診断</p>
			<div
				id='image'
				className='aspect-video w-full bg-gray-400 flex justify-center items-center'
			>
				ゲームキャラクターで結果が分かり親しみやすく自分の性格を知ることができる！
				<br />
				心理学に基づいたオリジナル適性診断。強味・性格・向いている環境などが分かる
			</div>
			<div>RPG適性診断を始める</div>
			<div id='search-question'></div>
			<button>診断結果を見る</button>
		</>
	);
}
