import {
  Button as UIKittenButton,
  ButtonProps as UIKittenButtonProps,
  Icon,
} from '@ui-kitten/components';
import React, { FC } from 'react';
import { TMaterialIcon } from 'theme';

export type Props = UIKittenButtonProps & {
  leftIconName?: TMaterialIcon;
  rightIconName?: TMaterialIcon;
  iconSize?: number;
};

export const Button: FC<Props> = ({
  leftIconName,
  rightIconName,
  iconSize,
  ...props
}) => (
  <UIKittenButton
    {...props}
    style={[{ minWidth: 125 }, props.style]}
    accessoryLeft={
      leftIconName &&
      ((iconProps) => (
        <Icon
          {...iconProps}
          name={leftIconName as string} //casting as string to avoid TS2590
          size={iconSize}
        />
      ))
    }
    accessoryRight={
      rightIconName &&
      ((iconProps) => (
        <Icon
          {...iconProps}
          name={rightIconName as string} // casting as string to avoid TS2590
          size={iconSize}
        />
      ))
    }
  >
    {props.children}
  </UIKittenButton>
);
