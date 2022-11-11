import SearchIcon from '@heroicons/react/outline/SearchIcon';

export const NoResult: React.FC = () => (
  <div className="flex flex-col items-center py-16">
    <div>
      <SearchIcon className="h-32 w-32 text-gray-300" />
    </div>
    <p className="pt-4 text-3xl font-semibold">No Result Found</p>
  </div>
);
