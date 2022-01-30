import { DrawerActions, useNavigation } from '@react-navigation/native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { Logo } from 'app/components/common/Logo';
import React, { cloneElement, FC, ReactElement } from 'react';
import { View } from 'react-native';
import { colorBackgroundDark, paddings } from 'theme';
import { Icon } from './Icon';

type Props = {
  screenTitle?: string;
  hasDrawer?: boolean;
  onGoBack?: () => void;
  accessoryRightIcon?: ReactElement;
};

export const NavBar: FC<Props> = ({
  hasDrawer = false,
  screenTitle,
  onGoBack,
  accessoryRightIcon,
}) => {
  const navigation = useNavigation();

  return (
    <Layout>
      <TopNavigation
        style={{ backgroundColor: colorBackgroundDark }}
        alignment="center"
        accessoryRight={() =>
          accessoryRightIcon ? (
            <TopNavigationAction
              icon={(props) => cloneElement(accessoryRightIcon, props)}
            />
          ) : (
            <View />
          )
        }
        accessoryLeft={() => {
          if (hasDrawer) {
            return (
              <TopNavigationAction
                icon={(props) => (
                  <Icon
                    {...props}
                    name="menu"
                    onPress={() =>
                      navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                    size={24}
                  />
                )}
              />
            );
          }

          if (onGoBack) {
            return (
              <TopNavigationAction
                icon={(props) => (
                  <Icon
                    {...props}
                    name="arrow-left"
                    onPress={onGoBack}
                    size={24}
                  />
                )}
              />
            );
          }

          return (
            <TopNavigationAction
              icon={(props) => (
                <Icon
                  {...props}
                  name="arrow-left"
                  onPress={() => navigation.goBack()}
                  size={24}
                />
              )}
            />
          );
        }}
        title={() =>
          screenTitle ? (
            <Text
              category="h1"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={paddings.hxl}
            >
              {screenTitle}
            </Text>
          ) : (
            <Logo size={32} />
          )
        }
      />
      <Divider />
    </Layout>
  );
};
