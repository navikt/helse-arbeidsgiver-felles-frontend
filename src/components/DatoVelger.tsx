import React from 'react';
import { Label, SkjemaelementFeilmelding } from 'nav-frontend-skjema';
import Flatpickr from 'react-flatpickr';
import { Norwegian } from 'flatpickr/dist/l10n/no.js';
import './DatoVelger.css';
import dayjs from 'dayjs';
import classNames from 'classnames';

interface DatoVelgerProps {
  label: string
  dato?: Date
  feilmelding?: string,
  placeholder?: string
  onChange: (dato: Date) => void
  id?: string
  className?: string
}

const formatDato = (dato?: Date) => (dato ? dayjs(dato).format('DD.MM.YYYY') : '')

const DatoVelger = (props: DatoVelgerProps) => {
  const handleClose = (dato: Date) => {
    props.onChange(dato);
  };

  return (
    <div className={'skjemaelement'}>
      <Label htmlFor={props.id ?? 'datoVelgerId'}>{props.label}</Label>
      <Flatpickr
        id={props.id ?? 'datoVelgerId'}
        placeholder={props.placeholder}
        className={classNames('skjemaelement__input ', props.className)}
        value={props.dato}

        options={{
          enableTime: false,
          mode: 'single',
          dateFormat: 'd.m.Y',
          locale: Norwegian,
          allowInput: true,
          clickOpens: true,
          formatDate: formatDato,
          onClose: (selectedDate: Date[]) => handleClose(selectedDate[0])
        }}
      />
      {
        props.feilmelding &&
        <SkjemaelementFeilmelding>{props.feilmelding}</SkjemaelementFeilmelding>
      }
    </div>
  )
};

export default DatoVelger;
