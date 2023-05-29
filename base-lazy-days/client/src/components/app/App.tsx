import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactElement } from 'react';

import { queryclient } from '../../react-query/queryClient';
import { theme } from '../../theme';
import { Loading } from './Loading';
import { Navbar } from './Navbar';
import { Routes } from './Routes';

export function App(): ReactElement {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Loading />
          <Routes />
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
