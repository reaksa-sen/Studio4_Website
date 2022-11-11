import SearchIcon from '@heroicons/react/solid/SearchIcon';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const SearchBar: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  function onFormSubmit(e: any) {
    e.preventDefault();
    router.push({ pathname: '/search', query: { 'article:published_date:desc[query]': search } });
  }

  return (
    <form className="w-56" onSubmit={onFormSubmit}>
      <div className="relative flex h-full w-full flex-row justify-end pl-3">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          className="block w-full border-b-2 text-black focus:outline-none"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          aria-label="Search"
          className="absolute bottom-0 h-full items-center text-gray-700"
          type="submit"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};
