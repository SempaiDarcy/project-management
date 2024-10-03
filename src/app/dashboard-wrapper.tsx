import { ReactNode } from 'react';

export const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      sidebar
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}
      >
        navbar
        {children}
      </main>
    </div>
  );
};
