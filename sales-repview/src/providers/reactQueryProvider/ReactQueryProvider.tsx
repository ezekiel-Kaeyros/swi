'use client';
import { ThemeProviderProps } from 'next-themes/dist/types';
import React, { ReactNode } from 'react';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export interface ProvidersProps {
  children: ReactNode;
}

export function ReactQueryProvider({ children }: ProvidersProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReactQueryDevtools initialIsOpen={true} />
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
