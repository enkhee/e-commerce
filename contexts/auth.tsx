import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getSingleUser, getUserLogin } from '@/utils/user';

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string; // энэ талбар нь заавал байх албагүй
  // бусад хэрэгтэй талбаруудыг энд тодорхойлно
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  setLogin: (data: any) => Promise<void>;
  setLogout: () => void;
}

const AuthStateContext = createContext<AuthState | null>(null);

export const AuthProvider = ({ children }: any) => {
  const token = Cookies.get('token');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      if (token) {
        try {
          const user = await getSingleUser(1);
          if (user) setUser(user);
        } catch (err) {
          // noop
          console.log('token finish', err);
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const setLogin = async (data: any) => {
    try {
      const user = await getSingleUser(1);
      setUser(user);
    } catch (err) {
      // noop
      console.log(err);
    }
  };

  const setLogout = () => {
    Cookies.remove('token');
    setUser(null);
  };
  return (
    <AuthStateContext.Provider
      value={{ isAuthenticated: !!user, user, loading, setLogin, setLogout }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
