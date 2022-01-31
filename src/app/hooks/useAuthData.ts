import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'store/user/selectors';
import { auth0Client, TAuthData } from 'utils/auth';

export const useAuthData = (): {
  isAuthenticated: boolean;
  authData: TAuthData | null;
} => {
  const [authData, setAuthData] = useState<TAuthData | null>(null);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const checkIsAuthenticated = async () => {
      const authData = await auth0Client.getValidAuthData();
      setAuthData(authData);
    };
    checkIsAuthenticated();
  }, [isAuthenticated]);

  return { isAuthenticated, authData };
};
