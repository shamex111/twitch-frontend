import { forwardRef, useState } from 'react';
import { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

import styles from './field.module.scss';

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: FieldError;
  isPassword?: boolean; 
}

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, style, isPassword, ...rest }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prev => !prev);
    };

    return (
      <div className={styles.field} style={style}>
        <label>
          <span>{placeholder}</span>
          <div className={error && `${styles.errorInput}`}>
            <input
              ref={ref}
              placeholder={placeholder}
              {...rest}
              type={isPassword? isPasswordVisible  ? 'text' : 'password' : 'text'}
            />
            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={styles.togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <FaEyeSlash className="text-White " />
                ) : (
                  <IoEyeSharp className="text-White " />
                )}
              </button>
            )}
          </div>
        </label>

        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = 'Field';
export default Field;
