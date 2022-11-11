import EyeIcon from '@heroicons/react/solid/EyeIcon';

export const Visitor: React.FC<{ value: number }> = ({ value = 0 }) => (
  <div className="mx-auto w-fit rounded-md bg-black py-2 px-3 text-white opacity-80 md:float-right">
    <div className="flex flex-row place-items-center space-x-2">
      <EyeIcon className="h-4 w-4" />
      <span>Visited: {value.toLocaleString()}</span>
    </div>
  </div>
);
