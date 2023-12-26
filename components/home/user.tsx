import React from 'react';
import Link from 'next/link';
import { useAuthState } from '@/contexts/auth';

const User = () => {
  const {
    loading: isLoading = false,
    isAuthenticated: isLoggedIn = false,
    user: currentUser = null,
    setLogout,
  } = useAuthState() ?? {};

  const logout = () => {
    if (setLogout) {
      setLogout();
      window.location.href = '/';
    } else {
      console.error('Logout function is not available');
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isLoggedIn ? (
        <>
          <li className="d-none d-lg-block">
            <Link href={`/user/profile`}>
              <i className="sk sk-user" />
              <span>{currentUser && currentUser.email}</span>{' '}
            </Link>
          </li>
          <li className="d-none d-lg-block">
            <Link href={`/`} onClick={logout}>
              <i className="sk sk-user" />
              <span>Гарах</span>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="d-none d-lg-block">
            <Link href={`/login`}>
              <i className="sk sk-user" />
              <span>Нэвтрэх</span>
            </Link>
          </li>
          <li className="d-none d-lg-block">
            <Link href={`/register`}>
              <i className="sk sk-user" />
              <span>Бүртгүүлэх</span>
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default User;
