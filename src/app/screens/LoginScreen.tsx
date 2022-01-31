import { Button, Logo } from 'app/components/common';
import { useTranslation } from 'app/hooks';
import { translations } from 'i18n';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';
import { margins, paddings } from 'theme';
import { auth0Client } from 'utils/auth';

export const LoginScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const authData = await auth0Client.authorize();
    console.log(JSON.stringify(authData, null, 2));
    dispatch(userActions.loginSucceeded());
  };

  return (
    <View
      style={[
        { flex: 1, justifyContent: 'center', alignItems: 'center' },
        paddings.hl,
      ]}
    >
      <Logo size={256} style={margins.bl} />
      <Button onPress={handleLogin} style={{ width: 256 }}>
        {t(translations.auth.loginButtonLabel)}
      </Button>
    </View>
  );
};
