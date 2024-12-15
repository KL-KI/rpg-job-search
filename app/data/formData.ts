const RADIO_LABELS_TO_FIVE = ["1", "2", "3", "4", "5"];
const RADIO_VALUES_TO_FIVE = [1, 2, 3, 4, 5];

const RADIO_LABELS_TO_SEVEN = ["1", "2", "3", "4", "5", "6", "7"];
const RADIO_VALUES_TO_SEVEN = [1, 2, 3, 4, 5, 6, 7];

export type DiagnosisType = {
	/* 1st section start */
	email: string; //  // メールアドレス
	nameKanji: string; // 名前（漢字）
	nameKatakana: string; // 名前（フリガナ）
	background: string; // このアンケートを回答する経緯
	/*1st section end*/
	/*2nd section start*/
	organization: string; // 所属の会社名（団体名）
	organizationIndustry: string; // 所属会社の業界
	department: string; // 所属部署
	jobType: string; // 現在の職種
	employmentStatus: string; // 雇用形態
	yearsPassed: string; // 入社経過年数（整数で記載）
	employeeNumber: string; // 社員番号 not required
	/*2nd section end*/
	/*3rd section start*/
	applicantCompany: string; // 応募企業名
	applicantCompanyIndustry: string; // 応募企業の業界
	applicantJobType: string; // 応募職種
	currentEmploymentStatus: string; // 雇用状況
	phoneNumber: string; // 携帯電話番号
	/*3rd section end*/
	/*4th section start*/
	canTalkToStrangers: number; // 知らない人とすぐに会話ができる
	carePeopleComfortableAndHappy: number; // 人が快適で幸せかどうか、気になる
	isCreativeAcitivityPaintFilmNovelMusic: number; // 絵画・映像・小説・音楽などの創作活動をしている
	prepareAdvance: number; // 事前準備は、余裕をもって入念にする方だ
	feelDownDepress: number; // 気分が落ち込んだり、憂鬱になったりする
	organizePartyAndEvent: number; // パーティや交流イベントを企画するのが好き
	proneArgument: number; // 人と議論を起こしやすい。批判をすることが得意。
	loveThinkPhilosophicalAndSpiritualTheme: number; // 哲学的、精神的なテーマを考えるのが好き
	dislikeOrganizingThoughts: number; // 物事を整理して考えるのが苦手
	feelStressedAnxious: number; // ストレスを感じたり、不安になったりする。
	useKatakanaAndDifficultWord: number; // カタカナ語や、難しい言葉を使う事が多い。
	considerAndPrioritizeFeelingsOfOthers: number; // 他の人の気持ちを思いやり、優先する。
	contributeMoreThanOthers: number; // 自分は他の人よりも、チームに貢献したり、成果を出していると思う
	satisfiedCurrentJobAndSituation: number; // 自分は、現在の職場や置かれた状況に満足している
	gender: string; // 性別
	birthday: string; // 生年月日
	location: string; // 現住所
	/*4th section end*/
	/*5th section start*/
	whatYouDoBest: string; // あなたが最も得意な事
	whatHurtsYouTheMost: string; // あなたが最も苦痛な事
	whatMostRewardingThingInPast: string; // 過去に最もやりがいを感じたこと
	/*あなたの普段の過ごし方について start*/
	imagineCanAchieveGoalAndAspirations: number; // ok どうやったら自分の目標や希望を叶えられるか、よく想像することがある
	focusPreventingBadThing: number; // ok 私は大抵、悪い出来事を避けることに意識を集中している
	focusAccomplishInFuture: number; // ok 私は大抵、将来自分が成し遂げたいことに意識を集中している
	thinkCarefullyPreventMistake: number; // ok どうやったら失敗を防げるかについて、よく考える
	typeOfPersonEffortDreamDesire: number; // ok 私は、自分の理想を最優先し、夢や願望をかなえようと努力するタイプだと思う
	worryNotFulfillingResponsibility: number; // ok 自分の責任や役割を果たせていないのではないかと、よく心配になる
	imagineBadEventComingMyWay: number; // ok 恐れている悪い出来事が自分に降りかかってくる様子を、よく想像する
	focusAttentionGoodOutcome: number; // ok 私は大抵、人生においてよい成果を得ることに意識を集中している
	aimDreamIdealAtWork: number; // ok 職場（学校）での私は、自分の夢や理想・なりたい姿をかなえることを目指している
	thinkAchieveGoodResult: number; // ok どうやったらよい成果が得られるかについて、よく考える
	thinkKindOfPersonWantToBeInFuture: number; // ok 将来どんな人間になりたいかについて、よく考える。
	worryWillNotAchiveTargetNumber: number; // ok 目標数字や理想とする成果を達成できないのではないかと、よく心配になる
	imagineWishComeTrue: number; // ok こうなったらいいなと願っていることが叶う様子を、よく想像する。
	focusAvoidingFailureAtWork: number; // ok 職場（学校）での私は、失敗を避けることに意識を集中している
	thinkImageIdLikeToHaveOfMyselfInFuture: number; // 自分が将来そうなってしまったらいやだと思う自分像について、よく考えることがある
	thinkMoreImportantToAvoidLossesThanGainProfit: number; // 利益を得ることよりも、損失を避けることの方が重要だと思う
	/*5th section end*/
};

