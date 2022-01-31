import { Card as UIKittenCard } from '@ui-kitten/components';
import { FalsyFC } from '@ui-kitten/components/devsupport';
import React, { FC, ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { margins } from 'theme';

type Props = {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Card: FC<Props> = ({ children, header, footer, style }) => {
  return (
    <UIKittenCard style={style}>
      <FalsyFC
        component={(props) => <View {...props}>{header}</View>}
        style={{ ...margins.bs }}
      />
      {children}
      <FalsyFC
        component={(props) => <View {...props}>{footer}</View>}
        style={{ ...margins.tl }}
      />
    </UIKittenCard>
  );
};
