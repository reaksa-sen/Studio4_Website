import '../styles/globals.css';

import Footer from 'components/Footer';
import NavigationBar from 'components/NavigationBar';
import { VideoModalProvider } from 'hooks/videoModalHook';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';

import type { AppProps } from 'next/app';
import { useState } from 'react';
import { LanguageModalProvider } from 'hooks/LanguageModalContext';
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className="flex min-h-screen flex-col justify-between bg-background">
      <LanguageModalProvider>
        <header className="relative">
          <NavigationBar />
        </header>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <VideoModalProvider>
              <NextNProgress
                height={3}
                color="#F8931D"
                showOnShallow={false}
                options={{ showSpinner: false }}
              />
              <div className="flex-grow">
                <Component {...pageProps} />
              </div>
            </VideoModalProvider>
            <Footer />
          </Hydrate>
        </QueryClientProvider>
      </LanguageModalProvider>
    </div>
  );
}

export default MyApp;