export const industries = [
	"IT・通信",
	"メーカー",
	"商社",
	"小売り・物流・運輸",
	"金融",
	"建築・不動産",
	"人材・教育",
	"サービス（飲食・ホテル・結婚・レジャー）",
	"サービス（医療・福祉・介護・保育・教育）",
	"サービス（その他）",
	"コンサルティング・調査・士業",
	"広告・出版・マスコミ",
	"インフラ・交通・官公庁",
	"スタートアップ企業",
	"NGO・NPO",
	"その他",
];

export const jobTypes = [
	"営業職（法人・個人）",
	"接客・サービス・販売",
	"医療・福祉・介護",
	"教育・保育",
	"技術職（建築系）・施工管理",
	"技術職（IT・Web系）",
	"技術職（機械系）",
	"技術職（その他）",
	"運輸・配送・倉庫関連",
	"一般事務",
	"営業事務・医療事務",
	"マーケティング職",
	"クリエイティブ職",
	"人事・広報・総務",
	"経理・財務・経営企画",
	"専門職",
	"その他",
];

export const employmentStatuss = [
	"正社員",
	"契約社員・派遣社員",
	"パート・アルバイト",
	"学生・インターン",
	"取締役・監査役",
	"業務委託・顧問",
	"その他",
];

export const currentEmploymentStatuss = ["在職中（現職がある）", "離職中", "学生の方", "その他"];

export const movingPatterns = [
	{
		label: "知らない人とすぐに会話ができる",
		name: "canTalkToStrangers",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "人が快適か幸せかどうか気になる",
		name: "carePeopleComfortableAndHappy",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "絵画・映像・小説・音楽などの創作活動をしている",
		name: "isCreativeAcitivityPaintFilmNovelMusic",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "事前準備は余裕をもって入念にする方だ",
		name: "prepareAdvance",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "気分が落ち込んだり、憂鬱になったりする",
		name: "feelDownDepress",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "パーティや交流イベントを企画するのが好き",
		name: "organizePartyAndEvent",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "人と議論を起こしやすい。批判をすることが得意",
		name: "proneArgument",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "哲学的、精神的なテーマを考えるのが好き",
		name: "loveThinkPhilosophicalAndSpiritualTheme",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "物事を整理して考えるのが苦手",
		name: "dislikeOrganizingThoughts",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "ストレスを感じたり、不安になったりする",
		name: "feelStressedAnxious",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "カタカナ語や、難しい言葉を使う事が多い",
		name: "useKatakanaAndDifficultWord",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "他の人の気持ちを思いやり、優先する。",
		name: "considerAndPrioritizeFeelingsOfOthers",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "自分は他の人よりも、チームに貢献したり、成果を出していると思う",
		name: "contributeMoreThanOthers",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
	{
		label: "自分は、現在の職場や置かれた状況に満足している",
		name: "satisfiedCurrentJobAndSituation",
		radios: {
			label: RADIO_LABELS_TO_FIVE,
			value: RADIO_VALUES_TO_FIVE,
		},
	},
];

export const passedYear = [...Array(99)].map((_, index) => index + 1);

export const gendersInfo = {
	label: "性別",
	gender: ["男性", "女性"],
};

export const generateBirthdayInfo = () => {
	const currentYear = new Date().getFullYear();

	return {
		year: Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (1900 + i).toString()),
		month: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")),
		day: Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0")),
	};
};

export const prefectures = [
	"北海道",
	"青森県",
	"岩手県",
	"宮城県",
	"秋田県",
	"山形県",
	"福島県",
	"茨城県",
	"栃木県",
	"群馬県",
	"埼玉県",
	"千葉県",
	"東京都",
	"神奈川県",
	"新潟県",
	"富山県",
	"石川県",
	"福井県",
	"山梨県",
	"長野県",
	"岐阜県",
	"静岡県",
	"愛知県",
	"三重県",
	"滋賀県",
	"京都府",
	"大阪府",
	"兵庫県",
	"奈良県",
	"和歌山県",
	"鳥取県",
	"島根県",
	"岡山県",
	"広島県",
	"山口県",
	"徳島県",
	"香川県",
	"愛媛県",
	"高知県",
	"福岡県",
	"佐賀県",
	"長崎県",
	"熊本県",
	"大分県",
	"宮崎県",
	"鹿児島県",
	"沖縄県",
	"日本国外（海外）",
];

