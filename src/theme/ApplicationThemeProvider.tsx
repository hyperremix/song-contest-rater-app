import * as eva from '@eva-design/material';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React, { FC } from 'react';
import { MaterialCommunityIconsPack } from './MaterialCommunityIconsPack';
import { theme } from './theme';

export const ApplicationThemeProvider: FC = ({ children }) => (
  <>
    <IconRegistry icons={MaterialCommunityIconsPack} />
    <ApplicationProvider {...eva} theme={theme}>
      {children}
    </ApplicationProvider>
  </>
);
