import React, { ChangeEvent, useState } from 'react';
import { Feilmelding } from 'nav-frontend-typografi';
import './Upload.sass';
import { Locale } from '../../locale/Locale';
import { useTranslation } from 'react-i18next';

enum UploadKeys {
  TOO_BIG = 'TOO_BIG',
}

export const UploadLanguage: Record<UploadKeys, Locale> = {
  TOO_BIG: {
    nb: 'Filen er for stor',
    en: 'File size too big'
  }
};

interface UploadProps {
  id: string
  label: string
  extensions: string
  fileSize: number
  onChange: (file?: File) => void
}

const Upload = (props: UploadProps) => {
  const { t } = useTranslation();
  const [filnavn, setFilnavn] = useState<string>(props.label);
  const [feilmelding, setFeilmelding] = useState<string>('');
  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file.size > props.fileSize) {
        setFilnavn(props.label);
        setFeilmelding(t(UploadKeys.TOO_BIG));
      } else {
        setFilnavn(file.name);
        setFeilmelding('');
      }
      props.onChange(file);
    } else {
      props.onChange();
    }
  }
  return (
    <div className="upload">
      <label className="knapp filknapp">
        <input className="fileinput"
               type="file"
               id={props.id}
               accept={props.extensions}
               onChange={handleUpload}
               onClick={(e: any) => e.target.value = null}/>
        {filnavn}
      </label>
      {feilmelding &&
      <Feilmelding>{feilmelding}</Feilmelding>
      }
    </div>
  );
}

export default Upload;
