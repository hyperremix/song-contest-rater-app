import { Icon as UIKittenIcon, IconProps } from '@ui-kitten/components';
import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';
import { colorDisabled } from 'theme';

type Props = IconProps & {
  size?: number;
  onPress?: () => void;
};

export const Icon: FC<Props> = ({ size = 24, ...props }) => {
  const icon = (
    <UIKittenIcon
      {...props}
      style={[
        props.style,
        {
          height: size,
          width: size,
          tintColor: props.disabled ? colorDisabled : props.style?.tintColor,
        },
      ]}
    />
  );

  return !!props.onPress ? (
    <TouchableHighlight
      onPress={props.onPress}
      activeOpacity={1}
      underlayColor="transparent"
      disabled={props.disabled}
    >
      {icon}
    </TouchableHighlight>
  ) : (
    icon
  );
};
