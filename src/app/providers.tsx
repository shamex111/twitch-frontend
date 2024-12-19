'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import { store } from './(config)/store';

const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#333',
              color: '#fff'
            }
          }}
        />
        {children}
      </QueryClientProvider>
    </Provider>
  );
};
export default Providers;
