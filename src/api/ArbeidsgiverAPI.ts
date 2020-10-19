import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import 'whatwg-fetch'

interface BackendOrganisasjon {
  name: string,
  type: string,
  parentOrganizationNumber?: string,
  organizationForm: string,
  organizationNumber: string,
  socialSecurityNumber?: string,
  status: string
}

export const mapArbeidsgiver = (backendData: BackendOrganisasjon[]): Organisasjon[] => backendData.map(o => ({
  Name: o.name,
  Type: o.type,
  OrganizationNumber: o.organizationNumber,
  OrganizationForm: o.organizationForm,
  Status: o.status,
  ParentOrganizationNumber: o.parentOrganizationNumber
} as Organisasjon));

export interface ArbeidsgivereInterface {
  status: number;
  organisasjoner: Array<Organisasjon>;
}

// eslint-disable-next-line no-unused-vars
export enum Status {NotStarted = -1, Started = 1, Successfully = 200, Unknown = -2, Timeout = -3, Error = 500, Unauthorized = 401}

const handleStatus = (response: Response) => {
  switch (response.status) {
    case 200:
      return response.json();
    case 401:
      return Promise.reject(Status.Unauthorized)
    case 500:
      return Promise.reject(Status.Error)
    default: Promise.reject(Status.Unknown);
  }
}

const GetArbeidsgivere = (basePath: string): Promise<ArbeidsgivereInterface> => {
  return Promise.race([
    new Promise((resolve, reject) =>
      setTimeout(() => reject("Tidsavbrudd"), 10000)
    ).then(() => {
      return {
        status: Status.Timeout,
        organisasjoner: []
      };
    }).catch(() => ({
      status: Status.Timeout,
      organisasjoner: []
    }))
    ,
    fetch(basePath + "/api/v1/arbeidsgivere", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(handleStatus)
      .then(json => ({
        status: Status.Successfully,
        organisasjoner: mapArbeidsgiver(json)
      })).catch((status) => ({
      status: status,
      organisasjoner: []
    }))
  ]);
}

export default { GetArbeidsgivere: GetArbeidsgivere }
