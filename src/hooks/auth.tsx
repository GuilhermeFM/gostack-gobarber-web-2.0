import React, { createContext, useState, useCallback, useContext } from 'react';

import api from '../services/api';

interface ISignInCrendentials {
  email: string;
  password: string;
}

interface IAuthState {
  user: object;
  token: string;
}

interface IAuthContext {
  user: object;
  signIn(crendentials: ISignInCrendentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token');
    const user = localStorage.getItem('@Gobarber:user');

    if (token && user) {
      return { user: JSON.parse(user), token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@Gobarber:user', JSON.stringify(user));
    localStorage.setItem('@Gobarber:token', token);

    setAuthState({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber:user');
    localStorage.removeItem('@Gobarber:token');
  }, []);

  return (
    <AuthContext.Provider value={{ user: authState.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
