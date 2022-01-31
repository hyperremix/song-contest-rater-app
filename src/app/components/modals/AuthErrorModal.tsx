import { Button, Modal, Text } from 'app/components/common';
import { useTranslation } from 'app/hooks';
import { translations } from 'i18n/translations';
import React, { FC } from 'react';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const AuthErrorModal: FC<Props> = ({ visible, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
      onClose={onClose}
      visible={visible}
      header={<Text variant="h1">{t(translations.error.auth.title)}</Text>}
      footer={
        <Button status="basic" onPress={onClose}>
          {t(translations.error.auth.buttonLabel)}
        </Button>
      }
    >
      <Text>{t(translations.error.auth.message)}</Text>
    </Modal>
  );
};
