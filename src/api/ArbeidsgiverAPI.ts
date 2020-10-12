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
      if (response.status == Status.Successfully) {
        return response.json().then(data => {
          return {
            status: Status.Successfully,
            organisasjoner: mapArbeidsgiver(data)
          };
        });
      }
      if (response.status == Status.Unauthorized || response.status == Status.Error) {
        return response.json().then(data => {
          return {
            status: response.status,
            organisasjoner: []
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
