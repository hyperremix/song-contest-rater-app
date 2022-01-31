import { Button } from 'app/components/common';
import { LanguageSelector } from 'app/components/settings/LanguageSelector';
import { useTranslation } from 'app/hooks';
import { NavBarScreenShell } from 'app/screenShells/NavBarScreenShell';
import { translations } from 'i18n';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';
import { auth0Client } from 'utils/auth';

export const SettingsScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await auth0Client.logout();
    dispatch(userActions.logoutSucceeded());
  };

  return (
    <NavBarScreenShell screenTitle={t(translations.settings.title)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <LanguageSelector />
      </View>
      <Button onPress={handleLogout}>
        {t(translations.auth.logoutButtonLabel)}
      </Button>
    </NavBarScreenShell>
  );
};
