// TODO: switch to TypeScript config file as soon as it's stable
// see: https://docs.expo.io/workflow/configuration/#using-typescript-for-configuration-appconfigts-instead-of

import 'dotenv/config';

export const ENV = {
  stage: process.env.STAGE,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENT_ID,
  auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
  auth0Audience: process.env.AUTH0_AUDIENCE,
  backendUrl: process.env.BACKEND_URL,
};

const config = ({ config }) => {
  return {
    ...config,
    extra: {
      ...ENV,
    },
  };
};

export default config;
