import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

function HelloWorld(): ReactElement {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('HelloWorld.content')}</p>
    </div>
  );
}

export default HelloWorld;
