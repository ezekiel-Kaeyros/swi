import { ReactNode } from 'react';

export type ModalPropsType = {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: any;
  closeButtonTitle?: string;
  validateButtonTitle?: string;
  classStyle?: string;
  iconTitle?: string;
  onValidateButton?: () => void;
  backdrop?: 'blur' | 'transparent' | 'opaque' | undefined;
  placement?:
    | 'center'
    | 'auto'
    | 'top'
    | 'top-center'
    | 'bottom'
    | 'bottom-center'
    | undefined;
};
