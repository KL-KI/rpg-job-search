interface Props {
	errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: Props) => {
	return <p className='text-red-500'>{errorMessage}</p>;
};

export default ErrorMessage;
