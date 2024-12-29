'use client';

import { createDescriptionPartMutation } from '../api';
import { FC, useState } from 'react';
import { GoX } from 'react-icons/go';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import styles from './dashboardChannel.module.scss';

interface ICreateDescriptionPartModal {
  close: () => void;
  userRefetch: any;
}

const CreateDescriptionPartModal: FC<ICreateDescriptionPartModal> = ({
  close,
  userRefetch
}) => {
  const { mutate } = createDescriptionPartMutation();

  const [formData, setFormData] = useState({
    description: '',
    url: ''
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    if (!formData.description || !formData.url || !file) {
      return;
    }

    mutate(
      {
        data: {
          description: formData.description,
          url: formData.url
        },
        file
      },
      {
        onSuccess: () => {
          close();
          userRefetch();
        }
      }
    );
  };

  return (
    <div className={styles.createDescriptionPartModalWrapper}>
      <GoX onClick={close} className={styles.close} />
      <div className={styles.header}>Создание картинки-ссылки</div>
      <div className={styles.content}>
        <div className={styles.nameField}>Описание</div>
        <Input
          type="text"
          name="description"
          placeholder="За донат стригу хесуса налысо!"
          value={formData.description}
          onChange={handleInputChange}
        />
        <div className={styles.description}>
          Описание будет отображаться под картинкой.
        </div>
        <div className={styles.nameField}>Ссылка</div>
        <Input
          type="text"
          name="url"
          placeholder="https://your-url.com"
          value={formData.url}
          onChange={handleInputChange}
        />
        <div className={styles.description}>
          Ссылка, на которую будет перебрасывать по клику на изображение.
        </div>
        <div className={styles.nameField}>Изображение</div>
        <Input type="file" onChange={handleFileChange} />
        <div className={styles.description}>
          Картинка, которая будет отображаться, сделайте ее заманчивой.
        </div>
      </div>
      <Button variant="accent" className={styles.button} onClick={handleSubmit}>
        Создать
      </Button>
    </div>
  );
};

export default CreateDescriptionPartModal;
