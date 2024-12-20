'use client';

import { providerRegisterQuery } from '../../api/providerRegisterQuery';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';

import { TProvider } from '@/entities/auth';

import styles from './socialVariants.module.scss';

const SocialVariants: FC = () => {
  const { push } = useRouter();
  const [provider, setProvider] = useState<TProvider>();

  const { data, error } = providerRegisterQuery(provider);
  if (error) toast.error('Ошибка регистрации через соц.сеть.');
  if (data?.data) {
    push(data.data.url);
  }

  return (
    <div className={styles.socialVariantsWrapper}>
      <div className={styles.lineWrapper}>
        <div className={styles.line}></div>
        <div className={styles.or}>или</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.variantsWrapper}>
        <svg
          onClick={() => setProvider('yandex')}
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          className="cursor-pointer"
        >
          <rect width="44" height="44" rx="12" fill="#FC3F1D"></rect>
          <path
            d="M24.7406 33.9778H29.0888V9.04445H22.7591C16.3928 9.04445 13.0537 12.303 13.0537 17.1176C13.0537 21.2731 15.2186 23.6164 19.0531 26.1609L21.3831 27.6987L18.3926 25.1907L12.4666 33.9778H17.1817L23.5113 24.5317L21.3097 23.0672C18.6494 21.2731 17.3468 19.8818 17.3468 16.8613C17.3468 14.2069 19.2182 12.4128 22.7775 12.4128H24.7222V33.9778H24.7406Z"
            fill="white"
          ></path>
        </svg>
        <svg
          onClick={() => setProvider('google')}
          width="44"
          height="44"
          viewBox="0 0 32 32"
          className="cursor-pointer"
        >
          <path
            d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
            fill="#00ac47"
          />
          <path
            d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
            fill="#4285f4"
          />
          <path
            d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
            fill="#ffba00"
          />
          <path
            d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
            fill="#ea4435"
          />
        </svg>
      </div>
    </div>
  );
};

export default SocialVariants;
