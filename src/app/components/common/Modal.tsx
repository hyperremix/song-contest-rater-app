import { Layout, Modal as UIKittenModal } from '@ui-kitten/components';
import { Button } from 'app/components/common/Button';
import { Card } from 'app/components/common/Card';
import React, { FC, ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { margins, paddings } from 'theme';

type Props = {
  visible?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  style?: StyleProp<ViewStyle>;
  onClose?: (() => void) | undefined;
};

export const Modal: FC<Props> = ({
  children,
  header,
  footer,
  visible,
  style,
  onClose,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <View style={[paddings.l]}>
      <UIKittenModal
        visible={visible}
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        style={[paddings.l, { width: '100%' }]}
        onBackdropPress={onClose}
      >
        {!!onClose && (
          <Layout style={{ alignItems: 'flex-end' }}>
            <Button
              status="basic"
              appearance="ghost"
              leftIconName="close"
              iconSize={24}
              style={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                minWidth: 0,
                minHeight: 0,
                borderWidth: 0,
                ...margins.tl,
                ...margins.rl,
              }}
              onPress={onClose}
            />
          </Layout>
        )}
        <Card header={header} footer={footer} style={style}>
          {children}
        </Card>
      </UIKittenModal>
    </View>
  );
};
