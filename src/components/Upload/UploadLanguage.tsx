import { UploadKeys } from './UploadKeys';
import { Locale } from '../../locale/Locale';

export const UploadLanguage: Record<UploadKeys, Locale> = {
  UPLOAD_TOO_BIG: {
    nb: 'Filen er for stor',
    en: 'File size too big'
  },
  UPLOAD_DELETE: {
    nb: 'Slett',
    en: 'Delete'
  },
  UPLOAD_FILENAME: {
    nb: 'Lastet opp:',
    en: 'Filename:'
  }
};
