import { useState } from 'react';

export const useCodeHook = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value && /^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 5) {
        const nextInput = document.getElementById(`input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      const prevInput = document.getElementById(`input-${index - 1}`);
      const newCode = [...code];
      setCode(newCode);
      if (code[index]) {
        newCode[index] = '';
      } else {
        newCode[index - 1] = '';
      }
      prevInput?.focus();
    }
  };

  return { code, setCode, handleChange, handleBackspace };
};
