/**
 *
 * SignInScreen
 *
 */
import { useNavigation } from '@react-navigation/core';
import { Button, Input, Layout } from '@ui-kitten/components';
import { ScreenLayout } from 'app/components/ScreenLayout';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

export const SignInScreen = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  return (
    <>
      <Layout
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ScreenLayout>
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Button>Sign In</Button>
          <Button
            appearance="ghost"
            onPress={() => navigation.navigate('SignUp')}
          >
            Don't have an account? Sign Up!
          </Button>
        </ScreenLayout>
      </Layout>
    </>
  );
};
