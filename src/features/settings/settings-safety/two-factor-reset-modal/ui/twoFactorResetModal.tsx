import { FC } from 'react';
import toast from 'react-hot-toast';
import { GoX } from 'react-icons/go';
import { useDispatch } from 'react-redux';

import { useCodeHook } from '@/shared/hooks/codeHook';
import { Button } from '@/shared/ui/button';

import { userActions } from '@/entities/user/store';

import styles from './twoFactorResetModal.module.scss';

interface ITwoFactorResetModal {
  sendEmail: () => void;
  close: () => void;
  mutate: any;
}

const TwoFactorResetModal: FC<ITwoFactorResetModal> = ({
  close,
  sendEmail,
  mutate
}) => {
  const dispatch = useDispatch();
  const { code, handleChange, handleBackspace } = useCodeHook();

  const handleSubmit = () => {
    mutate(
      { code: code.join(''), isTwoFactorEnabled: false },
      {
        onSuccess: () => {
          toast.success('Вы отключили двухфакторную аутентификацию.');
          dispatch(userActions.updateUser({ isTwoFactorEnabled: false }));
          close();
        }
      }
    );
  };
  return (
    <div className={styles.twoFactorResetModalWrapper}>
      <GoX onClick={close} className={styles.close} />

      <div className={styles.header}>
        Отключение двухфакторной аутентификации
      </div>

      <div className={styles.info}>
        Ваш код для отключения двухфакторной аутентификации
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
      <div className={styles.warning}>Это приведет к снижение безопасности вашего аккаунта!</div>
      <Button
        variant="accent"
        size="lg"
        onClick={handleSubmit}
        className={styles.submit}
      >
        Отключить
      </Button>
      <div onClick={sendEmail} className={styles.send}>
        Отправить код ещё раз
      </div>
    </div>
  );
};

export default TwoFactorResetModal;
