export const schema: SchemaType = {
	emptyErrorMessage: "",
	email: {
		defaultValue: "",
		min: {
			value: 4,
			message: "メールアドレスは４文字以上で入力してください",
		},
	},
	nameKanji: {
		defaultValue: "",
		min: {
			value: 2,
			message: "氏名は２文字以上で入力してください",
		},
	},
	nameKatakana: {
		defaultValue: "",
		min: {
			value: 2,
			message: "フリガナは２文字以上で入力してください",
		},
	},
	background: {
		values: [
			"社員・職員として解答（社内向けアンケート）",
			"採用選考への応募者として解答（適性検査）",
			"その他",
		],
		message: "１つ選択してください",
	},
	organization: {
		defaultValue: "",
		min: {
			value: 1,
			message: "会社名は1文字以上で入力してください",
		},
	},
	organizationIndustry: {
		defaultValue: "IT・通信",
	},
	department: {
		defaultValue: "",
		min: {
			value: 1,
			message: "所属部署は1文字以上で入力してください",
		},
	},
	jobType: {
		defaultValue: "営業職（法人・個人）",
	},
	employmentStatus: {
		defaultValue: "正社員",
	},
	passedYear: {
		defaultValue: "1",
	},
	employeeId: {
		defaultValue: "",
	},
	applyOrganization: {
		defaultValue: "",
		min: {
			value: 1,
			message: "応募企業名は1文字以上で入力してください",
		},
	},
	applyOrganizationIndustry: {
		defaultValue: "IT・通信",
	},
	applyJobType: {
		defaultValue: "営業職（法人・個人）",
	},
	applyEmploymentStatus: {
		defaultValue: "在職中（現職がある）",
	},
	phoneNumber: {
		defaultValue: "",
		max: {
			value: 11,
			message: "電話番号は11文字以内で入力してください",
		},
		min: {
			value: 10,
			message: "電話番号は10文字以上で入力してください",
		},
	},
	canTalkStranger: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	carePeopleComfortable: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	doCreativeActivity: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	prepareAdvance: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	feelingDownDepressed: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	likeOrganizeParty: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	proneArgument: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	likePhilosophicalSpiritual: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	dislikeOrganizingThoughts: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	feelingStressedOrAnxious: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	oftenUseDifficultWord: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	considerPrioritizeOthers: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	contributeMoreTeamMoreOthers: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	satisfiCurrentJobAndSituation: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	gender: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	birthYear: {
		defaultValue: "1900",
	},
	birthMonth: {
		defaultValue: "01",
	},
	birthDay: {
		defaultValue: "01",
	},
	address: {
		defaultValue: "北海道",
	},
	whatBest: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	wharHurt: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	whatRewardingInPast: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	imagineAchieveGoal: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	focusPreventingBadThings: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	focusAccomplishInFuture: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	thinkPreventFailure: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	thinkMyTypeIsEffortToDream: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	worryDoNotResponsibilitiesRole: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	imagineBadThingsToMe: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	focusAchieveGoodResult: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	aimAchieveDream: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	thinkAchieveGoodResult: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	thinkKindOfPersonInFuture: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	worryWillNotAchieveNumericalGoal: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	imagineWishesComingTrue: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	focusAvoidingFailure: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	thinkKindOfPersonHateBecomeInFuture: {
		message: "1つ選択してください",
		defaultValue: "",
	},
	thinkImportantGainsThanAvoidingLosses: {
		message: "1つ選択してください",
		defaultValue: "",
	},
};

type SchemaKey = keyof typeof schema;

export const inputNames: Record<SchemaKey, string> = {} as Record<SchemaKey, string>;
Object.keys(schema).forEach((key) => {
	inputNames[key as SchemaKey] = key;
});

export type Limit = { value: number; message: string };
type Min = Limit;
type Max = Limit;

export type DefaultValue = {
	defaultValue: string;
};

export type OnlyErrorMessage = {
	message: string;
};

export type Radio = DefaultValue & OnlyErrorMessage;

export type SchemaType = {
	emptyErrorMessage: string;
	email: {
		defaultValue: string;
		min: Min;
	};
	nameKanji: {
		defaultValue: string;
		min: Min;
	};
	nameKatakana: {
		defaultValue: string;
		min: Min;
	};
	background: {
		values: string[];
	} & OnlyErrorMessage;
	organization: {
		defaultValue: string;
		min: Min;
	};
	organizationIndustry: DefaultValue;
	department: {
		defaultValue: string;
		min: Min;
	};
	jobType: DefaultValue;
	employmentStatus: DefaultValue;
	passedYear: DefaultValue;
	employeeId: DefaultValue;
	applyOrganization: {
		defaultValue: string;
		min: Min;
	};
	applyOrganizationIndustry: DefaultValue;
	applyJobType: DefaultValue;
	applyEmploymentStatus: DefaultValue;
	phoneNumber: {
		defaultValue: string;
		max: Max;
		min: Min;
	};
	canTalkStranger: Radio;
	carePeopleComfortable: Radio;
	doCreativeActivity: Radio;
	prepareAdvance: Radio;
	feelingDownDepressed: Radio;
	likeOrganizeParty: Radio;
	proneArgument: Radio;
	likePhilosophicalSpiritual: Radio;
	dislikeOrganizingThoughts: Radio;
	feelingStressedOrAnxious: Radio;
	oftenUseDifficultWord: Radio;
	considerPrioritizeOthers: Radio;
	contributeMoreTeamMoreOthers: Radio;
	satisfiCurrentJobAndSituation: Radio;
	gender: Radio;
	birthYear: DefaultValue;
	birthMonth: DefaultValue;
	birthDay: DefaultValue;
	address: DefaultValue;
	whatBest: Radio;
	wharHurt: Radio;
	whatRewardingInPast: Radio;
	imagineAchieveGoal: Radio;
	focusPreventingBadThings: Radio;
	focusAccomplishInFuture: Radio;
	thinkPreventFailure: Radio;
	thinkMyTypeIsEffortToDream: Radio;
	worryDoNotResponsibilitiesRole: Radio;
	imagineBadThingsToMe: Radio;
	focusAchieveGoodResult: Radio;
	aimAchieveDream: Radio;
	thinkAchieveGoodResult: Radio;
	thinkKindOfPersonInFuture: Radio;
	worryWillNotAchieveNumericalGoal: Radio;
	imagineWishesComingTrue: Radio;
	focusAvoidingFailure: Radio;
	thinkKindOfPersonHateBecomeInFuture: Radio;
	thinkImportantGainsThanAvoidingLosses: Radio;
};
