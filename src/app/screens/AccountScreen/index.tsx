import { Card, Layout, Text } from '@ui-kitten/components';
import React from 'react';

export const AccountScreen = () => {
  return (
    <>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Card>
          <Text>Welcome to the Account Screen</Text>
        </Card>
      </Layout>
    </>
  );
};
