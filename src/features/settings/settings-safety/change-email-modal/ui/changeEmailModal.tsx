import { FC } from 'react';
import toast from 'react-hot-toast';
import { GoX } from 'react-icons/go';
import { useDispatch } from 'react-redux';

import { useCodeHook } from '@/shared/hooks/codeHook';
import { Button } from '@/shared/ui/button';

import { userActions } from '@/entities/user/store';

import styles from './changeEmailModal.module.scss';

interface IChangeEmailModal {
  sendEmail: () => void;
  close: () => void;
  newEmail: string;
  mutate: any;
}

const ChangeEmailModal: FC<IChangeEmailModal> = ({
  close,
  sendEmail,
  mutate,
  newEmail
}) => {
  const dispatch = useDispatch();
  const { code, handleChange, handleBackspace } = useCodeHook();

  const handleSubmit = () => {
    mutate(
      { token: code.join(''), newEmail: newEmail },
      {
        onSuccess: () => {
          toast.success('Вы уcпешно изменили почту.');
          dispatch(userActions.updateUser({ email: newEmail }));
          close();
        }
      }
    );
  };
  return (
    <div className={styles.chaChangeEmailModalWrapper}>
      <GoX onClick={close} className={styles.close} />

      <div className={styles.header}>Изменение почты</div>

      <div className={styles.info}>Ваш код для изменения почты</div>
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
        Изменить
      </Button>
      <div onClick={sendEmail} className={styles.send}>
        Отправить код ещё раз
      </div>
    </div>
  );
};

export default ChangeEmailModal;
