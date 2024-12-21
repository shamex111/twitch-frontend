import { FC } from 'react';

import styles from './userPageStream.module.scss';

interface IUserPageStream {}

const UserPageStream: FC<IUserPageStream> = ({}) => {
  return <div className={styles.userPageWrapper}></div>;
};

export default UserPageStream;
