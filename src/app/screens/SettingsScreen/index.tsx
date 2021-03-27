import {
  Layout,
  Radio,
  RadioGroup,
  StyleService,
  Text,
  Toggle,
} from '@ui-kitten/components';
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

  const isLightTheme = useSelector(selectIsLightTheme);

  const onThemeChange = (isLightTheme) => {
    dispatch(actions.changeTheme(isLightTheme));
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.item}>
        <Text style={styles.header} category="h3">
          {t(...messages.themeHeader())}
        </Text>
        <Toggle
          style={styles.toggle}
          checked={isLightTheme}
          onChange={onThemeChange}
        >
          {`Checked: ${isLightTheme}`}
        </Toggle>
      </Layout>
      <Layout>
        <Text style={styles.header} category="h3">
          {t(...messages.languageHeader())}
        </Text>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index) => {
            setSelectedIndex(index);
            i18n.changeLanguage(index === 0 ? 'en' : 'de');
          }}
        >
          <Radio>{t(...messages.english())}</Radio>
          <Radio>{t(...messages.german())}</Radio>
        </RadioGroup>
      </Layout>
    </Layout>
  );
};

const styles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    marginBottom: 10,
  },
  toggle: {
    alignSelf: 'flex-start',
  },
  header: {
    marginBottom: 10,
  },
});
