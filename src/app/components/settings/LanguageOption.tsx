import { Layout, Radio } from '@ui-kitten/components';
import { Text } from 'app/components/common';
import i18n from 'i18n/i18n';
import { Language } from 'i18n/Language';
import React, { FC } from 'react';
import { margins } from 'theme';

type Props = {
  label: string;
  value: Language;
};

export const LanguageOption: FC<Props> = ({ label, value }) => (
  <Layout
    style={[
      {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      margins.vxs,
    ]}
  >
    <Text variant="h4">{label}</Text>
    <Radio
      checked={i18n.language === value}
      onChange={() => i18n.changeLanguage(value)}
    />
  </Layout>
);
