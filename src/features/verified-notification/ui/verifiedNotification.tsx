'use client';

import { sendVerificationEmailMutation } from '../api';
import { FC, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import Modal from '@/shared/ui/modal/modal';

import VerifiedModal from './verifiedModal';
import styles from './verifiedNotification.module.scss';

interface IVerifiedNotification {
  email: string;
}

const VerifiedNotification: FC<IVerifiedNotification> = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeOpen = () => setIsOpen(prev => !prev);

  const { mutate } = sendVerificationEmailMutation();

  const handleSendEmail = () => {
    mutate(email);
  };

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <VerifiedModal
            email={email}
            close={() => setIsOpen(false)}
            sendEmail={handleSendEmail}
          />
        </Modal>
      )}
      <div
        className={styles.verifiedNotificationWrapper}
        onClick={() => {
          handleChangeOpen();
          handleSendEmail();
        }}
      >
        <div className={styles.info}>
          Подтвердите свой адрес электронной почты!
        </div>
        <FaArrowRight className={styles.icon} />
      </div>
    </>
  );
};

export default VerifiedNotification;
