import {
  Divider,
  Layout,
  Radio,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { useTranslation } from 'app/hooks/useTranslation';
import { NavBarScreenShell } from 'app/screenShells/NavBarScreenShell';
import { translations } from 'i18n';
import { Language } from 'i18n/Language';
import React, { FC } from 'react';

export const SettingsScreen: FC = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyleSheet(themedStyles);

  return (
    <NavBarScreenShell screenTitle={t(translations.settings.title)}>
      <Text style={styles.header}>
        {t(translations.settings.languageHeader)}
      </Text>
      <Divider />
      <Layout style={styles.setting}>
        <Text category="h4">{t(translations.settings.english)}</Text>
        <Radio
          checked={i18n.language === Language.en}
          onChange={() => i18n.changeLanguage(Language.en)}
        />
      </Layout>
      <Divider />
      <Layout style={styles.setting}>
        <Text category="h4">{t(translations.settings.german)}</Text>
        <Radio
          checked={i18n.language === Language.de}
          onChange={() => i18n.changeLanguage(Language.de)}
        />
      </Layout>
      <Divider />
    </NavBarScreenShell>
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
