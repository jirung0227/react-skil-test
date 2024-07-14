import { QueryClientProvider } from '@/app/providers/QueryClientProvider.tsx';
import { BrowserRouter } from '@/app/providers/RouterProvider.tsx';

export const Providers = () => {
  return (
    <QueryClientProvider>
      <BrowserRouter />
    </QueryClientProvider>
  );
};
