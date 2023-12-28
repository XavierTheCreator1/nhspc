import React from 'react';
import StudentNumber from '@/app/components/login/StudentNumber';
import RememberMe from '@/app/components/login/RememberMe';

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="max-w-40 flex h-3/5 max-h-96 w-3/5 items-center justify-center rounded-2xl bg-base-300">
        <StudentNumber />
      </div>
    </main>
  );
};

export default LoginPage;
