import dayjs from 'dayjs';
import * as AuthSession from 'expo-auth-session';
import { TAuthData } from './TAuthData';

export const mapTokenResponse = (
  tokenResponse: AuthSession.TokenResponse,
): TAuthData | null => {
  if (!(tokenResponse.accessToken && tokenResponse.expiresIn)) {
    return null;
  }

  return {
    expiresOn: dayjs().add(tokenResponse.expiresIn, 'seconds').toISOString(),
    accessToken: tokenResponse.accessToken,
    idToken: tokenResponse.idToken,
    refreshToken: tokenResponse.refreshToken,
  };
};
