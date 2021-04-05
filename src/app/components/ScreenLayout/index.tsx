/**
 *
 * ScreenLayout
 *
 */
import { Layout, StyleService } from '@ui-kitten/components';
import * as React from 'react';

interface Props {
  children: React.ReactChild[];
}

export const ScreenLayout = ({ children }: Props) => (
  <Layout style={styles.container}>{children}</Layout>
);

const styles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
