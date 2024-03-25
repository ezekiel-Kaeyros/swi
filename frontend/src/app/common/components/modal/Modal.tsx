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
}) => {
  return (
    // eslint-disable-next-line react/no-children-prop
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent className={classStyle}>
        {(onClose) => (
          <>
            <ModalHeader
              className="flex 
             flex-col gap-1 ml-[2%] font-[900] text-2xl"
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
