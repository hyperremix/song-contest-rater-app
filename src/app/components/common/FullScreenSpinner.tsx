import { Layout, Spinner } from '@ui-kitten/components';
import { EvaStatus } from '@ui-kitten/components/devsupport';
import React, { FC } from 'react';

interface Props {
  status?: EvaStatus;
}

export const FullScreenSpinner: FC<Props> = ({ status = 'primary' }) => (
  <Layout
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <Spinner status={status} size="giant" />
  </Layout>
);
