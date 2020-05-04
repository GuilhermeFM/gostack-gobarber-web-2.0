import React from 'react';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <SignIn />
        </ToastProvider>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
