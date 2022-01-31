import { Text as UIKittenText, TextProps } from '@ui-kitten/components';
import React, { FC } from 'react';

type Props = Omit<TextProps, 'category'> & {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 's1'
    | 's2'
    | 'p1'
    | 'p2'
    | 'c1'
    | 'c2'
    | 'label';
};

export const Text: FC<Props> = ({ variant, ...props }) => (
  <UIKittenText category={variant} {...props}>
    {props.children}
  </UIKittenText>
);
