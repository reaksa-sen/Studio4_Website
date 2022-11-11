export const VideoList: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <ul role="list" className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
    {children}
  </ul>
);
