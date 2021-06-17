import React from 'react';
import { Label, SkjemaelementFeilmelding } from 'nav-frontend-skjema';
import Flatpickr from 'react-flatpickr';
import { Norwegian } from 'flatpickr/dist/l10n/no.js';
import dayjs from 'dayjs';
import classNames from 'classnames';

interface DatoVelgerProps {
  label?: React.ReactNode;
  dato?: Date;
  feilmelding?: string;
  placeholder?: string;
  onChange: (dato: Date) => void;
  id?: string;
  className?: string;
  minDate?: string | Date;
  maxDate?: string | Date;
  defaultDate?: string | Date;
  disabled?: boolean;
}

const formatDato = (dato?: Date) =>
  dato ? dayjs(dato).format('DD.MM.YYYY') : '';

const DatoVelger = (props: DatoVelgerProps) => {
  const handleClose = (dato: Date) => {
    props.onChange(dato);
  };

  const callendarOptions = {
    minDate: props.minDate,
    maxDate: props.maxDate,
    defaultDate: props.defaultDate
  };

  if (!props.minDate) delete callendarOptions.minDate;
  if (!props.maxDate) delete callendarOptions.maxDate;
  if (!props.defaultDate) delete callendarOptions.defaultDate;

  const feilmeldingClassName = props.feilmelding
    ? 'skjemaelement__input--harFeil'
    : '';

  return (
    <div className={'skjemaelement'}>
      <Label htmlFor={props.id ?? 'datoVelgerId'}>{props.label}</Label>
      <Flatpickr
        id={props.id ?? 'datoVelgerId'}
        placeholder={props.placeholder}
        className={classNames(
          'skjemaelement__input',
          feilmeldingClassName,
          props.className
        )}
        value={props.dato}
        disabled={props.disabled}
        options={{
          enableTime: false,
          mode: 'single',
          dateFormat: 'd.m.Y',
          locale: Norwegian,
          allowInput: true,
          clickOpens: true,
          formatDate: formatDato,
          onClose: (selectedDate: Date[]) => handleClose(selectedDate[0]),
          ...callendarOptions
        }}
      />
      {props.feilmelding && (
        <SkjemaelementFeilmelding>{props.feilmelding}</SkjemaelementFeilmelding>
      )}
    </div>
  );
};

export default DatoVelger;
