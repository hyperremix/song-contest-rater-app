const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          '@ui-kitten/components',
          'react-router-native',
        ],
      },
    },
    argv,
  );
  return config;
};
