/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface Props {
  error: string;
  title: string;
  subtitle: string;
}

export const BaseError: React.FC<Props> = props => {
  const { error, subtitle, title } = props;
  return (
    <div className="py-16 md:py-44">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Link href="/" className="inline-flex">
            <a>
              <span className="sr-only">Studio Four</span>
              <img className="h-16 w-auto cursor-pointer" src="/images/logo.png" alt="stdio4" />
            </a>
          </Link>
        </div>
        <div className="py-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-white">{error}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-white">{subtitle}</p>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-primary-600 hover:text-primary-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
