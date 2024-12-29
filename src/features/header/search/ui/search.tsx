'use client';

import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';
import { GoX } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';

import { APP_ROUTES } from '@/shared/routes';

import styles from './search.module.scss';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { push } = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    clear();
    push(APP_ROUTES.search(searchTerm));
  };
  const clear = (): void => setSearchTerm('');

  return (
    <form onSubmit={handleSearch} className={styles.searchWrapper}>
      <IoIosSearch className={styles.searchIcon} />
      <input
        type="text"
        maxLength={60}
        placeholder="Поиск..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && <GoX onClick={clear} className={styles.clear} />}
    </form>
  );
};

export default Search;