export const personalitiesFirst = [
	{
		label: "あなたが最も得意なこと",
		radios: {
			name: "whatYouDoBest",
			value: RADIO_VALUES_TO_FIVE,
			personalitiesFirstLabel: [
				"面白いことを言って周りを笑わせたり、場を和ませること",
				"単調な仕事でも、ゲーム感覚で苦なく行えること",
				"相手の表情や周りの空気を読んで、良い雰囲気を作ること",
				"努力を重ねて技術を習得し、必要とされるモノを作り出すこと",
				"顧客や上司を納得させる資料作成・数値分析を行うこと",
			],
		},
	},
	{
		label: "あなたが最も苦痛な事",
		radios: {
			name: "whatHurtsYouTheMost",
			value: RADIO_VALUES_TO_FIVE,
			personalitiesFirstLabel: [
				"表計算ソフトで数式を扱ったり、ミスなく事務処理すること",
				"難解な用語がたくさん出てくる技術書や資料を解読すること",
				"人前で発表をしたり、スピーチをすること",
				"初対面の人から話しかけられたり、相談されること",
				"自分が中心的な立場になれる見込みがないこと",
			],
		},
	},
	{
		label: "過去に最もやりがいを感じたこと",
		radios: {
			name: "whatMostRewardingThingInPast",
			value: RADIO_VALUES_TO_FIVE,
			personalitiesFirstLabel: [
				"自分の力で直接的に売り上げUP・コスト削減に貢献できたとき",
				"単純な作業でも、割り振られた仕事を完了できたとき",
				"人から直接「ありがとう」と声をかけてもらったとき",
				"習得した技術で、モノやサービスを生み出したとき",
				"自分の分析・提案によって、問題解決に至った時",
			],
		},
	},
];

export const personalitiesSecond = [
	{
		label: "どうやったら自分の目標や希望を叶えられるか、よく想像することがある",
		name: "imagineCanAchieveGoalAndAspirations",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "私は大抵、悪い出来事を避けることに意識を集中している",
		name: "focusPreventingBadThing",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "私は大抵、将来自分が成し遂げたいことに意識を集中している",
		name: "focusAccomplishInFuture",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "どうやったら失敗を防げるかについて、よく考える",
		name: "thinkCarefullyPreventMistake",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "私は、自分の理想を最優先し、夢や願望をかなえようと努力するタイプだと思う",
		name: "typeOfPersonEffortDreamDesire",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "自分の責任や役割を果たせていないのではないかと、よく心配になる",
		name: "worryNotFulfillingResponsibility",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "恐れている悪い出来事が自分に降りかかってくる様子を、よく想像する",
		name: "imagineBadEventComingMyWay",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "私は大抵、人生においてよい成果を得ることに意識を集中している",
		name: "focusAttentionGoodOutcome",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "職場（学校）での私は、自分の夢や理想・なりたい姿をかなえることを目指している",
		name: "aimDreamIdealAtWork",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "どうやったらよい成果が得られるかについて、よく考える",
		name: "thinkAchieveGoodResult",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "将来どんな人間になりたいかについて、よく考える。",
		name: "thinkKindOfPersonWantToBeInFuture",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "目標数字や理想とする成果を達成できないのではないかと、よく心配になる",
		name: "worryWillNotAchiveTargetNumber",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "こうなったらいいなと願っていることが叶う様子を、よく想像する",
		name: "imagineWishComeTrue",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "職場（学校）での私は、失敗を避けることに意識を集中している",
		name: "focusAvoidingFailureAtWork",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "自分が将来そうなってしまったらいやだと思う自分像について、よく考えることがある",
		name: "thinkImageIdLikeToHaveOfMyselfInFuture",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
	{
		label: "利益を得ることよりも、損失を避けることの方が重要だと思う",
		name: "thinkMoreImportantToAvoidLossesThanGainProfit",
		radios: {
			label: RADIO_LABELS_TO_SEVEN,
			value: RADIO_VALUES_TO_SEVEN,
		},
	},
];

export const answerList = [
	{
		value: "社員・職員として解答（社内向けアンケート）",
	},
	{
		value: "採用選考への応募者として解答（適性検査）",
	},
	{
		value: "その他",
	},
];
