import React from 'react';

import Redirect from '@/hocs/redirect';
import Loading from '@/components/loading';
import { useAuthState } from '@/contexts/auth';

const withAuth = (Component: any) => {
  const WrappedComponent = (props: any) => {
    const { isAuthenticated, loading, user } = useAuthState() || {};
    console.log('user', user);
    if (loading) {
      return <Loading />;
    }
    if (!isAuthenticated) {
      return <Redirect ssr to="/login" />;
    }

    return <Component user={user} loading={loading} {...props} />;
  };
  return WrappedComponent;
};

export default withAuth;
