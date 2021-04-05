/**
 *
 * ScreenTitle
 *
 */
import { Layout, Text } from '@ui-kitten/components';
import * as React from 'react';

interface Props {
  title: string;
}

export const ScreenTitle = ({ title }: Props) => {
  return (
    <Layout
      style={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text category="h1">{title}</Text>
    </Layout>
  );
};
