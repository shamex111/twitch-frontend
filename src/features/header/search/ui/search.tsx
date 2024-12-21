import { FC } from 'react';
import { IoIosSearch } from 'react-icons/io';

import styles from './search.module.scss';

const Search: FC = () => {
  return (
    <div className={styles.searchWrapper}>
      <IoIosSearch className={styles.searchIcon} />
      <input type="text" maxLength={60} placeholder='Поиск...' className={styles.searchInput} />
    </div>
  );
};

export default Search;
