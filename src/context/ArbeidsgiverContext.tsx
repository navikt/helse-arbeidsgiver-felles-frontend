import React, { createContext, useContext, useEffect, useState } from 'react';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import ArbeidsgiverAPI, { Status } from '../api/ArbeidsgiverAPI';
import Spinner from 'nav-frontend-spinner';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import Environment from '../Environment';

interface ArbeidsgiverInterface {
  arbeidsgivere: Array<Organisasjon>,
  setArbeidsgivere: any,
  firma: string,
  setFirma: any
  arbeidsgiverId: string,
  setArbeidsgiverId: any
}

export const buildArbeidsgiverContext = (firma: string, arbeidsgiverId: string, arbeidsgivere: Organisasjon[]) => ({
  arbeidsgivere,
  firma,
  arbeidsgiverId,
}) as ArbeidsgiverInterface

export const buildArbeidsgiver = (
  Name: string,
  OrganizationForm: string,
  OrganizationNumber: string,
  ParentOrganizationNumber: string,
  Status: string,
  Type: string) : Organisasjon => {
  return {
    Name,
    OrganizationForm,
    OrganizationNumber,
    ParentOrganizationNumber,
    Status,
    Type
  }
}

const ArbeidsgiverContext = createContext(buildArbeidsgiverContext('', '', []));

interface ArbeidsgiverContextProviderProps {
  children: any,
  status?: number,
  arbeidsgivere?: Organisasjon[]
}

export const useArbeidsgiver = () => useContext(ArbeidsgiverContext);

export const ArbeidsgiverProvider = (props: ArbeidsgiverContextProviderProps) => {
  const [ status, setStatus ]  = useState<number>(props.status || Status.NotStarted);
  const [ arbeidsgivere, setArbeidsgivere ] = useState<Organisasjon[]>(props.arbeidsgivere || []);
  const [ firma, setFirma ] = useState<string>('');
  const [ arbeidsgiverId, setArbeidsgiverId ] = useState<string>('');
  const [ ready, setReady ] = useState<boolean>();

  useEffect(() => {
    if (status === Status.NotStarted) {
      setStatus(Status.Started);
      ArbeidsgiverAPI.GetArbeidsgivere().then(
        res => {
          setStatus(res.status);
          setArbeidsgivere(res.organisasjoner)
          setReady(ready)
        }
      )
    }
  }, [ status, ready ]);


  if (status === Status.Unauthorized) {
    window.location.href = new Environment().loginServiceUrl;
    return <div className="arbeidsgiver-provider-redirect" />;
  }

  if (status === Status.NotStarted || status === Status.Started) {
    return <Spinner type={'XXL'} className="sporenstreks-spinner" />;
  }

  if (status === Status.Error) {
    return (
      <AlertStripeFeil>
        Vi får akkurat nå ikke hentet alle data. (Kode 500)
        Vi jobber med å løse saken. Vennligst prøv igjen senere.
      </AlertStripeFeil>
    );
  }

  if (status === Status.Timeout) {
    return (
        <AlertStripeFeil>
          Vi får akkurat nå ikke hentet alle data. (Kode -1)
          Vi jobber med å løse saken. Vennligst prøv igjen senere.
        </AlertStripeFeil>
    );
  }

  if (status === Status.Unknown) {
    return (
      <AlertStripeFeil>
        Det oppstod en ukjent feil.
        Vi jobber med å løse saken. Vennligst prøv igjen senere.
      </AlertStripeFeil>
    );
  }

  return (
    <ArbeidsgiverContext.Provider value={{ arbeidsgivere, setArbeidsgivere, firma, setFirma, arbeidsgiverId, setArbeidsgiverId }}>
      { props.children }
    </ArbeidsgiverContext.Provider>
  )
}
