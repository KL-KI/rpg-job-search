"use client";

import { useSearchParams } from "next/navigation";

import { inputNames } from "@/app/data/formSchema";

type DiagnosisData = Record<string, number>;

const Page = () => {
	const searchParams = useSearchParams();
	const START_FOURTH_STRING = "canTalkStranger";
	const START_FIFTH_SECOND_STRING = "imagineAchieveGoal";
	const START_FOURTH_INDEX = Object.values(inputNames).indexOf(START_FOURTH_STRING);
	const START_FIFTH_INDEX = Object.values(inputNames).indexOf(START_FIFTH_SECOND_STRING);

	const getPrefix: (answeredData: DiagnosisData) => string = (answeredData: DiagnosisData) => {
		const PREF_ACTIVE = "積極的";
		const PREF_SOLID = "堅実";
		const DEFAULT_VALUE = 0;
		let point = DEFAULT_VALUE;
		for (let i = 0; i < Object.values(answeredData).length; i++) {
			point += Object.values(answeredData)[i];
		}
		return point > 0 ? PREF_ACTIVE : PREF_SOLID;
	};

	/**
	 * 因子を計算する関数を定義
	 * **/
	// const calcFencerFactor = (data: DiagnosisData) => {
	// 	const fencerFactors = ["canTalkStranger", "likeOrganizeParty"];
	// 	const dataKeys = Object.keys(data);
	// 	let fencerFactorPoint = 0;

	// 	for (let i = 0; i < dataKeys.length; i++) {
	// 		if (fencerFactors.includes(dataKeys[i])) {
	// 			fencerFactorPoint += data[dataKeys[i]];
	// 		}
	// 	}
	// 	return fencerFactorPoint;
	// };
	// const calcHealerFactor = (data: DiagnosisData) => {
	// 	const CARE_PEOPLE_COMFORTABLE = "carePeopleComfortable";
	// 	const PRONE_ARGUMENT = "proneArgument";
	// 	const CONSIDER_PRIORITIZE_OTHERS = "considerPrioritizeOthers";
	// 	const healerFactors = [CARE_PEOPLE_COMFORTABLE, PRONE_ARGUMENT, CONSIDER_PRIORITIZE_OTHERS];
	// 	let carePeopleComfortablePoint = 0;
	// 	let proneArgumentPoint = 0;
	// 	let considerPrioritizeOthersPoint = 0;
	// 	const dataKeys = Object.keys(data);

	// 	for (let i = 0; i < dataKeys.length; i++) {
	// 		if (healerFactors.includes(dataKeys[i])) {
	// 			if (dataKeys[i] === CARE_PEOPLE_COMFORTABLE)
	// 				carePeopleComfortablePoint += data[CARE_PEOPLE_COMFORTABLE];
	// 			else if (dataKeys[i] === PRONE_ARGUMENT) proneArgumentPoint += data[PRONE_ARGUMENT];
	// 			else if (dataKeys[i] === CONSIDER_PRIORITIZE_OTHERS)
	// 				considerPrioritizeOthersPoint += data[CONSIDER_PRIORITIZE_OTHERS];
	// 		}
	// 	}
	// 	/**
	// 	 * @data 2024/12/19
	// 	 * @todos
	// 	 * - 因子の計算まで完了。
	// 	 * - 因子の計算結果から具体的にどの様な職業になるのか再度計算する関数を作成する
	// 	 * - AE,AD列が計算結果に組み込まれていない件を注視する
	// 	 * **/
	// 	const healerPoint =
	// 		carePeopleComfortablePoint +
	// 		(proneArgumentPoint === 1
	// 			? 5
	// 			: proneArgumentPoint === 2
	// 			? 4
	// 			: proneArgumentPoint === 3
	// 			? 3
	// 			: proneArgumentPoint === 4
	// 			? 2
	// 			: proneArgumentPoint === 5
	// 			? 1
	// 			: 0) +
	// 		considerPrioritizeOthersPoint;
	// 	return healerPoint;
	// };
	// const calcSchemerFactor = (data: DiagnosisData) => {
	// 	const schemerFactors = [
	// 		"doCreativeActivity",
	// 		"likePhilosophicalSpiritual",
	// 		"oftenUseDifficultWord",
	// 	];
	// 	const dataKeys = Object.keys(data);
	// 	let schemerFactorPoint = 0;

	// 	for (let i = 0; i < dataKeys.length; i++) {
	// 		if (schemerFactors.includes(dataKeys[i])) {
	// 			schemerFactorPoint += data[dataKeys[i]];
	// 		}
	// 	}
	// 	return schemerFactorPoint;
	// };
	// const calcGunnerFactor = (data: DiagnosisData) => {
	// 	const PREPARE_ADVANCE = "prepareAdvance";
	// 	const DISLIKE_ORGANIZING_THOUGHTS = "dislikeOrganizingThoughts";
	// 	const healerFactors = [PREPARE_ADVANCE, DISLIKE_ORGANIZING_THOUGHTS];
	// 	let prepareAdvancePoint = 0;
	// 	let dislikeOrganizingThoughtsPoint = 0;
	// 	const dataKeys = Object.keys(data);

	// 	for (let i = 0; i < dataKeys.length; i++) {
	// 		if (healerFactors.includes(dataKeys[i])) {
	// 			if (dataKeys[i] === PREPARE_ADVANCE) prepareAdvancePoint += data[PREPARE_ADVANCE];
	// 			else if (dataKeys[i] === DISLIKE_ORGANIZING_THOUGHTS)
	// 				dislikeOrganizingThoughtsPoint += data[DISLIKE_ORGANIZING_THOUGHTS];
	// 		}
	// 	}
	// 	const gunnerPoint =
	// 		prepareAdvancePoint +
	// 		(dislikeOrganizingThoughtsPoint === 1
	// 			? 5
	// 			: dislikeOrganizingThoughtsPoint === 2
	// 			? 4
	// 			: dislikeOrganizingThoughtsPoint === 3
	// 			? 3
	// 			: dislikeOrganizingThoughtsPoint === 4
	// 			? 2
	// 			: dislikeOrganizingThoughtsPoint === 5
	// 			? 1
	// 			: 0);
	// 	return gunnerPoint;
	// };
	// const calcShelderFactor = (data: DiagnosisData) => {
	// 	const shielderFactors = ["feelingDownDepressed", "feelingStressedOrAnxious"];
	// 	const dataKeys = Object.keys(data);
	// 	let shielderFactorPoint = 0;

	// 	for (let i = 0; i < dataKeys.length; i++) {
	// 		if (shielderFactors.includes(dataKeys[i])) {
	// 			shielderFactorPoint += data[dataKeys[i]];
	// 		}
	// 	}
	// 	return shielderFactorPoint;
	// };

	/**
	 * 本能を計算する関数を定義
	 * **/
	// const NOT_APPLICABLE = "非該当";

	// const POINT = {
	// 	POINT_4: 4,
	// 	POINT_3: 3,
	// 	POINT_2: 2,
	// 	POINT_1: 1,
	// } as const;
	/**
	 * @param {number} firstNum この数値より下がtrue
	 * @param {number} secondNum この数値以上がtrue
	 * @param {number} factorValue 因子のポイント
	 * @returns {boolean}
	 * @description 特定の間の数をbooleanで返す関数
	 * **/
	// const isBetweenTwoNumbers = (
	// 	firstNum: number,
	// 	secondNum: number,
	// 	factorValue: number
	// ): boolean => {
	// 	return factorValue < firstNum && factorValue >= secondNum;
	// };
	// 狩猟本能
	// const calcHuntingInstinct = (fencerFactor: number) => {
	// 	const isBetweenSevenAndNine = isBetweenTwoNumbers(9, 7, fencerFactor);
	// 	const isBetweenFiveAndSeven = isBetweenTwoNumbers(7, 5, fencerFactor);
	// 	const isMinimumThanFive = fencerFactor < 5;
	// 	if (fencerFactor >= 9) {
	// 		return POINT.POINT_4;
	// 	} else if (isBetweenSevenAndNine) {
	// 		return POINT.POINT_3;
	// 	} else if (isBetweenFiveAndSeven) {
	// 		return POINT.POINT_2;
	// 	} else if (isMinimumThanFive) {
	// 		return POINT.POINT_1;
	// 	}
	// 	return NOT_APPLICABLE;
	// };
	//共感本能
	// const calcEmpathyInstinct = (healerFactor: number, gender: string) => {
	// 	const MALE_STRING = "男性";
	// 	const FEMALE_STRING = "女性";

	// 	// 男性用条件式
	// 	const isMale = gender === MALE_STRING;
	// 	const isOverFourteen = healerFactor >= 14;
	// 	const isBetweenTwelveAndTen = isBetweenTwoNumbers(12, 10, healerFactor);
	// 	const isMinimumThanTen = healerFactor < 10;

	// 	// 女性用条件式
	// 	const isFemale = gender === FEMALE_STRING;
	// 	const isOverFifteen = healerFactor >= 15;
	// 	const isFourteen = healerFactor === 14;
	// 	const isMinimumThanTwelve = healerFactor < 12;

	// 	// どっちの条件式でも使ってる
	// 	const isBetweenFourteenAndTwelve = isBetweenTwoNumbers(14, 12, healerFactor);

	// 	// 男性用ロジック
	// 	if (isMale) {
	// 		if (isOverFourteen) {
	// 			return POINT.POINT_4;
	// 		} else if (isBetweenFourteenAndTwelve) {
	// 			return POINT.POINT_3;
	// 		} else if (isBetweenTwelveAndTen) {
	// 			return POINT.POINT_2;
	// 		} else if (isMinimumThanTen) {
	// 			return POINT.POINT_1;
	// 		}
	// 	}
	// 	// デフォルトの女性用ロジック
	// 	if (isFemale) {
	// 		if (isOverFifteen) {
	// 			return POINT.POINT_4;
	// 		} else if (isFourteen) {
	// 			return POINT.POINT_3;
	// 		} else if (isBetweenFourteenAndTwelve) {
	// 			return POINT.POINT_2;
	// 		} else if (isMinimumThanTwelve) {
	// 			return POINT.POINT_1;
	// 		}
	// 	}
	// 	return NOT_APPLICABLE;
	// };
	// 飛躍本能
	// const calcLeapInstinct = (schemerFactor: number) => {
	// 	//=if(BE3>=13,4,if(and(BE3<13,BE3>=11),3,if(and(BE3<11,BE3>=9),2,if(and(BE3<9),1,"非該当"))))
	// 	const isOverThirteen = schemerFactor >= 13;
	// 	const isBetweenThirteenAndEleven = isBetweenTwoNumbers(13, 11, schemerFactor);
	// 	const isBetweenElevenAndNine = isBetweenTwoNumbers(11, 9, schemerFactor);
	// 	const isMinimumThanNine = schemerFactor < 9;

	// 	if (isOverThirteen) {
	// 		return POINT.POINT_4;
	// 	} else if (isBetweenThirteenAndEleven) {
	// 		return POINT.POINT_3;
	// 	} else if (isBetweenElevenAndNine) {
	// 		return POINT.POINT_2;
	// 	} else if (isMinimumThanNine) {
	// 		return POINT.POINT_1;
	// 	} else {
	// 		return NOT_APPLICABLE;
	// 	}
	// };
	// 職人魂
	// const calcCraftsmanInstinct = (gunnerFactor: number) => {
	// 	// =if(BF3>=9,4,if(and(BF3<9,BF3>=7),3,if(and(BF3<7,BF3>=5),2,if(and(BF3<5),1,"非該当"))))
	// 	const isOverThanNine = gunnerFactor >= 9;
	// 	const isBetweenNineAndSeven = isBetweenTwoNumbers(9, 7, gunnerFactor);
	// 	const isBetweenSevenAndFive = isBetweenTwoNumbers(7, 5, gunnerFactor);
	// 	const isMinimumThanFive = gunnerFactor < 5;
	// 	if (isOverThanNine) {
	// 		return POINT.POINT_4;
	// 	} else if (isBetweenNineAndSeven) {
	// 		return POINT.POINT_3;
	// 	} else if (isBetweenSevenAndFive) {
	// 		return POINT.POINT_2;
	// 	} else if (isMinimumThanFive) {
	// 		return POINT.POINT_1;
	// 	} else {
	// 		return NOT_APPLICABLE;
	// 	}
	// };
	// 警戒本能
	// const calcVigilanceInstinct = (shielderFactor: number) => {
	// 	// =if(BG3>=9,4,if(and(BG3<9,BG3>=7),3,if(and(BG3<7,BG3>=5),2,if(and(BG3<5),1,"非該当"))))
	// 	const isOverThanNine = shielderFactor >= 9;
	// 	const isBetweenNineAndSeven = isBetweenTwoNumbers(9, 7, shielderFactor);
	// 	const isBetweenSevenAndFive = isBetweenTwoNumbers(7, 5, shielderFactor);
	// 	const isMinimumThanFive = shielderFactor < 5;

	// 	if (isOverThanNine) {
	// 		return POINT.POINT_4;
	// 	} else if (isBetweenNineAndSeven) {
	// 		return POINT.POINT_3;
	// 	} else if (isBetweenSevenAndFive) {
	// 		return POINT.POINT_2;
	// 	} else if (isMinimumThanFive) {
	// 		return POINT.POINT_1;
	// 	} else {
	// 		return NOT_APPLICABLE;
	// 	}
	// };

	const fourthAnswered = Object.values(inputNames).filter((value, i) => {
		if (i < START_FOURTH_INDEX || i >= START_FIFTH_INDEX) return;
		return value;
	});
	const fifthAnswered = Object.values(inputNames).filter((value, i) => {
		if (i < START_FIFTH_INDEX) return;
		return value;
	});

	const fourthAnsweredData: DiagnosisData = {};
	const fifthAnsweredData: DiagnosisData = {};
	fourthAnswered.forEach((value) => {
		const v = searchParams.get(value);
		if (v) {
			fourthAnsweredData[value] = parseInt(v);
		}
	});
	fifthAnswered.forEach((value) => {
		const v = searchParams.get(value);
		if (v) {
			fifthAnsweredData[value] = parseInt(v);
		}
	});

	// 因子を本能を基に計算（一旦定数に代入しておく）
	// これは何に使う？
	// const huntingPoint = calcHuntingInstinct(calcFencerFactor(fourthAnsweredData));
	// const empathyPoint = calcEmpathyInstinct(
	// 	calcHealerFactor(fourthAnsweredData),
	// 	searchParams.get(inputNames.gender)!
	// );
	// const leapPoint = calcLeapInstinct(calcSchemerFactor(fourthAnsweredData));
	// const craftsmanPoint = calcCraftsmanInstinct(calcGunnerFactor(fourthAnsweredData));
	// const vigilancePoint = calcVigilanceInstinct(calcShelderFactor(fourthAnsweredData));

	/**
	 * 職のポイントを計算
	 * **/
	const whatBestValue = searchParams.get(inputNames.whatBest)!;
	const whatHurtValue = searchParams.get(inputNames.wharHurt)!;
	const whatRewardingInPastValue = searchParams.get(inputNames.whatRewardingInPast)!;
	const jobSameValue = {
		fencer: {
			whatBest: 1,
			whatHurt1: 3,
			whatHurt2: 4,
			whatRewardingInPast: 1,
		},
		whiteMage: {
			whatBest: 3,
			whatHurt1: 4,
			whatHurt2: undefined,
			whatRewardingInPast: 3,
		},
		strategist: {
			whatBest: 5,
			whatHurt1: 2,
			whatHurt2: 1,
			whatRewardingInPast: 5,
		},
		machinist: {
			whatBest: 4,
			whatHurt1: 2,
			whatHurt2: 1,
			whatRewardingInPast: 4,
		},
		shieldKnight: {
			whatBest: 2,
			whatHurt1: 5,
			whatHurt2: undefined,
			whatRewardingInPast: 2,
		},
	};
	const getIsSamevalue = (sameValue: number, value: number | undefined) => sameValue === value;
	const calcJobPoint = (
		whatBestValue: number,
		whatHurtValue: number,
		whatRewardingInPastValue: number,
		whatBestSameValue: number,
		whatHurtSameValue1: number,
		whatHurtSameValue2: number | undefined,
		whatRewardingInPastSameValue: number
	) => {
		// =if(BR3="1",2,0)+(if(and(BS3="3",BS3="4"),-2,0))+(if(BT3="1",1,0))

		// 条件式
		const isSameWhatBest = getIsSamevalue(whatBestValue, whatBestSameValue);
		const isSameWhatHurt1 = getIsSamevalue(whatHurtValue, whatHurtSameValue1);
		const isSameWhatHurt2 = getIsSamevalue(whatHurtValue, whatHurtSameValue2);
		const isSameWhatRewardingInPast = getIsSamevalue(
			whatRewardingInPastValue,
			whatRewardingInPastSameValue
		);

		let jobPoint = 0;

		if (isSameWhatBest) jobPoint += 2;

		if (whatHurtSameValue2) {
			if (isSameWhatHurt1 && isSameWhatHurt2) jobPoint += -2;
		} else {
			if (isSameWhatHurt1) jobPoint += -2;
		}

		if (isSameWhatRewardingInPast) jobPoint += 1;
		return jobPoint;
	};
	const fencerJobPoint = calcJobPoint(
		parseInt(whatBestValue),
		parseInt(whatHurtValue),
		parseInt(whatRewardingInPastValue),
		jobSameValue.fencer.whatBest,
		jobSameValue.fencer.whatHurt1,
		jobSameValue.fencer.whatHurt2,
		jobSameValue.fencer.whatRewardingInPast
	);
	const whiteMageJobPoint = calcJobPoint(
		parseInt(whatBestValue),
		parseInt(whatHurtValue),
		parseInt(whatRewardingInPastValue),
		jobSameValue.whiteMage.whatBest,
		jobSameValue.whiteMage.whatHurt1,
		jobSameValue.whiteMage.whatHurt2,
		jobSameValue.whiteMage.whatRewardingInPast
	);
	const strategistJobPoint = calcJobPoint(
		parseInt(whatBestValue),
		parseInt(whatHurtValue),
		parseInt(whatRewardingInPastValue),
		jobSameValue.strategist.whatBest,
		jobSameValue.strategist.whatHurt1,
		jobSameValue.strategist.whatHurt2,
		jobSameValue.strategist.whatRewardingInPast
	);
	const machinistJobPoint = calcJobPoint(
		parseInt(whatBestValue),
		parseInt(whatHurtValue),
		parseInt(whatRewardingInPastValue),
		jobSameValue.machinist.whatBest,
		jobSameValue.machinist.whatHurt1,
		jobSameValue.machinist.whatHurt2,
		jobSameValue.machinist.whatRewardingInPast
	);
	const shieldKnightJobPoint = calcJobPoint(
		parseInt(whatBestValue),
		parseInt(whatHurtValue),
		parseInt(whatRewardingInPastValue),
		jobSameValue.shieldKnight.whatBest,
		jobSameValue.shieldKnight.whatHurt1,
		jobSameValue.shieldKnight.whatHurt2,
		jobSameValue.shieldKnight.whatRewardingInPast
	);

	// 本能を基に計算された因子を基に、適職を計算する関数を定義
	const getJob = () => {
		const jobMap = {
			fencer: "剣士",
			whiteMage: "白魔導士",
			strategist: "軍師",
			machinist: "機工士",
			shieldKnight: "盾騎士",
		};
		// if(BU3>=2,"剣士",
		// if(BV3>=2,"白魔道師",
		// if(BW3>=2,"軍師",
		// if(BX3>=2,"機工士",
		// if(BY3>=2,"盾騎士",
		// if(BU3=1,"剣士",
		// if(BV3=1,"白魔道師",
		// if(BW3=1,"軍師",
		// if(BX3=1,"機工士",
		// if(BY3=1,"盾騎士","再検査"))))))))))
		/**
		 * BU = fencerJobPoint
		 * BV = whiteMageJobPoint
		 * BW = strategistJobPoint
		 * BX = machinistJobPoint
		 * BY = shieldKnightJobPoint
		 * **/
		if (fencerJobPoint >= 2) return jobMap.fencer;
		if (whiteMageJobPoint >= 2) return jobMap.whiteMage;
		if (strategistJobPoint >= 2) return jobMap.strategist;
		if (machinistJobPoint >= 2) return jobMap.machinist;
		if (shieldKnightJobPoint >= 2) return jobMap.shieldKnight;

		// このロジックおかしい気がする
		if (fencerJobPoint === 1) return jobMap.fencer;
		if (whiteMageJobPoint === 1) return jobMap.whiteMage;
		if (strategistJobPoint === 1) return jobMap.strategist;
		if (machinistJobPoint === 1) return jobMap.machinist;
		if (shieldKnightJobPoint === 1) return jobMap.shieldKnight;
		return "再検査";
	};

	const changeSign = (data: DiagnosisData, changeKeys: string[]) => {
		const changedSignData: DiagnosisData = {};
		const dataKeys = Object.keys(data);

		for (let i = 0; i < dataKeys.length; i++) {
			if (changeKeys.includes(dataKeys[i])) {
				changedSignData[dataKeys[i]] = -data[dataKeys[i]];
			} else {
				changedSignData[dataKeys[i]] = data[dataKeys[i]];
			}
		}
		return changedSignData;
	};
	const PREFIX = getPrefix(
		changeSign(fifthAnsweredData, [
			"focusPreventingBadThings",
			"thinkPreventFailure",
			"worryDoNotResponsibilitiesRole",
			"imagineBadThingsToMe",
			"worryWillNotAchieveNumericalGoal",
			"focusAvoidingFailure",
			"thinkKindOfPersonHateBecomeInFuture",
			"thinkImportantGainsThanAvoidingLosses",
		])
	);
	const JOB = getJob();
	return (
		<div className='max-w-screen-lg mx-auto space-y-8 mt-16'>
			<div>
				<div
					id='sample-image'
					className='aspect-video bg-muted-foreground rounded-2xl mx-auto'
				/>
			</div>
			<div>
				<p>
					{/* 剣士: 20%, 白魔導士: 25.55~%, 軍師: 4.44~%, 機工士: 21.11~%, 盾騎士: 26.66~%, 再検査: 2.22~% */}
					あなたの適職は
					<span className='text-4xl mx-1 font-bold text-sky-500'>
						{PREFIX}な{JOB}
					</span>
					です。Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem neque minima,
					temporibus a quia iusto deserunt ipsa voluptate quod laborum unde odio itaque vero ipsam.
					Exercitationem, nesciunt facere hic rem cumque dolore alias obcaecati unde explicabo
					reprehenderit nisi architecto voluptate sit esse culpa suscipit cum eos nihil. Sint unde
					provident est. Quaerat impedit distinctio nobis veniam itaque aut aliquid nemo in nulla
					totam, autem fugiat sapiente voluptates illum atque illo. Ea repellat laboriosam, suscipit
					dolorum quod tenetur harum! Perspiciatis architecto dignissimos cumque non quam inventore
					rem laboriosam itaque nihil dolore accusamus, minima, fugit explicabo fuga dolores. Totam
					error accusamus reprehenderit, nobis dicta est reiciendis commodi quos voluptatum, esse,
					facilis blanditiis inventore ducimus illo eius qui natus unde vel. Velit sequi
					perspiciatis unde quisquam provident rerum amet sint ullam, incidunt corporis adipisci
					nihil quidem repudiandae eum dolor non laboriosam blanditiis atque ex ea, est dolores
					fugit earum? Alias in saepe unde excepturi temporibus recusandae, itaque aliquid
					perspiciatis obcaecati ab nobis deleniti placeat, quam vitae, porro delectus beatae nulla
					quaerat cum. Magni, explicabo voluptate quam natus cumque asperiores architecto ullam, sit
					possimus quas in quis a facilis atque. Impedit, doloribus. Libero magni, omnis accusamus
					facilis voluptas incidunt sunt praesentium iste non, est odit ab corporis maxime!
					Obcaecati quos at magni itaque animi nesciunt tempora in deserunt voluptatem, possimus
					necessitatibus consequatur voluptatibus reiciendis natus aspernatur optio dicta a
					perspiciatis unde cum nam mollitia. Labore quibusdam architecto ullam ad temporibus
					provident incidunt quia commodi reiciendis totam eius nam est, sit sapiente recusandae!
					Odio fuga reprehenderit dolorum! Totam nam, natus nemo harum quos officia nesciunt velit
					maiores expedita incidunt odio, neque est aspernatur quod ratione pariatur eos, assumenda
					fugit possimus quam recusandae voluptates eaque! Accusantium sequi iste magnam ullam,
					cupiditate facilis voluptatibus tempore et minus rem nobis eius totam reprehenderit nemo,
					dicta iusto ab optio?
				</p>
			</div>
		</div>
	);
};

export default Page;
