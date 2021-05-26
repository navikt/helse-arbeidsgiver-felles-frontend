import React from 'react';
import Oversettelse from '../Oversettelse/Oversettelse';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../locale/Locale';
import Side from '../Side/Side';

enum PageNotFoundKeys {
  PAGE_NOT_FOUND_TITLE = 'PAGE_NOT_FOUND_TITLE',
  PAGE_NOT_FOUND_DESCRIPTION = 'PAGE_NOT_FOUND_DESCRIPTION'
}

export const PageNotFoundLanguage: Record<PageNotFoundKeys, Locale> = {
  PAGE_NOT_FOUND_TITLE: {
    nb: 'Siden finnes ikke',
    en: 'Page not found'
  },
  PAGE_NOT_FOUND_DESCRIPTION: {
    nb: 'Siden finnes ikke. [/nb/innsending](Gå til skjema for innsending)',
    en: 'Page not found. [/en/innsending](Go back to form for submitting)'
  }
};

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Side
      sidetittel={t(PageNotFoundKeys.PAGE_NOT_FOUND_TITLE)}
      title={''}
      subtitle=''
      bedriftsmeny={false}
    >
      <Oversettelse langKey={PageNotFoundKeys.PAGE_NOT_FOUND_DESCRIPTION} />
    </Side>
  );
};

export default PageNotFound;
