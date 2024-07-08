import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

/**
 * @todo 추후 share로 분리
 */
const queryClient = new QueryClient();

type QueryClientProviderProps = {
  children: ReactNode;
};

export const QueryClientProvider = (props: QueryClientProviderProps) => {
  const { children } = props;
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};
