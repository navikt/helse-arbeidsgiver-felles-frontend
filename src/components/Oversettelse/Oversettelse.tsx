import { useTranslation } from 'react-i18next';
import Tekstomrade, { BoldRule, HighlightRule, LinebreakRule } from 'nav-frontend-tekstomrade';
import { ListeRule } from './ListeRule';
import { UListeRule } from './UListeRule';
import { LenkeRule } from './LenkeRule';
import React from 'react';

interface OversettelseProps {
  langKey: string;
  variables?: any;
  className?: any;
}

/*
bullets: --
ul start: -##
ul end: ##-
bold: _text_
link: [link name](link url)
 */
const Oversettelse = ({ className, langKey, variables }: OversettelseProps) => {
  const { t } = useTranslation();
  return (
    <Tekstomrade className={className} as='span' rules={[ListeRule, UListeRule, HighlightRule, BoldRule, LenkeRule, LinebreakRule]}>
      {t(langKey, variables)}
    </Tekstomrade>
  );
};

export default Oversettelse;
