import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { GoX } from 'react-icons/go';

import { useCodeHook } from '@/shared/hooks/codeHook';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import styles from './passwordRecoveryModal.module.scss';

interface IPasswordRecoveryModal {
  sendEmail: () => void;
  close: () => void;
  mutate: any;
}

const PasswordRecoveryModal: FC<IPasswordRecoveryModal> = ({
  close,
  sendEmail,
  mutate
}) => {
  const { code, handleChange, handleBackspace } = useCodeHook();
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword) {
      mutate(
        { token: code.join(''), newPassword },
        {
          onSuccess: () => {
            toast.success('Вы уcпешно изменили пароль.');
            close();
          }
        }
      );
    }
  };
  return (
    <div className={styles.passwordRecoveryModalWrapper}>
      <GoX onClick={close} className={styles.close} />

      <div className={styles.header}>Изменение пароля</div>

      <Input
        type="text"
        placeholder="Новый пароль"
        onChange={e => setNewPassword(e.target.value)}
      />

      <div className={styles.info}>Ваш код для изменения пароля</div>
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

export default PasswordRecoveryModal;
