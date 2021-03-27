import { Card, Layout, Text } from '@ui-kitten/components';
import { NavBar } from 'app/components/NavBar';
import React from 'react';

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
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
