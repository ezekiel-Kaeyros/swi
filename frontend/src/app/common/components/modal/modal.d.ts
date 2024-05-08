import { ReactNode } from 'react';

export type ModalPropsType = {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  closeButtonTitle?: string;
  validateButtonTitle?: string;
  classStyle?: string;
  iconTitle?: string;
  onValidateButton?: () => void;
};
