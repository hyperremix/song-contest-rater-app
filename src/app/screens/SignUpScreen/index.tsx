/**
 *
 * SignUpScreen
 *
 */
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Layout } from '@ui-kitten/components';
import { ScreenLayout } from 'app/components/ScreenLayout';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

export const SignUpScreen = (props: Props) => {
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
          <Layout
            style={{
              flexDirection: 'row',
            }}
          >
            <Input
              placeholder="Firstname"
              style={{ flex: 1, marginRight: 4 }}
            />
            <Input placeholder="Lastname" style={{ flex: 1 }} />
          </Layout>
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Button>Sign In</Button>
          <Button
            appearance="ghost"
            onPress={() => navigation.navigate('SignIn')}
          >
            Already have an account? Sign In!
          </Button>
        </ScreenLayout>
      </Layout>
    </>
  );
};
