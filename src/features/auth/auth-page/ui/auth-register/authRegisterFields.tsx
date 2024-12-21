import { FC } from 'react';
import { FieldError, UseFormGetValues, UseFormRegister } from 'react-hook-form';

import Field from '@/shared/ui/field/field';
import { validEmail } from '@/shared/utils/valid-email.util';

import { IRegisterForm } from '@/entities/auth';

interface IAuthRegisterFields {
  register: UseFormRegister<IRegisterForm>;
  errors: {
    email?: FieldError;
    name?: FieldError;
    password?: FieldError;
    passwordRepeat?: FieldError;
  };
  getValues: UseFormGetValues<IRegisterForm>;
}

const AuthRegisterFields: FC<IAuthRegisterFields> = ({
  register,
  errors,
  getValues
}) => {
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
        placeholder="Имя пользователя"
        error={errors.name}
        {...register('name', {
          required: 'Имя пользователя обязательно!'
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
        isPassword
        type="password"
      />
      <Field
        placeholder="Повторите пароль"
        error={errors.passwordRepeat}
        {...register('passwordRepeat', {
          required: 'Повторите пароль!',
          validate: value => {
            const { password } = getValues();
            return password === value || 'Пароли не совпадают!';
          }
        })}
        isPassword
        type="password"
      />
    </div>
  );
};

export default AuthRegisterFields;
