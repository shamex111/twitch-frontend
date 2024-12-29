import { FC } from 'react'

interface ISearch {
  searchTerm: string;
}


const Search: FC<ISearch> = ({searchTerm}) => {
  return <div>search {searchTerm}</div>
}

export default Search