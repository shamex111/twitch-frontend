import {  useState } from 'react';

export const useRecaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('');

  const handleCaptchaChange = (token: string ) => {
    setCaptchaToken(token);
  };

  return { handleCaptchaChange, captchaToken, setCaptchaToken };
};
