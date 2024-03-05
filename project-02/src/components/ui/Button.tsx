import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: 'w-full' | 'w-fit';
}

const Button = ({ children, className, width = 'w-full', ...rest }: ButtonProps) => {
  return (
    <button className={`${className} ${width} p-2 text-white rounded-md`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
