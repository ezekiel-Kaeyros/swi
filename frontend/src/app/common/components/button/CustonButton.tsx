import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';
import { Button } from './Button';

interface StepButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  typeOfButton: 'Error' | 'Infos' | 'Normal';
  isLoading?: boolean;
  className?: string;
  isDisable?: boolean;
}
const CustomButton: FC<StepButtonInterface> = ({
  typeOfButton = 'Infos',
  isLoading = false,
  className,
  children,
  isDisable = false,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={isDisable}
      isLoading={isLoading}
      className={`${className} cursor-pointer rounded-xl !text-[1rem] w-[97px] h-[48px]  leading-1 font-medium  ${
        typeOfButton === 'Error'
          ? 'bg-[#600E18]'
          : typeOfButton === 'Infos'
            ? 'bg-disabledNextButton'
            : ' bg-transparent '
      } ${
        isDisable ? 'text-white/40' : 'text-white'
      } transition-colors duration-300`}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
