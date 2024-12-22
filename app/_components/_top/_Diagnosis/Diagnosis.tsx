import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
/**
 * @date 2024/12/18
 * @todo 全てのバリデーションチェック完了。
 * 入力されたデータをクエリとして渡し、それを結果ページで受け取る - useSearchParams
 * handleSubmit内でuseRouter.push(結果ページ)にする。
 * ちゃんとuseRouter.push()でクエリにデータを渡せるようにする。
 * **/

import InHouse from "@/app/_components/_top/_Diagnosis/_Form/InHouse/InHouse";
import Applicants from "@/app/_components/_top/_Diagnosis/_Form/Applicants/Applicants";
import FirstSectionForm from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/FirstSectionForm";
import MovingPattern from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/MovingPattern";
import PersonalityType from "@/app/_components/_top/_Diagnosis/_Form/PersonalityType/PersonalityType";

import { inputNames, schema } from "@/app/data/formSchema";

const Diagnosis = () => {
	const router = useRouter();

	const ANSWER_AS_STUFF = "社員・職員として解答（社内向けアンケート）";
	const ANSWER_AS_RECRUIT = "採用選考への応募者として解答（適性検査）";

	const [isSecondMount, setIsSecondMount] = useState(false);

	/*FIRST SECTION START*/
	const [nameKanji, setNameKanji] = useState(schema.nameKanji.defaultValue);
	const [nameKanjiErrorMessage, setNameKanjiErrorMessage] = useState(schema.emptyErrorMessage);
	const [nameKatakana, setNameKatakana] = useState(schema.nameKatakana.defaultValue);
	const [nameKatakanaErrorMessage, setNameKatakanaErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [gender, setGender] = useState(schema.gender.defaultValue);
	const [genderErrorMessage, setGenderErrorMessage] = useState(schema.emptyErrorMessage);
	const [birthYear, setBirthYear] = useState(schema.birthYear.defaultValue);
	const [birthMonth, setBirthMonth] = useState(schema.birthMonth.defaultValue);
	const [birthDay, setBirthDay] = useState(schema.birthDay.defaultValue);
	const [address, setAddress] = useState(schema.address.defaultValue);
	const [email, setEmail] = useState(schema.email.defaultValue);
	const [emailErrorMessage, setEmailErrorMessage] = useState(schema.emptyErrorMessage);
	const [answerer, setAnswerer] = useState("");
	const [answererErrorMessage, setAnswererErrorMessage] = useState(schema.emptyErrorMessage);
	/*FIRST SECTION END*/
	/*SECOND SECTION START*/
	const [organization, setOrganization] = useState(schema.organization.defaultValue);
	const [organizationErrorMessage, setOrganizationErrorMessage] = useState("");
	const [organizationIndustry, setOrganizationIndustry] = useState(
		schema.organizationIndustry.defaultValue
	);
	const [department, setDepartment] = useState(schema.department.defaultValue);
	const [departmentErrorMessage, setDepartmentErrorMessage] = useState(schema.emptyErrorMessage);
	const [jobType, setJobType] = useState(schema.jobType.defaultValue);
	const [employmentStatus, setEmploymentStatus] = useState(schema.employmentStatus.defaultValue);
	const [passedYear, setPassedYear] = useState(schema.passedYear.defaultValue);
	const [employeeId, setEmployeeId] = useState("");
	/*SECOND SECTION END*/
	/*THIRD SECTION START*/
	const [applyOrganization, setApplyOrganization] = useState(schema.applyOrganization.defaultValue);
	const [applyOrganizationErrorMessage, setApplyOrganizationErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [applyOrganizationIndustry, setApplyOrganizationIndustry] = useState(
		schema.applyOrganizationIndustry.defaultValue
	);
	const [applyJobType, setApplyJobType] = useState(schema.applyJobType.defaultValue);
	const [applyEmploymentStatus, setApplyEmploymentStatus] = useState(
		schema.applyEmploymentStatus.defaultValue
	);
	const [phoneNumber, setPhoneNumber] = useState(schema.phoneNumber.defaultValue);
	const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState(schema.emptyErrorMessage);
	/*THIRD SECTION END*/
	/*FOURTH SECTION START*/
	const [canTalkStranger, setCanTalkStranger] = useState(schema.canTalkStranger.defaultValue);
	const [canTalkStrangerErrorMessage, setCanTalkStrangerErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [carePeopleComfortable, setCarePeopleComfortable] = useState(
		schema.carePeopleComfortable.defaultValue
	);
	const [carePeopleComfortableErrorMessage, setCarePeopleComfortableErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [doCreativeActivity, setDoCreativeActivity] = useState(
		schema.doCreativeActivity.defaultValue
	);
	const [doCreativeActivityErrorMessage, setDoCreativeActivityErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [prepareAdvance, setPrepareAdvance] = useState(schema.prepareAdvance.defaultValue);
	const [prepareAdvanceErrorMessage, setPrepareAdvanceErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [feelingDownDepressed, setFeelingDownDepressed] = useState(
		schema.feelingDownDepressed.defaultValue
	);
	const [feelingDownDepressedErrorMessage, setFeelingDownDepressedErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [likeOrganizeParty, setLikeOrganizeParty] = useState(schema.likeOrganizeParty.defaultValue);
	const [likeOrganizePartyErrorMessage, setLikeOrganizePartyErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [proneArgument, setProneArgument] = useState(schema.proneArgument.defaultValue);
	const [proneArgumentErrorMessage, setProneArgumentErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [likePhilosophicalSpiritual, setLikePhilosophicalSpiritual] = useState(
		schema.likePhilosophicalSpiritual.defaultValue
	);
	const [likePhilosophicalSpiritualErrorMessage, setLikePhilosophicalSpiritualErrorMessage] =
		useState(schema.emptyErrorMessage);
	const [dislikeOrganizingThoughts, setDislikeOrganizingThoughts] = useState(
		schema.dislikeOrganizingThoughts.defaultValue
	);
	const [dislikeOrganizingThoughtsErrorMessage, setDislikeOrganizingThoughtsErrorMessage] =
		useState(schema.emptyErrorMessage);
	const [feelingStressedOrAnxious, setFeelingStressedOrAnxious] = useState(
		schema.feelingStressedOrAnxious.defaultValue
	);
	const [feelingStressedOrAnxiousErrorMessage, setFeelingStressedOrAnxiousErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [oftenUseDifficultWord, setOftenUseDifficultWord] = useState(
		schema.oftenUseDifficultWord.defaultValue
	);
	const [oftenUseDifficultWordErrorMessage, setOftenUseDifficultWordErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [considerPrioritizeOthers, setConsiderPrioritizeOthers] = useState(
		schema.considerPrioritizeOthers.defaultValue
	);
	const [considerPrioritizeOthersErrorMessage, setConsiderPrioritizeOthersErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [contributeMoreTeamMoreOthers, setContributeMoreTeamMoreOthers] = useState(
		schema.contributeMoreTeamMoreOthers.defaultValue
	);
	const [contributeMoreTeamMoreOthersErrorMessage, setContributeMoreTeamMoreOthersErrorMessage] =
		useState(schema.emptyErrorMessage);
	const [satisfiCurrentJobAndSituation, setSatisfiCurrentJobAndSituation] = useState(
		schema.satisfiCurrentJobAndSituation.defaultValue
	);
	const [satisfiCurrentJobAndSituationErrorMessage, setSatisfiCurrentJobAndSituationErrorMessage] =
		useState(schema.emptyErrorMessage);
	/*FOURTH SECTION END*/
	/*FIFTH SECTION START*/
	const [whatBest, setWhatBest] = useState(schema.whatBest.defaultValue);
	const [whatBestErrorMessage, setWhatBestErrorMessage] = useState(schema.emptyErrorMessage);
	const [whatHurt, setWhatHurt] = useState(schema.wharHurt.defaultValue);
	const [whatHurtErrorMessage, setWhatHurtErrorMessage] = useState(schema.emptyErrorMessage);
	const [whatRewardingInPast, setWhatRewardingInPast] = useState(
		schema.whatRewardingInPast.defaultValue
	);
	const [whatRewardingInPastErrorMessage, setWhatRewardingInPastErrorMessage] = useState(
		schema.emptyErrorMessage
	);
	const [imagineAchieveGoal, setImagineAchieveGoal] = useState(
		schema.imagineAchieveGoal.defaultValue
	);
	const [imagineAchieveGoalErrorMessage, setImagineAchieveGoalErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [focusPreventingBadThings, setFocusPreventingBadThings] = useState(
		schema.focusPreventingBadThings.defaultValue
	);
	const [focusPreventingBadThingsErrorMessage, setFocusPreventingBadThingsErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [focusAccomplishInFuture, setFocusAccomplishInFuture] = useState(
		schema.focusAccomplishInFuture.defaultValue
	);
	const [focusAccomplishInFutureErrorMessage, setFocusAccomplishInFutureErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [thinkPreventFailure, setThinkPreventFailure] = useState(
		schema.thinkPreventFailure.defaultValue
	);
	const [thinkPreventFailureErrorMessage, setThinkPreventFailureErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [thinkMyTypeIsEffortToDream, setThinkMyTypeIsEffortToDream] = useState(
		schema.thinkMyTypeIsEffortToDream.defaultValue
	);
	const [thinkMyTypeIsEffortToDreamErrorMessage, setThinkMyTypeIsEffortToDreamErrorMessage] =
		useState(schema.emptyErrorMessage);

	const [worryDoNotResponsibilitiesRole, setWorryDoNotResponsibilitiesRole] = useState(
		schema.worryDoNotResponsibilitiesRole.defaultValue
	);
	const [
		worryDoNotResponsibilitiesRoleErrorMessage,
		setWorryDoNotResponsibilitiesRoleErrorMessage,
	] = useState(schema.emptyErrorMessage);

	const [imagineBadThingsToMe, setImagineBadThingsToMe] = useState(
		schema.imagineBadThingsToMe.defaultValue
	);
	const [imagineBadThingsToMeErrorMessage, setImagineBadThingsToMeErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [focusAchieveGoodResult, setFocusAchieveGoodResult] = useState(
		schema.focusAchieveGoodResult.defaultValue
	);
	const [focusAchieveGoodResultErrorMessage, setFocusAchieveGoodResultErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [aimAchieveDream, setAimAchieveDream] = useState(schema.aimAchieveDream.defaultValue);
	const [aimAchieveDreamErrorMessage, setAimAchieveDreamErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [thinkAchieveGoodResult, setThinkAchieveGoodResult] = useState(
		schema.thinkAchieveGoodResult.defaultValue
	);
	const [thinkAchieveGoodResultErrorMessage, setThinkAchieveGoodResultErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [thinkKindOfPersonInFuture, setThinkKindOfPersonInFuture] = useState(
		schema.thinkKindOfPersonInFuture.defaultValue
	);
	const [thinkKindOfPersonInFutureErrorMessage, setThinkKindOfPersonInFutureErrorMessage] =
		useState(schema.emptyErrorMessage);

	const [worryWillNotAchieveNumericalGoal, setWorryWillNotAchieveNumericalGoal] = useState(
		schema.worryWillNotAchieveNumericalGoal.defaultValue
	);
	const [
		worryWillNotAchieveNumericalGoalErrorMessage,
		setWorryWillNotAchieveNumericalGoalErrorMessage,
	] = useState(schema.emptyErrorMessage);

	const [imagineWishesComingTrue, setImagineWishesComingTrue] = useState(
		schema.imagineWishesComingTrue.defaultValue
	);
	const [imagineWishesCominTrueErrorMessage, setImagineWishesCominTrueErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [focusAvoidingFailure, setFocusAvoidingFailure] = useState(
		schema.focusAvoidingFailure.defaultValue
	);
	const [focusAvoidingFailureErrorMessage, setFocusAvoidingFailureErrorMessage] = useState(
		schema.emptyErrorMessage
	);

	const [thinkKindOfPersonHateBecomeInFuture, setThinkKindOfPersonHateBecomeInFuture] = useState(
		schema.thinkKindOfPersonHateBecomeInFuture.defaultValue
	);
	const [
		thinkKindOfPersonHateBecomeInFutureErrorMessage,
		setThinkKindOfPersonHateBecomeInFutureErrorMessage,
	] = useState(schema.emptyErrorMessage);

	const [thinkImportantGainsThanAvoidingLosses, setThinkImportantGainsThanAvoidingLosses] =
		useState(schema.thinkImportantGainsThanAvoidingLosses.defaultValue);
	const [
		thinkImportantGainsThanAvoidingLossesErrorMessage,
		setThinkImportantGainsThanAvoidingLossesErrorMessage,
	] = useState(schema.emptyErrorMessage);
	/*FIFTH SECTION END*/

	/**
	 * @description 全ての状態変数をログに流す関数。
	 * **/
	const logAllData = () => {
		console.log({
			nameKanji,
			nameKatakana,
			gender,
			birthYear,
			birthMonth,
			birthDay,
			address,
			email,
			answerer,
			organization,
			organizationIndustry,
			department,
			jobType,
			employmentStatus,
			passedYear,
			employeeId,
			applyOrganization,
			applyOrganizationIndustry,
			applyJobType,
			applyEmploymentStatus,
			phoneNumber,
			canTalkStranger,
			carePeopleComfortable,
			doCreativeActivity,
			prepareAdvance,
			feelingDownDepressed,
			likeOrganizeParty,
			proneArgument,
			likePhilosophicalSpiritual,
			dislikeOrganizingThoughts,
			feelingStressedOrAnxious,
			oftenUseDifficultWord,
			considerPrioritizeOthers,
			contributeMoreTeamMoreOthers,
			satisfiCurrentJobAndSituation,
			whatBest,
			whatHurt,
			whatRewardingInPast,
			imagineAchieveGoal,
			focusPreventingBadThings,
			focusAccomplishInFuture,
			thinkPreventFailure,
			thinkMyTypeIsEffortToDream,
			worryDoNotResponsibilitiesRole,
			imagineBadThingsToMe,
			focusAchieveGoodResult,
			aimAchieveDream,
			thinkAchieveGoodResult,
			thinkKindOfPersonInFuture,
			worryWillNotAchieveNumericalGoal,
			imagineWishesComingTrue,
			focusAvoidingFailure,
			thinkKindOfPersonHateBecomeInFuture,
			thinkImportantGainsThanAvoidingLosses,
		});
	};
	logAllData();

	const isSuccessFirst: () => boolean = () => {
		if (
			validateEmail() &&
			validateNameKanji() &&
			validateNameKatakana() &&
			validateBackground(answerer)
		) {
			return true;
		} else {
			return false;
		}
	};
	const isSuccessSecond: () => boolean = () => {
		if (validateOrganization() && validateDepartment()) {
			return true;
		} else {
			return false;
		}
	};
	const isSuccessThird: () => boolean = () => {
		if (validateApplyOrganization() && validatePhoneNumber()) {
			return true;
		} else {
			return false;
		}
	};

	const isSuccessFourth: () => boolean = () => {
		if (
			validateCanTalkStranger() &&
			validateCarePeopleComfortable() &&
			validateDoCreativeActivity() &&
			validatePrepareAdvance() &&
			validateFeelingDownDepressed() &&
			validateLikeOrganizeParty() &&
			validateProneArgument() &&
			validateLikePhilosophicalSpiritual() &&
			validateDislikeOrganizingThoughts() &&
			validateFeelingStressedOrAnxious() &&
			validateOftenUseDifficultWord() &&
			validateConsiderPrioritizeOthers() &&
			validateContributeMoreTeamMoreOthers() &&
			validateSatisfiCurrentJobAndSituation() &&
			validateGender()
		) {
			return true;
		} else {
			return false;
		}
	};

	const isSuccessFifth: () => boolean = () => {
		if (
			validateWhatBest() &&
			validateWhatHurt() &&
			validateWhatRewardingInPast() &&
			validateImagineAchieveGoal() &&
			validateFocusPreventingBadThings() &&
			validateFocusAccomplishInFuture() &&
			validateThinkPreventFailure() &&
			validateThinkMyTypeIsEffortToDream() &&
			validateWorryDoNotResponsibilitiesRole() &&
			validateImagineBadThingsToMe() &&
			validateFocusAchieveGoodResult() &&
			validateAimAchieveDream() &&
			validateThinkAchieveGoodResult() &&
			validateThinkKindOfPersonInFuture() &&
			validateWorryWillNotAchieveNumericalGoal() &&
			validateImagineWishesComingTrue() &&
			validateFocusAvoidingFailure() &&
			validateThinkKindOfPersonHateBecomeInFuture() &&
			validateThinkImportantGainsThanAvoidingLosses()
		) {
			return true;
		} else {
			return false;
		}
	};

	const isAllAnswered: (answerer: string) => boolean = (answerer: string) => {
		// どれか一つでも入力がされていなければ早期リターン
		if (!isSuccessFirst() || !isSuccessFourth() || !isSuccessFifth()) return false;

		if (answerer === ANSWER_AS_STUFF) {
			if (isSuccessSecond()) {
				return true;
			}
		} else if (answerer === ANSWER_AS_RECRUIT) {
			if (isSuccessThird()) {
				return true;
			}
		} else {
			return true;
		}
		return false;
	};

	/**
	 * @param {string} str チェックする文字列
	 * @return {boolean} 空文字だったらtrue。そうでなければfalse
	 * **/
	const isZeroLength = (str: string): boolean => {
		if (str === "") {
			return true;
		}
		return false;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isAllAnswered(answerer)) {
			/*FIRST START*/
			validateEmail();
			validateNameKanji();
			validateNameKatakana();
			validateBackground(answerer);
			/*FIRST END*/
			/*SECOND START*/
			validateOrganization();
			validateDepartment();
			/*SECOND END*/
			/*THIRD START*/
			validateApplyOrganization();
			validatePhoneNumber();
			/*THIRD END*/
			/*FOURTH START*/
			validateCanTalkStranger();
			validateCarePeopleComfortable();
			validateDoCreativeActivity();
			validatePrepareAdvance();
			validateFeelingDownDepressed();
			validateLikeOrganizeParty();
			validateProneArgument();
			validateLikePhilosophicalSpiritual();
			validateDislikeOrganizingThoughts();
			validateFeelingStressedOrAnxious();
			validateOftenUseDifficultWord();
			validateConsiderPrioritizeOthers();
			validateContributeMoreTeamMoreOthers();
			validateSatisfiCurrentJobAndSituation();
			validateGender();
			/*FOURTH END*/
			/*FIFTH START*/
			validateWhatBest();
			validateWhatHurt();
			validateWhatRewardingInPast();
			validateImagineAchieveGoal();
			validateFocusPreventingBadThings();
			validateFocusAccomplishInFuture();
			validateThinkPreventFailure();
			validateThinkMyTypeIsEffortToDream();
			validateWorryDoNotResponsibilitiesRole();
			validateImagineBadThingsToMe();
			validateFocusAchieveGoodResult();
			validateAimAchieveDream();
			validateThinkAchieveGoodResult();
			validateThinkKindOfPersonInFuture();
			validateWorryWillNotAchieveNumericalGoal();
			validateImagineWishesComingTrue();
			validateFocusAvoidingFailure();
			validateThinkKindOfPersonHateBecomeInFuture();
			validateThinkImportantGainsThanAvoidingLosses();
			/*FIFTH END*/
		} else {
			const firstSectionQuery = `${inputNames.gender}=${gender}`;
			// const secondSectionQuery = `${inputNames.organization}=${organization}&${inputNames.organizationIndustry}=${organizationIndustry}&${inputNames.department}=${department}&${inputNames.jobType}=${jobType}&${inputNames.employmentStatus}=${employmentStatus}&${inputNames.passedYear}=${passedYear}&${employeeId}=${employeeId}`;
			// const thirdSectionQuery = `${inputNames.applyOrganization}=${applyOrganization}&${inputNames.applyOrganizationIndustry}=${applyOrganizationIndustry}&${inputNames.applyJobType}=${applyJobType}&${inputNames.applyEmploymentStatus}=${applyEmploymentStatus}&${inputNames.phoneNumber}=${phoneNumber}`;
			const fourthSectionQuery = `${inputNames.canTalkStranger}=${canTalkStranger}&${inputNames.carePeopleComfortable}=${carePeopleComfortable}&${inputNames.doCreativeActivity}=${doCreativeActivity}&${inputNames.prepareAdvance}=${prepareAdvance}&${inputNames.feelingDownDepressed}=${feelingDownDepressed}&${inputNames.likeOrganizeParty}=${likeOrganizeParty}&${inputNames.proneArgument}=${proneArgument}&${inputNames.likePhilosophicalSpiritual}=${likePhilosophicalSpiritual}&${inputNames.dislikeOrganizingThoughts}=${dislikeOrganizingThoughts}&${inputNames.feelingStressedOrAnxious}=${feelingStressedOrAnxious}&${inputNames.oftenUseDifficultWord}=${oftenUseDifficultWord}&${inputNames.considerPrioritizeOthers}=${considerPrioritizeOthers}&${inputNames.contributeMoreTeamMoreOthers}=${contributeMoreTeamMoreOthers}&${inputNames.satisfiCurrentJobAndSituation}=${satisfiCurrentJobAndSituation}`;
			const fifthFirstSectionQuery = `${inputNames.whatBest}=${whatBest}&${inputNames.wharHurt}=${whatHurt}&${inputNames.whatRewardingInPast}=${whatRewardingInPast}`;
			const fifthSecondSectionQuery = `${inputNames.imagineAchieveGoal}=${imagineAchieveGoal}&${inputNames.focusPreventingBadThings}=${focusPreventingBadThings}&${inputNames.focusAccomplishInFuture}=${focusAccomplishInFuture}&${inputNames.thinkPreventFailure}=${thinkPreventFailure}&${inputNames.thinkMyTypeIsEffortToDream}=${thinkMyTypeIsEffortToDream}&${inputNames.worryDoNotResponsibilitiesRole}=${worryDoNotResponsibilitiesRole}&${inputNames.imagineBadThingsToMe}=${imagineBadThingsToMe}&${inputNames.focusAchieveGoodResult}=${focusAchieveGoodResult}&${inputNames.aimAchieveDream}=${aimAchieveDream}&${inputNames.thinkAchieveGoodResult}=${thinkAchieveGoodResult}&${inputNames.thinkKindOfPersonInFuture}=${thinkKindOfPersonInFuture}&${inputNames.worryWillNotAchieveNumericalGoal}=${worryWillNotAchieveNumericalGoal}&${inputNames.imagineWishesComingTrue}=${imagineWishesComingTrue}&${inputNames.focusAvoidingFailure}=${focusAvoidingFailure}&${inputNames.thinkKindOfPersonHateBecomeInFuture}=${thinkKindOfPersonHateBecomeInFuture}&${inputNames.thinkImportantGainsThanAvoidingLosses}=${thinkImportantGainsThanAvoidingLosses}`;
			if (answerer === ANSWER_AS_STUFF) {
				router.push(
					`/result?${firstSectionQuery}&${fourthSectionQuery}&${fifthFirstSectionQuery}&${fifthSecondSectionQuery}`
				);
				return;
			} else if (answerer === ANSWER_AS_RECRUIT) {
				router.push(
					`/result?${firstSectionQuery}&${fourthSectionQuery}&${fifthFirstSectionQuery}&${fifthSecondSectionQuery}`
				);
				return;
			}
			router.push(
				`/result?${firstSectionQuery}&${fourthSectionQuery}&${fifthFirstSectionQuery}&${fifthSecondSectionQuery}`
			);
		}
	};

	const validateEmail: () => boolean = () => {
		// const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (email.length < schema.email.min.value) {
			setEmailErrorMessage(schema.email.min.message);
			return false;
		} else {
			setEmailErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateNameKanji: () => boolean = () => {
		if (nameKanji.length < schema.nameKanji.min.value) {
			setNameKanjiErrorMessage(schema.nameKanji.min.message);
			return false;
		} else {
			setNameKanjiErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateNameKatakana: () => boolean = () => {
		if (nameKatakana.length < schema.nameKatakana.min.value) {
			setNameKatakanaErrorMessage(schema.nameKatakana.min.message);
			return false;
		} else {
			setNameKatakanaErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateBackground: (answerer: string) => boolean = (answerer: string) => {
		const answererIndex = schema.background.values.indexOf(answerer);
		if (answererIndex < 0) {
			setAnswererErrorMessage(schema.background.message);
			return false;
		} else {
			setAnswererErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateOrganization: () => boolean = () => {
		if (organization.length < schema.organization.min.value) {
			setOrganizationErrorMessage(schema.organization.min.message);
			return false;
		} else {
			setOrganizationErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateDepartment: () => boolean = () => {
		if (department.length < schema.department.min.value) {
			setDepartmentErrorMessage(schema.department.min.message);
			return false;
		} else {
			setDepartmentErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateApplyOrganization: () => boolean = () => {
		if (applyOrganization.length < schema.applyOrganization.min.value) {
			setApplyOrganizationErrorMessage(schema.applyOrganization.min.message);
			return false;
		} else {
			setApplyOrganizationErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validatePhoneNumber: () => boolean = () => {
		const newPhoneRegExp = /^0[5789]0-?\d{4}-?\d{4}$/g;
		const oldPhoneRegExp = /^\d{2,4}-?\d{2,4}-?\d{4}$/g;

		const newP = phoneNumber.match(newPhoneRegExp);
		const oldP = phoneNumber.match(oldPhoneRegExp);

		if (!oldP || !newP) {
			setPhoneNumberErrorMessage("電話番号を正しく入力してください");
			return false;
		} else {
			setPhoneNumberErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateCanTalkStranger: () => boolean = () => {
		if (isZeroLength(canTalkStranger)) {
			setCanTalkStrangerErrorMessage(schema.canTalkStranger.message);
			return false;
		} else {
			setCanTalkStrangerErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateCarePeopleComfortable: () => boolean = () => {
		if (isZeroLength(carePeopleComfortable)) {
			setCarePeopleComfortableErrorMessage(schema.carePeopleComfortable.message);
			return false;
		} else {
			setCarePeopleComfortableErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateDoCreativeActivity: () => boolean = () => {
		if (isZeroLength(doCreativeActivity)) {
			setDoCreativeActivityErrorMessage(schema.doCreativeActivity.message);
			return false;
		} else {
			setDoCreativeActivityErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validatePrepareAdvance: () => boolean = () => {
		if (isZeroLength(prepareAdvance)) {
			setPrepareAdvanceErrorMessage(schema.prepareAdvance.message);
			return false;
		} else {
			setPrepareAdvanceErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateFeelingDownDepressed: () => boolean = () => {
		if (isZeroLength(feelingDownDepressed)) {
			setFeelingDownDepressedErrorMessage(schema.feelingDownDepressed.message);
			return false;
		} else {
			setFeelingDownDepressedErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateLikeOrganizeParty: () => boolean = () => {
		if (isZeroLength(likeOrganizeParty)) {
			setLikeOrganizePartyErrorMessage(schema.likeOrganizeParty.message);
			return false;
		} else {
			setLikeOrganizePartyErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateProneArgument: () => boolean = () => {
		if (isZeroLength(proneArgument)) {
			setProneArgumentErrorMessage(schema.proneArgument.message);
			return false;
		} else {
			setProneArgumentErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateLikePhilosophicalSpiritual: () => boolean = () => {
		if (isZeroLength(likePhilosophicalSpiritual)) {
			setLikePhilosophicalSpiritualErrorMessage(schema.likePhilosophicalSpiritual.message);
			return false;
		} else {
			setLikePhilosophicalSpiritualErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateDislikeOrganizingThoughts: () => boolean = () => {
		if (isZeroLength(dislikeOrganizingThoughts)) {
			setDislikeOrganizingThoughtsErrorMessage(schema.dislikeOrganizingThoughts.message);
			return false;
		} else {
			setDislikeOrganizingThoughtsErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateFeelingStressedOrAnxious: () => boolean = () => {
		if (isZeroLength(feelingStressedOrAnxious)) {
			setFeelingStressedOrAnxiousErrorMessage(schema.feelingStressedOrAnxious.message);
			return false;
		} else {
			setFeelingStressedOrAnxiousErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateOftenUseDifficultWord: () => boolean = () => {
		if (isZeroLength(oftenUseDifficultWord)) {
			setOftenUseDifficultWordErrorMessage(schema.oftenUseDifficultWord.message);
			return false;
		} else {
			setOftenUseDifficultWordErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateConsiderPrioritizeOthers: () => boolean = () => {
		if (isZeroLength(considerPrioritizeOthers)) {
			setConsiderPrioritizeOthersErrorMessage(schema.considerPrioritizeOthers.message);
			return false;
		} else {
			setConsiderPrioritizeOthersErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateContributeMoreTeamMoreOthers: () => boolean = () => {
		if (isZeroLength(contributeMoreTeamMoreOthers)) {
			setContributeMoreTeamMoreOthersErrorMessage(schema.contributeMoreTeamMoreOthers.message);
			return false;
		} else {
			setContributeMoreTeamMoreOthersErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateSatisfiCurrentJobAndSituation: () => boolean = () => {
		if (isZeroLength(satisfiCurrentJobAndSituation)) {
			setSatisfiCurrentJobAndSituationErrorMessage(schema.satisfiCurrentJobAndSituation.message);
			return false;
		} else {
			setSatisfiCurrentJobAndSituationErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateGender: () => boolean = () => {
		if (isZeroLength(gender)) {
			setGenderErrorMessage(schema.gender.message);
			return false;
		} else {
			setGenderErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateWhatBest: () => boolean = () => {
		if (isZeroLength(whatBest)) {
			setWhatBestErrorMessage(schema.whatBest.message);
			return false;
		} else {
			setWhatBestErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateWhatHurt: () => boolean = () => {
		if (isZeroLength(whatBest)) {
			setWhatHurtErrorMessage(schema.wharHurt.message);
			return false;
		} else {
			setWhatHurtErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateWhatRewardingInPast: () => boolean = () => {
		if (isZeroLength(whatBest)) {
			setWhatRewardingInPastErrorMessage(schema.whatRewardingInPast.message);
			return false;
		} else {
			setWhatRewardingInPastErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};
	const validateImagineAchieveGoal: () => boolean = () => {
		if (isZeroLength(imagineAchieveGoal)) {
			setImagineAchieveGoalErrorMessage(schema.imagineAchieveGoal.message);
			return false;
		} else {
			setImagineAchieveGoalErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateFocusPreventingBadThings: () => boolean = () => {
		if (isZeroLength(focusPreventingBadThings)) {
			setFocusPreventingBadThingsErrorMessage(schema.focusPreventingBadThings.message);
			return false;
		} else {
			setFocusPreventingBadThingsErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateFocusAccomplishInFuture: () => boolean = () => {
		if (isZeroLength(focusAccomplishInFuture)) {
			setFocusAccomplishInFutureErrorMessage(schema.focusAccomplishInFuture.message);
			return false;
		} else {
			setFocusAccomplishInFutureErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateThinkPreventFailure: () => boolean = () => {
		if (isZeroLength(thinkPreventFailure)) {
			setThinkPreventFailureErrorMessage(schema.thinkPreventFailure.message);
			return false;
		} else {
			setThinkPreventFailureErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateThinkMyTypeIsEffortToDream: () => boolean = () => {
		if (isZeroLength(thinkMyTypeIsEffortToDream)) {
			setThinkMyTypeIsEffortToDreamErrorMessage(schema.thinkMyTypeIsEffortToDream.message);
			return false;
		} else {
			setThinkMyTypeIsEffortToDreamErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateWorryDoNotResponsibilitiesRole: () => boolean = () => {
		if (isZeroLength(worryDoNotResponsibilitiesRole)) {
			setWorryDoNotResponsibilitiesRoleErrorMessage(schema.worryDoNotResponsibilitiesRole.message);
			return false;
		} else {
			setWorryDoNotResponsibilitiesRoleErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateImagineBadThingsToMe: () => boolean = () => {
		if (isZeroLength(imagineBadThingsToMe)) {
			setImagineBadThingsToMeErrorMessage(schema.imagineBadThingsToMe.message);
			return false;
		} else {
			setImagineBadThingsToMeErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateFocusAchieveGoodResult: () => boolean = () => {
		if (isZeroLength(focusAchieveGoodResult)) {
			setFocusAchieveGoodResultErrorMessage(schema.focusAchieveGoodResult.message);
			return false;
		} else {
			setFocusAchieveGoodResultErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateAimAchieveDream: () => boolean = () => {
		if (isZeroLength(aimAchieveDream)) {
			setAimAchieveDreamErrorMessage(schema.aimAchieveDream.message);
			return false;
		} else {
			setAimAchieveDreamErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateThinkAchieveGoodResult: () => boolean = () => {
		if (isZeroLength(thinkAchieveGoodResult)) {
			setThinkAchieveGoodResultErrorMessage(schema.thinkAchieveGoodResult.message);
			return false;
		} else {
			setThinkAchieveGoodResultErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateThinkKindOfPersonInFuture: () => boolean = () => {
		if (isZeroLength(thinkKindOfPersonInFuture)) {
			setThinkKindOfPersonInFutureErrorMessage(schema.thinkKindOfPersonInFuture.message);
			return false;
		} else {
			setThinkKindOfPersonInFutureErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateWorryWillNotAchieveNumericalGoal: () => boolean = () => {
		if (isZeroLength(worryWillNotAchieveNumericalGoal)) {
			setWorryWillNotAchieveNumericalGoalErrorMessage(
				schema.worryWillNotAchieveNumericalGoal.message
			);
			return false;
		} else {
			setWorryWillNotAchieveNumericalGoalErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateImagineWishesComingTrue: () => boolean = () => {
		if (isZeroLength(imagineWishesComingTrue)) {
			setImagineWishesCominTrueErrorMessage(schema.imagineWishesComingTrue.message);
			return false;
		} else {
			setImagineWishesCominTrueErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateFocusAvoidingFailure: () => boolean = () => {
		if (isZeroLength(focusAvoidingFailure)) {
			setFocusAvoidingFailureErrorMessage(schema.focusAvoidingFailure.message);
			return false;
		} else {
			setFocusAvoidingFailureErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateThinkKindOfPersonHateBecomeInFuture: () => boolean = () => {
		if (isZeroLength(thinkKindOfPersonHateBecomeInFuture)) {
			setThinkKindOfPersonHateBecomeInFutureErrorMessage(
				schema.thinkKindOfPersonHateBecomeInFuture.message
			);
			return false;
		} else {
			setThinkKindOfPersonHateBecomeInFutureErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	const validateThinkImportantGainsThanAvoidingLosses: () => boolean = () => {
		if (isZeroLength(thinkImportantGainsThanAvoidingLosses)) {
			setThinkImportantGainsThanAvoidingLossesErrorMessage(
				schema.thinkImportantGainsThanAvoidingLosses.message
			);
			return false;
		} else {
			setThinkImportantGainsThanAvoidingLossesErrorMessage(schema.emptyErrorMessage);
			return true;
		}
	};

	// EMAIL EFFECT
	useEffect(() => {
		if (!isSecondMount) return;
		validateEmail();
	}, [email]);

	// NAME_KANJI EFFECT
	useEffect(() => {
		if (!isSecondMount) return;
		validateNameKanji();
	}, [nameKanji]);

	// NAME_KATAKANA EFFECT
	useEffect(() => {
		if (!isSecondMount) return;
		validateNameKatakana();
	}, [nameKatakana]);

	// BACKGROUND EFFECT
	useEffect(() => {
		if (!isSecondMount) return;
		validateBackground(answerer);
	}, [answerer]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateOrganization();
	}, [organization]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateDepartment();
	}, [department]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateApplyOrganization();
	}, [applyOrganization]);

	useEffect(() => {
		if (!isSecondMount) return;
		validatePhoneNumber();
	}, [phoneNumber]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateCanTalkStranger();
	}, [canTalkStranger]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateCarePeopleComfortable();
	}, [carePeopleComfortable]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateDoCreativeActivity();
	}, [doCreativeActivity]);

	useEffect(() => {
		if (!isSecondMount) return;
		validatePrepareAdvance();
	}, [prepareAdvance]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateFeelingDownDepressed();
	}, [feelingDownDepressed]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateLikeOrganizeParty();
	}, [likeOrganizeParty]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateProneArgument();
	}, [proneArgument]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateLikePhilosophicalSpiritual();
	}, [likePhilosophicalSpiritual]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateDislikeOrganizingThoughts();
	}, [dislikeOrganizingThoughts]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateFeelingStressedOrAnxious();
	}, [feelingStressedOrAnxious]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateOftenUseDifficultWord();
	}, [oftenUseDifficultWord]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateConsiderPrioritizeOthers();
	}, [considerPrioritizeOthers]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateContributeMoreTeamMoreOthers();
	}, [contributeMoreTeamMoreOthers]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateSatisfiCurrentJobAndSituation();
	}, [satisfiCurrentJobAndSituation]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateGender();
	}, [gender]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateWhatBest();
	}, [whatBest]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateWhatHurt();
	}, [whatHurt]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateWhatRewardingInPast();
	}, [whatRewardingInPast]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateImagineAchieveGoal();
	}, [imagineAchieveGoal]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateFocusPreventingBadThings();
	}, [focusPreventingBadThings]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateFocusAccomplishInFuture();
	}, [focusAccomplishInFuture]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateThinkPreventFailure();
	}, [thinkPreventFailure]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateThinkMyTypeIsEffortToDream();
	}, [thinkMyTypeIsEffortToDream]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateWorryDoNotResponsibilitiesRole();
	}, [worryDoNotResponsibilitiesRole]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateImagineBadThingsToMe();
	}, [imagineBadThingsToMe]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateFocusAchieveGoodResult();
	}, [focusAchieveGoodResult]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateAimAchieveDream();
	}, [aimAchieveDream]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateThinkAchieveGoodResult();
	}, [thinkAchieveGoodResult]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateThinkKindOfPersonInFuture();
	}, [thinkKindOfPersonInFuture]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateWorryWillNotAchieveNumericalGoal();
	}, [worryWillNotAchieveNumericalGoal]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateImagineWishesComingTrue();
	}, [imagineWishesComingTrue]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateFocusAvoidingFailure();
	}, [focusAvoidingFailure]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateThinkKindOfPersonHateBecomeInFuture();
	}, [thinkKindOfPersonHateBecomeInFuture]);

	useEffect(() => {
		if (!isSecondMount) return;
		validateThinkImportantGainsThanAvoidingLosses();
	}, [thinkImportantGainsThanAvoidingLosses]);

	useEffect(() => {
		setIsSecondMount(true);
	}, []);

	return (
		<section className='w-[90%] mx-auto max-w-screen-sm'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-y-4'
			>
				<FirstSectionForm
					setFunctions={[
						setEmail,
						setNameKanji,
						setNameKatakana,
						setGender,
						setBirthYear,
						setBirthMonth,
						setBirthDay,
						setAddress,
						setAddress,
					]}
					errorMessages={[
						emailErrorMessage,
						nameKanjiErrorMessage,
						nameKatakanaErrorMessage,
						answererErrorMessage,
						genderErrorMessage,
					]}
					answerer={answerer}
					setAnswerer={setAnswerer}
				/>
				{answerer === ANSWER_AS_STUFF && (
					<InHouse
						errorMessages={[organizationErrorMessage, departmentErrorMessage]}
						setFunctions={[
							setOrganization,
							setOrganizationIndustry,
							setDepartment,
							setEmployeeId,
							setJobType,
							setEmploymentStatus,
							setPassedYear,
						]}
					/>
				)}
				{answerer === ANSWER_AS_RECRUIT && (
					<Applicants
						errorMessages={[applyOrganizationErrorMessage, phoneNumberErrorMessage]}
						setFunctions={[
							setApplyOrganization,
							setApplyOrganizationIndustry,
							setApplyJobType,
							setApplyEmploymentStatus,
							setPhoneNumber,
						]}
					/>
				)}
				<MovingPattern
					setFunctions={[
						setCanTalkStranger,
						setCarePeopleComfortable,
						setDoCreativeActivity,
						setPrepareAdvance,
						setFeelingDownDepressed,
						setLikeOrganizeParty,
						setProneArgument,
						setLikePhilosophicalSpiritual,
						setDislikeOrganizingThoughts,
						setFeelingStressedOrAnxious,
						setOftenUseDifficultWord,
						setConsiderPrioritizeOthers,
						setContributeMoreTeamMoreOthers,
						setSatisfiCurrentJobAndSituation,
					]}
					errorMessages={[
						canTalkStrangerErrorMessage,
						carePeopleComfortableErrorMessage,
						doCreativeActivityErrorMessage,
						prepareAdvanceErrorMessage,
						feelingDownDepressedErrorMessage,
						likeOrganizePartyErrorMessage,
						proneArgumentErrorMessage,
						likePhilosophicalSpiritualErrorMessage,
						dislikeOrganizingThoughtsErrorMessage,
						feelingStressedOrAnxiousErrorMessage,
						oftenUseDifficultWordErrorMessage,
						considerPrioritizeOthersErrorMessage,
						contributeMoreTeamMoreOthersErrorMessage,
						satisfiCurrentJobAndSituationErrorMessage,
					]}
				/>
				<PersonalityType
					setFunctionsFirst={[setWhatBest, setWhatHurt, setWhatRewardingInPast]}
					errorMessagesFirst={[
						whatBestErrorMessage,
						whatHurtErrorMessage,
						whatRewardingInPastErrorMessage,
					]}
					setFunctionsSecond={[
						setImagineAchieveGoal,
						setFocusPreventingBadThings,
						setFocusAccomplishInFuture,
						setThinkPreventFailure,
						setThinkMyTypeIsEffortToDream,
						setWorryDoNotResponsibilitiesRole,
						setImagineBadThingsToMe,
						setFocusAchieveGoodResult,
						setAimAchieveDream,
						setThinkAchieveGoodResult,
						setThinkKindOfPersonInFuture,
						setWorryWillNotAchieveNumericalGoal,
						setImagineWishesComingTrue,
						setFocusAvoidingFailure,
						setThinkKindOfPersonHateBecomeInFuture,
						setThinkImportantGainsThanAvoidingLosses,
					]}
					errorMessagesSecond={[
						imagineAchieveGoalErrorMessage,
						focusPreventingBadThingsErrorMessage,
						focusAccomplishInFutureErrorMessage,
						thinkPreventFailureErrorMessage,
						thinkMyTypeIsEffortToDreamErrorMessage,
						worryDoNotResponsibilitiesRoleErrorMessage,
						imagineBadThingsToMeErrorMessage,
						focusAchieveGoodResultErrorMessage,
						aimAchieveDreamErrorMessage,
						thinkAchieveGoodResultErrorMessage,
						thinkKindOfPersonInFutureErrorMessage,
						worryWillNotAchieveNumericalGoalErrorMessage,
						imagineWishesCominTrueErrorMessage,
						focusAvoidingFailureErrorMessage,
						thinkKindOfPersonHateBecomeInFutureErrorMessage,
						thinkImportantGainsThanAvoidingLossesErrorMessage,
					]}
				/>
				<button
					type='submit'
					className='bg-black text-white h-14 rounded-sm grid place-items-center'
				>
					診断結果を見る
				</button>
			</form>
		</section>
	);
};

export default Diagnosis;
