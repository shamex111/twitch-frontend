import { FC } from 'react';
import { FieldError, UseFormGetValues, UseFormRegister } from 'react-hook-form';

import Field from '@/shared/ui/field/field';
import { validEmail } from '@/shared/utils/valid-email.util';

import { ILoginForm } from '@/entities/auth';

interface IAuthLoginFields {
  register: UseFormRegister<ILoginForm>;
  errors: {
    email?: FieldError;
    password?: FieldError;
  };
}

const AuthLoginFields: FC<IAuthLoginFields> = ({ register, errors }) => {
  return (
    <div className="flex flex-col space-y-[7px]">
      <Field
        placeholder="Почта"
        error={errors.email}
        {...register('email', {
          required: 'Почта обязательна!',
          pattern: {
            value: validEmail,
            message: 'Некорректный формат почты!'
          }
        })}
        type="text"
      />

      <Field
        placeholder="Пароль"
        error={errors.password}
        {...register('password', {
          required: 'Пароль обязателен!',
          minLength: {
            value: 8,
            message: 'Минимальная длина пароля 8 символов!'
          }
        })}
        type="password"
        isPassword
      />
    </div>
  );
};

export default AuthLoginFields;
