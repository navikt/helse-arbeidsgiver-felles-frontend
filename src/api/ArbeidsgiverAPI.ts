import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import 'whatwg-fetch'

// {
//   'name' : 'STADLANDET OG SINGSÅS',
//     'type' : 'Enterprise',
//     'parentOrganizationNumber' : null,
//     'organizationForm' : 'AS',
//     'organizationNumber' : '911366940',
//     'socialSecurityNumber' : null,
//     'status' : 'Active'
// }

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
  status: number,
  organisasjoner: Organisasjon[]
}

export enum Status {
  NotStarted = 0,
  Started = 1,
  Successfully = 200,
  Unknown = -2,
  Timeout = -1,
  Error = 500,
  Unauthorized = 401
}

const GetArbeidsgivere = (): Promise<ArbeidsgivereInterface> => {

  return Promise.race([
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 10000)
    ).then(() => {
      return {
        status: Status.Timeout,
        organisasjoner: []
      };
    }).catch(() => {
      return {
        status: Status.Timeout,
        organisasjoner: []
      };
    })
    ,
    fetch('/api/v1/arbeidsgivere', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then(response => {
      if (response.status === Status.Successfully) {
        return response.json().then(data => {
          return {
            status: Status.Successfully,
            organisasjoner: mapArbeidsgiver(data)
          };
        });
      }
      return {
        status: response.status,
        organisasjoner: []
      };
    })
  ]);
}

export default { GetArbeidsgivere: GetArbeidsgivere }
