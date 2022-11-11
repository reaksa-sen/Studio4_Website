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
              <span className="sr-only">Cambodia Film Association</span>
              <img className="h-16 w-auto cursor-pointer" src="/images/logo.png" alt="cfa" />
            </a>
          </Link>
        </div>
        <div className="py-4">
          <div className="text-center">
            <p className="text-primary-100 text-sm font-semibold uppercase tracking-wide">
              {error}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-gray-500">{subtitle}</p>
            <div className="mt-6">
              <Link href="/">
                <a className="text-primary-600 hover:text-primary-500 text-base font-medium">
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
