import { useState, useEffect, FormEvent } from "react";

import InHouse from "@/app/_components/_top/_Diagnosis/_Form/InHouse/InHouse";
import Applicants from "@/app/_components/_top/_Diagnosis/_Form/Applicants/Applicants";
import FirstSectionForm from "@/app/_components/_top/_Diagnosis/_Form/FirstSection/FirstSectionForm";
import MovingPattern from "@/app/_components/_top/_Diagnosis/_Form/MovingPattern/MovingPattern";
import PersonalityType from "@/app/_components/_top/_Diagnosis/_Form/PersonalityType/PersonalityType";

import { schema } from "@/app/data/formSchema";

const Diagnosis = () => {
	const ANSWER_AS_STUFF = "社員・職員として解答（社内向けアンケート）";
	const ANSWER_AS_RECRUIT = "採用選考への応募者として解答（適性検査）";

	const [isSecondMount, setIsSecondMount] = useState(false);

	/*FIRST SECTION START*/
	const [email, setEmail] = useState(schema.email.defaultValue);
	const [emailErrorMessage, setEmailErrorMessage] = useState(schema.emptyErrorMessage);
	const [nameKanji, setNameKanji] = useState(schema.nameKanji.defaultValue);
	const [nameKanjiErrorMessage, setNameKanjiErrorMessage] = useState(schema.emptyErrorMessage);
	const [nameKatakana, setNameKatakana] = useState(schema.nameKatakana.defaultValue);
	const [nameKatakanaErrorMessage, setNameKatakanaErrorMessage] = useState(
		schema.emptyErrorMessage
	);
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
	const [gender, setGender] = useState(schema.gender.defaultValue);
	const [genderErrorMessage, setGenderErrorMessage] = useState(schema.emptyErrorMessage);
	const [birthYear, setBirthYear] = useState(schema.birthYear.defaultValue);
	const [birthMonth, setBirthMonth] = useState(schema.birthMonth.defaultValue);
	const [birthDay, setBirthDay] = useState(schema.birthDay.defaultValue);
	const [address, setAddress] = useState(schema.address.defaultValue);
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

	// LOG FORM DATA
	console.log(
		{
			email,
			nameKanji,
			nameKatakana,
			answerer,
		},
		{
			organization,
			organizationIndustry,
			department,
			jobType,
			employmentStatus,
			passedYear,
			employeeId,
		},
		{
			applyOrganization,
			applyOrganizationIndustry,
			applyJobType,
			applyEmploymentStatus,
			phoneNumber,
		},
		{
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
			gender,
			birthYear,
			birthMonth,
			birthDay,
			address,
		},
		{
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
		}
	);

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
		validateEmail();
		validateNameKanji();
		validateNameKatakana();
		validateBackground(answerer);
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
	};

	const validateEmail = () => {
		// const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (email.length < schema.email.min.value) {
			setEmailErrorMessage(schema.email.min.message);
		} else {
			setEmailErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateNameKanji = () => {
		if (nameKanji.length < schema.nameKanji.min.value) {
			setNameKanjiErrorMessage(schema.nameKanji.min.message);
		} else {
			setNameKanjiErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateNameKatakana = () => {
		if (nameKatakana.length < schema.nameKatakana.min.value) {
			setNameKatakanaErrorMessage(schema.nameKatakana.min.message);
		} else {
			setNameKatakanaErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateBackground = (answerer: string) => {
		const answererIndex = schema.background.values.indexOf(answerer);
		if (answererIndex < 0) {
			setAnswererErrorMessage(schema.background.message);
		} else {
			setAnswererErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateOrganization = () => {
		if (organization.length < schema.organization.min.value) {
			setOrganizationErrorMessage(schema.organization.min.message);
		} else {
			setOrganizationErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateDepartment = () => {
		if (department.length < schema.department.min.value) {
			setDepartmentErrorMessage(schema.department.min.message);
		} else {
			setDepartmentErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateApplyOrganization = () => {
		if (applyOrganization.length < schema.applyOrganization.min.value) {
			setApplyOrganizationErrorMessage(schema.applyOrganization.min.message);
		} else {
			setApplyOrganizationErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validatePhoneNumber = () => {
		const newPhoneRegExp = /^0[5789]0-?\d{4}-?\d{4}$/g;
		const oldPhoneRegExp = /^\d{2,4}-?\d{2,4}-?\d{4}$/g;

		const newP = phoneNumber.match(newPhoneRegExp);
		const oldP = phoneNumber.match(oldPhoneRegExp);

		if (!oldP || !newP) {
			setPhoneNumberErrorMessage("電話番号を正しく入力してください");
		} else {
			setPhoneNumberErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateCanTalkStranger = () => {
		if (isZeroLength(canTalkStranger)) {
			setCanTalkStrangerErrorMessage(schema.canTalkStranger.message);
		} else {
			setCanTalkStrangerErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateCarePeopleComfortable = () => {
		if (isZeroLength(carePeopleComfortable)) {
			setCarePeopleComfortableErrorMessage(schema.carePeopleComfortable.message);
		} else {
			setCarePeopleComfortableErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateDoCreativeActivity = () => {
		if (isZeroLength(doCreativeActivity)) {
			setDoCreativeActivityErrorMessage(schema.doCreativeActivity.message);
		} else {
			setDoCreativeActivityErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validatePrepareAdvance = () => {
		if (isZeroLength(prepareAdvance)) {
			setPrepareAdvanceErrorMessage(schema.prepareAdvance.message);
		} else {
			setPrepareAdvanceErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateFeelingDownDepressed = () => {
		if (isZeroLength(feelingDownDepressed)) {
			setFeelingDownDepressedErrorMessage(schema.feelingDownDepressed.message);
		} else {
			setFeelingDownDepressedErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateLikeOrganizeParty = () => {
		if (isZeroLength(likeOrganizeParty)) {
			setLikeOrganizePartyErrorMessage(schema.likeOrganizeParty.message);
		} else {
			setLikeOrganizePartyErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateProneArgument = () => {
		if (isZeroLength(proneArgument)) {
			setProneArgumentErrorMessage(schema.proneArgument.message);
		} else {
			setProneArgumentErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateLikePhilosophicalSpiritual = () => {
		if (isZeroLength(likePhilosophicalSpiritual)) {
			setLikePhilosophicalSpiritualErrorMessage(schema.likePhilosophicalSpiritual.message);
		} else {
			setLikePhilosophicalSpiritualErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateDislikeOrganizingThoughts = () => {
		if (isZeroLength(dislikeOrganizingThoughts)) {
			setDislikeOrganizingThoughtsErrorMessage(schema.dislikeOrganizingThoughts.message);
		} else {
			setDislikeOrganizingThoughtsErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateFeelingStressedOrAnxious = () => {
		if (isZeroLength(feelingStressedOrAnxious)) {
			setFeelingStressedOrAnxiousErrorMessage(schema.feelingStressedOrAnxious.message);
		} else {
			setFeelingStressedOrAnxiousErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateOftenUseDifficultWord = () => {
		if (isZeroLength(oftenUseDifficultWord)) {
			setOftenUseDifficultWordErrorMessage(schema.oftenUseDifficultWord.message);
		} else {
			setOftenUseDifficultWordErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateConsiderPrioritizeOthers = () => {
		if (isZeroLength(considerPrioritizeOthers)) {
			setConsiderPrioritizeOthersErrorMessage(schema.considerPrioritizeOthers.message);
		} else {
			setConsiderPrioritizeOthersErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateContributeMoreTeamMoreOthers = () => {
		if (isZeroLength(contributeMoreTeamMoreOthers)) {
			setContributeMoreTeamMoreOthersErrorMessage(schema.contributeMoreTeamMoreOthers.message);
		} else {
			setContributeMoreTeamMoreOthersErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateSatisfiCurrentJobAndSituation = () => {
		if (isZeroLength(satisfiCurrentJobAndSituation)) {
			setSatisfiCurrentJobAndSituationErrorMessage(schema.satisfiCurrentJobAndSituation.message);
		} else {
			setSatisfiCurrentJobAndSituationErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateGender = () => {
		if (isZeroLength(gender)) {
			setGenderErrorMessage(schema.gender.message);
		} else {
			setGenderErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateWhatBest = () => {
		if (isZeroLength(whatBest)) {
			setWhatBestErrorMessage(schema.whatBest.message);
		} else {
			setWhatBestErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateWhatHurt = () => {
		if (isZeroLength(whatBest)) {
			setWhatHurtErrorMessage(schema.wharHurt.message);
		} else {
			setWhatHurtErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateWhatRewardingInPast = () => {
		if (isZeroLength(whatBest)) {
			setWhatRewardingInPastErrorMessage(schema.whatRewardingInPast.message);
		} else {
			setWhatRewardingInPastErrorMessage(schema.emptyErrorMessage);
		}
	};
	const validateImagineAchieveGoal = () => {
		if (isZeroLength(imagineAchieveGoal)) {
			setImagineAchieveGoalErrorMessage(schema.imagineAchieveGoal.message);
		} else {
			setImagineAchieveGoalErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateFocusPreventingBadThings = () => {
		if (isZeroLength(focusPreventingBadThings)) {
			setFocusPreventingBadThingsErrorMessage(schema.focusPreventingBadThings.message);
		} else {
			setFocusPreventingBadThingsErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateFocusAccomplishInFuture = () => {
		if (isZeroLength(focusAccomplishInFuture)) {
			setFocusAccomplishInFutureErrorMessage(schema.focusAccomplishInFuture.message);
		} else {
			setFocusAccomplishInFutureErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateThinkPreventFailure = () => {
		if (isZeroLength(thinkPreventFailure)) {
			setThinkPreventFailureErrorMessage(schema.thinkPreventFailure.message);
		} else {
			setThinkPreventFailureErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateThinkMyTypeIsEffortToDream = () => {
		if (isZeroLength(thinkMyTypeIsEffortToDream)) {
			setThinkMyTypeIsEffortToDreamErrorMessage(schema.thinkMyTypeIsEffortToDream.message);
		} else {
			setThinkMyTypeIsEffortToDreamErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateWorryDoNotResponsibilitiesRole = () => {
		if (isZeroLength(worryDoNotResponsibilitiesRole)) {
			setWorryDoNotResponsibilitiesRoleErrorMessage(schema.worryDoNotResponsibilitiesRole.message);
		} else {
			setWorryDoNotResponsibilitiesRoleErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateImagineBadThingsToMe = () => {
		if (isZeroLength(imagineBadThingsToMe)) {
			setImagineBadThingsToMeErrorMessage(schema.imagineBadThingsToMe.message);
		} else {
			setImagineBadThingsToMeErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateFocusAchieveGoodResult = () => {
		if (isZeroLength(focusAchieveGoodResult)) {
			setFocusAchieveGoodResultErrorMessage(schema.focusAchieveGoodResult.message);
		} else {
			setFocusAchieveGoodResultErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateAimAchieveDream = () => {
		if (isZeroLength(aimAchieveDream)) {
			setAimAchieveDreamErrorMessage(schema.aimAchieveDream.message);
		} else {
			setAimAchieveDreamErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateThinkAchieveGoodResult = () => {
		if (isZeroLength(thinkAchieveGoodResult)) {
			setThinkAchieveGoodResultErrorMessage(schema.thinkAchieveGoodResult.message);
		} else {
			setThinkAchieveGoodResultErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateThinkKindOfPersonInFuture = () => {
		if (isZeroLength(thinkKindOfPersonInFuture)) {
			setThinkKindOfPersonInFutureErrorMessage(schema.thinkKindOfPersonInFuture.message);
		} else {
			setThinkKindOfPersonInFutureErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateWorryWillNotAchieveNumericalGoal = () => {
		if (isZeroLength(worryWillNotAchieveNumericalGoal)) {
			setWorryWillNotAchieveNumericalGoalErrorMessage(
				schema.worryWillNotAchieveNumericalGoal.message
			);
		} else {
			setWorryWillNotAchieveNumericalGoalErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateImagineWishesComingTrue = () => {
		if (isZeroLength(imagineWishesComingTrue)) {
			setImagineWishesCominTrueErrorMessage(schema.imagineWishesComingTrue.message);
		} else {
			setImagineWishesCominTrueErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateFocusAvoidingFailure = () => {
		if (isZeroLength(focusAvoidingFailure)) {
			setFocusAvoidingFailureErrorMessage(schema.focusAvoidingFailure.message);
		} else {
			setFocusAvoidingFailureErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateThinkKindOfPersonHateBecomeInFuture = () => {
		if (isZeroLength(thinkKindOfPersonHateBecomeInFuture)) {
			setThinkKindOfPersonHateBecomeInFutureErrorMessage(
				schema.thinkKindOfPersonHateBecomeInFuture.message
			);
		} else {
			setThinkKindOfPersonHateBecomeInFutureErrorMessage(schema.emptyErrorMessage);
		}
	};

	const validateThinkImportantGainsThanAvoidingLosses = () => {
		if (isZeroLength(thinkImportantGainsThanAvoidingLosses)) {
			setThinkImportantGainsThanAvoidingLossesErrorMessage(
				schema.thinkImportantGainsThanAvoidingLosses.message
			);
		} else {
			setThinkImportantGainsThanAvoidingLossesErrorMessage(schema.emptyErrorMessage);
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
					setFunctions={[setEmail, setNameKanji, setNameKatakana]}
					errorMessages={[
						emailErrorMessage,
						nameKanjiErrorMessage,
						nameKatakanaErrorMessage,
						answererErrorMessage,
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
						setGender,
						setBirthYear,
						setBirthMonth,
						setBirthDay,
						setAddress,
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
						genderErrorMessage,
					]}
					setGender={setGender}
					genderErrorMessage={genderErrorMessage}
					setBirthYear={setBirthYear}
					setBirthMonth={setBirthMonth}
					setBirthDay={setBirthDay}
					setAddress={setAddress}
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
