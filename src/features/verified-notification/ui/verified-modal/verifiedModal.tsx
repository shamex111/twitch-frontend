'use client';

import { confirmEmailMutation } from '../../api';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { GoX } from 'react-icons/go';
import { useDispatch } from 'react-redux';

import { useCodeHook } from '@/shared/hooks/codeHook';
import { Button } from '@/shared/ui/button';

import { userActions } from '@/entities/user/store';

import styles from './verifiedModal.module.scss';

interface IVerifiedModal {
  close: () => void;
  sendEmail: () => void;
  email: string;
}

const VerifiedModal: FC<IVerifiedModal> = ({ close, sendEmail, email }) => {
  const dispatch = useDispatch();
  const { code, handleChange, handleBackspace } = useCodeHook();

  const { mutate: confirmationMutate } = confirmEmailMutation();

  const handleSubmit = () => {
    confirmationMutate(code.join(''), {
      onSuccess: () => {
        toast.success('Вы успешно подтвердили почту.');
        dispatch(userActions.updateUser({ isVerified: true }));
        close();
      }
    });
  };
  return (
    <div className={styles.verifiedModalWrapper}>
      <GoX onClick={close} className={styles.close} />

      <div className={styles.header}>Подтверждение почты</div>

      <div className={styles.info}>
        Ваш код для подтверждения почты: <strong>{email}</strong>
      </div>
      <div className={styles.code}>
        {code.map((digit, index) => (
          <input
            key={index}
            id={`input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(e, index)}
            onKeyDown={e => handleBackspace(e, index)}
            className={styles.codeItem}
          />
        ))}
      </div>
      <Button
        variant="accent"
        size="lg"
        onClick={handleSubmit}
        className={styles.submit}
      >
        Подтвердить
      </Button>
      <div onClick={sendEmail} className={styles.send}>
        Отправить код ещё раз
      </div>
    </div>
  );
};

export default VerifiedModal;
