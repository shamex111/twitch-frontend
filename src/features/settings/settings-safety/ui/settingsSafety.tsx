import { updateProfileMutation } from '../../settings-profile/api';
import {
  EmailChangeSendEmailMutation,
  PasswordRecoveryMutation,
  RemoveSessionMutation,
  currentSessionQuery
} from '../api';
import { EmailChangeMutation } from '../api/changeEmailMutation';
import { PasswordRecoverySendEmailMutation } from '../api/passwordRecoverySendEmail';
import { sessionsQuery } from '../api/sessionsQuery';
import { TwoFactorSendResetEmailMutation } from '../api/twoFactorSendResetEmail';
import ChangeEmailModal from '../change-email-modal/ui/changeEmailModal';
import PasswordRecoveryModal from '../password-recovery-modal/ui/passwordRecoveryModal';
import TwoFactorResetModal from '../two-factor-reset-modal/ui/twoFactorResetModal';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import Modal from '@/shared/ui/modal/modal';
import { Switch } from '@/shared/ui/ui/switch';

import styles from './settingsSafety.module.scss';

interface ISettingsSafety {
  email: string;
  isTwoFactorEnabled: boolean;
}

const SettingsSafety: FC<ISettingsSafety> = ({ email, isTwoFactorEnabled }) => {
  const {
    data: sessionsData,
    isLoading: sessionsIsLoading,
    error: sessionsError,
    refetch
  } = sessionsQuery();
  const {
    data: currentSessionsData,
    isLoading: currentSessionsIsLoading,
    error: currentSessionsError
  } = currentSessionQuery();

  const [emailData, setEmailData] = useState(email);

  const [isTwoFactorModalOpen, setIsTwoFactorModalOpen] = useState(false);
  const [isEmailChangeModalOpen, setIsEmailChangeModalOpen] = useState(false);
  const [isPasswordRecoveryModalOpen, setIsPasswordRecoveryModalOpen] =
    useState(false);

  const { mutate: updateProfileMutate } = updateProfileMutation();
  const { mutate: emailChangeMutate } = EmailChangeMutation();
  const { mutate: passwordRecoveryMutate } = PasswordRecoveryMutation();
  const { mutate: removeSessionMutate } = RemoveSessionMutation();
  const { mutate: twoFactorSendResetEmailMutate } =
    TwoFactorSendResetEmailMutation();
  const { mutate: emailChangeSendEmailMutate } = EmailChangeSendEmailMutation();
  const { mutate: passwordRecoverySendEmailMutate } =
    PasswordRecoverySendEmailMutation();

  if (sessionsIsLoading || currentSessionsIsLoading)
    return <div className="text-White">loading</div>;
  if (sessionsError || currentSessionsError)
    return <div className="text-White">error</div>;

  const currentSession = currentSessionsData?.data;

  const changeTwoFactor = (value: boolean) => {
    if (value === false) {
      setIsTwoFactorModalOpen(true);
      twoFactorSendResetEmailMutate(email);
    } else {
      updateProfileMutate(
        { isTwoFactorEnabled: true },
        {
          onSuccess: () => {
            toast.success('Двухфакторная аутентификация включена.');
          }
        }
      );
    }
  };
  const changeEmail = () => {
    setIsEmailChangeModalOpen(true);
    emailChangeSendEmailMutate(email);
  };

  const passwordRecovery = () => {
    setIsPasswordRecoveryModalOpen(true);
    passwordRecoverySendEmailMutate(email);
  };
  return (
    <div className={styles.settingsSafetyWrapper}>
      {
        <Modal isOpen={isTwoFactorModalOpen}>
          <TwoFactorResetModal
            close={() => setIsTwoFactorModalOpen(false)}
            sendEmail={() => twoFactorSendResetEmailMutate(email)}
            mutate={updateProfileMutate}
          />
        </Modal>
      }
      {
        <Modal isOpen={isEmailChangeModalOpen}>
          <ChangeEmailModal
            close={() => setIsEmailChangeModalOpen(false)}
            sendEmail={() => emailChangeSendEmailMutate(email)}
            mutate={emailChangeMutate}
            newEmail={emailData}
          />
        </Modal>
      }
      {
        <Modal isOpen={isPasswordRecoveryModalOpen}>
          <PasswordRecoveryModal
            close={() => setIsPasswordRecoveryModalOpen(false)}
            sendEmail={() => passwordRecoverySendEmailMutate(email)}
            mutate={passwordRecoveryMutate}
          />
        </Modal>
      }
      <div className={styles.email}>
        <div className={styles.fields}>
          <div className={styles.label}>Почта</div>
          <Input
            type="text"
            placeholder="Почта"
            className={styles.input}
            value={emailData}
            onChange={e => setEmailData(e.target.value)}
          />
        </div>
        {emailData !== email && (
          <Button
            className={styles.button}
            variant="accent"
            onClick={changeEmail}
          >
            Сохранить изменения
          </Button>
        )}
      </div>
      <div className={styles.twoFactor}>
        <div className={styles.label}>Двухфакторная аутентификация</div>
        <Switch
          onCheckedChange={changeTwoFactor}
          defaultChecked={isTwoFactorEnabled}
        />
      </div>
      <div className={styles.passwordRecovery}>
        <div className={styles.label} onClick={passwordRecovery}>
          Изменить пароль
        </div>
      </div>

      <div className={styles.heading}>Сеансы</div>
      <div className={styles.sessions}>
        <div className={styles.heading}>Это устройство</div>
        <div key={currentSession?.id} className={styles.session}>
          <div>
            <div className={styles.device}>
              {currentSession?.metadata.device.type}
            </div>
            <div className={styles.browser}>
              <div>{currentSession?.metadata.device.browser}</div>
            </div>
            <div className={styles.location}>
              <div>{currentSession?.metadata.location.city}</div>
              <div>{currentSession?.metadata.location.country}</div>
            </div>
          </div>
        </div>

        <div className={styles.heading}>
          Активные сеансы ({(sessionsData?.data.length as number) - 1})
        </div>
        {sessionsData?.data?.length === 1 && (
          <div className="text-White">Нет других сеансов</div>
        )}
        {sessionsData?.data?.map(s => {
          if (s.id === currentSession?.id) return;
          return (
            <div key={s.id} className={styles.session}>
              <div>
                <div className={styles.device}>{s.metadata.device.type}</div>
                <div className={styles.browser}>
                  <div>{s.metadata.device.browser}</div>
                </div>
                <div className={styles.location}>
                  <div>{s.metadata.location.city}</div>
                  <div>{s.metadata.location.country}</div>
                </div>
              </div>
              <MdDeleteOutline
                className={styles.delete}
                onClick={() => {
                  removeSessionMutate(s.id, {
                    onSuccess: () => {
                      refetch();
                    }
                  });
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSafety;
