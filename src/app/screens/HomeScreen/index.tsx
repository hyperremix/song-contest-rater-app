import { Card, Layout, Text } from '@ui-kitten/components';
import { ScreenTitle } from 'app/components/ScreenTitle';
import React from 'react';

export const HomeScreen = () => {
  return (
    <>
      <ScreenTitle title="Song Contest Rater" />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Card>
          <Text>Welcome to the Home</Text>
        </Card>
      </Layout>
    </>
  );
};
