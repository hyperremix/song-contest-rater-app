import {
  Divider,
  Layout,
  Radio,
  StyleService,
  Text,
  Toggle,
  useStyleSheet,
} from '@ui-kitten/components';
import { ScreenLayout } from 'app/components/ScreenLayout';
import { ScreenTitle } from 'app/components/ScreenTitle';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeSlice } from 'theme/slice';
import { selectIsLightTheme } from 'theme/slice/selectors';
import { messages } from './messages';

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const { actions } = useThemeSlice();
  const { t, i18n } = useTranslation();
  const styles = useStyleSheet(themedStyles);

  const isLightTheme = useSelector(selectIsLightTheme);

  const onThemeChange = (isDarkTheme) => {
    dispatch(actions.changeTheme(!isDarkTheme));
  };

  return (
    <>
      <ScreenTitle title={t(...messages.settingsTitle())} />
      <ScreenLayout>
        <Layout style={styles.item}>
          <Text style={styles.header}>{t(...messages.themeHeader())}</Text>
          <Divider />
          <Layout style={styles.setting}>
            <Text category="h4">Dark Mode</Text>
            <Toggle
              style={styles.toggle}
              checked={!isLightTheme}
              onChange={onThemeChange}
            />
          </Layout>
          <Divider />
        </Layout>
        <Layout>
          <Text style={styles.header}>{t(...messages.languageHeader())}</Text>
          <Divider />
          <Layout style={styles.setting}>
            <Text category="h4">{t(...messages.english())}</Text>
            <Radio
              checked={i18n.language === 'en'}
              onChange={() => i18n.changeLanguage('en')}
            />
          </Layout>
          <Divider />
          <Layout style={styles.setting}>
            <Text category="h4">{t(...messages.german())}</Text>
            <Radio
              checked={i18n.language === 'de'}
              onChange={() => i18n.changeLanguage('de')}
            />
          </Layout>
          <Divider />
        </Layout>
      </ScreenLayout>
    </>
  );
};

const themedStyles = StyleService.create({
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  item: {
    marginBottom: 8,
  },
  toggle: {
    alignSelf: 'flex-start',
  },
  header: {
    color: 'color-primary-default',
    marginBottom: 8,
  },
});
