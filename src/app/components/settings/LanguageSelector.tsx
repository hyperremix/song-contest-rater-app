import { Divider } from '@ui-kitten/components';
import { Text } from 'app/components/common';
import { LanguageOption } from 'app/components/settings/LanguageOption';
import { useTranslation } from 'app/hooks';
import { translations } from 'i18n';
import { Language } from 'i18n/Language';
import React, { FC } from 'react';
import { View } from 'react-native';
import { colorPrimary, margins } from 'theme';

export const LanguageSelector: FC = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text
        style={[
          {
            color: colorPrimary,
          },
          margins.bs,
        ]}
      >
        {t(translations.settings.languageHeader)}
      </Text>
      <Divider />
      <LanguageOption
        label={t(translations.settings.english)}
        value={Language.English}
      />
      <Divider />
      <LanguageOption
        label={t(translations.settings.german)}
        value={Language.German}
      />
      <Divider />
    </View>
  );
};
