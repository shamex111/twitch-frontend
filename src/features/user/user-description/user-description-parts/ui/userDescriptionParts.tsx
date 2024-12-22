import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { SELECTEL_URL } from '@/shared/constants';

import { IDescriptionPart } from '@/entities/channel';

import styles from './userDescriptionParts.module.scss';

interface IUserDescriptionParts {
  data: IDescriptionPart[];
}

const UserDescriptionParts: FC<IUserDescriptionParts> = ({ data }) => {
  return (
    <div className={styles.userDescriptionPartsWrapper}>
      {data.map((part, index) => (
        <div className={styles.part} key={index}>
          <Link href={part.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={SELECTEL_URL + part.image}
              alt="description-part"
              width={100}
              height={100}
              className={styles.partImage}
            />
          </Link>
          <div className={styles.partDescription}>{part.description}</div>
        </div>
      ))}
    </div>
  );
};

export default UserDescriptionParts;
