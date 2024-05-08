import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Modal,
} from '@nextui-org/react';
import React from 'react';
import { ModalPropsType } from './modal';
import { Button } from '../button/Button';

interface CustomModalProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  closeButtonTitle?: string;
  validateButtonTitle?: string;
  onClose: () => void;
  classStyle?: string;
  iconTitle?: string;
  onValidateButton?: () => void;
  width?: string;
}
const CustomModal: React.FC<ModalPropsType & ModalProps> = ({
  children,
  title,
  isOpen,
  closeButtonTitle,
  validateButtonTitle,
  onClose,
  classStyle,
  iconTitle,
  onValidateButton,
  size
}) => {
  return (
    // eslint-disable-next-line react/no-children-prop
    <Modal
      backdrop="blur"
      size={size ? size: '4xl'}
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        closeButton: 'hidden',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className="flex flex-col gap-1 ml-[2%] font-[900] text-2xl"
            >
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              {closeButtonTitle && (
                <Button variant="secondary" onClick={onClose}>
                  {closeButtonTitle}
                </Button>
              )}
              {validateButtonTitle && (
                <Button onClick={onValidateButton}>
                  {validateButtonTitle}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
