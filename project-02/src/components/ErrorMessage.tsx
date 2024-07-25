interface ErrorMessageProps {
  msg: string;
}

const ErrorMessage = ({ msg }: ErrorMessageProps) => {
  return msg ? (
    <span className='block text-red-700 font-semibold text-sm'>{msg}</span>
  ) : null;
};

export default ErrorMessage;
