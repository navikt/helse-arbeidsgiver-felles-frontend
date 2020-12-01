import ArbeidsgiverAPI, { Status } from './ArbeidsgiverAPI';

describe('ArbeidsgiverAPI', () => {

  afterAll(() => {
    jest.useRealTimers();
  });

  const ARBEIDSGIVERE = [
    {
    'name' : 'STADLANDET OG SINGSÅS',
    'type' : 'Enterprise',
    'parentOrganizationNumber' : null,
    'organizationForm' : 'AS',
    'organizationNumber' : '911366940',
    'socialSecurityNumber' : null,
    'status' : 'Active'
  }, {
    'name' : 'HØNEFOSS OG ØLEN',
    'type' : 'Enterprise',
    'parentOrganizationNumber' : null,
    'organizationForm' : 'AS',
    'organizationNumber' : '910020102',
    'socialSecurityNumber' : null,
    'status' : 'Active'
  }, {
    'name' : 'JØA OG SEL',
    'type' : 'Business',
    'parentOrganizationNumber' : '911366940',
    'organizationForm' : 'BEDR',
    'organizationNumber' : '910098896',
    'socialSecurityNumber' : null,
    'status' : 'Active'
  }];

  it('skal returnere arbeidsgivere', async () => {
    const mockArbeidsgivere = Promise.resolve({
      status: 200,
      json: () => Promise.resolve(ARBEIDSGIVERE)
    } as Response);
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockArbeidsgivere);
    const result = await ArbeidsgiverAPI.GetArbeidsgivere('dummy');
    expect(result.status).toEqual(200);
    expect(result.organisasjoner.length).toEqual(3);
    expect(result.organisasjoner[0].Name).toEqual('STADLANDET OG SINGSÅS');
    expect(result.organisasjoner[0].OrganizationForm).toEqual('AS');
    expect(result.organisasjoner[0].OrganizationNumber).toEqual('911366940');
    expect(result.organisasjoner[0].ParentOrganizationNumber).toEqual(null);
    expect(result.organisasjoner[0].Status).toEqual('Active');
    expect(result.organisasjoner[0].Type).toEqual('Enterprise');
  });

  it('skal håndtere 401', async() => {
    const mockArbeidsgivere = Promise.resolve({
      status: 401,
      json: () => Promise.resolve({
        ARBEIDSGIVERE
      }),
    } as Response);
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockArbeidsgivere);
    expect(await ArbeidsgiverAPI.GetArbeidsgivere('')).toStrictEqual({
      status: 401,
      organisasjoner: []
    });
  });

  it('skal håndtere 500', async () => {
    const mockError = Promise.resolve({
      status: 500,
      json: () => Promise.resolve({

      }),
    } as Response);
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockError);
    expect(await ArbeidsgiverAPI.GetArbeidsgivere('')).toStrictEqual({
      status: 500,
      organisasjoner: []
    });
  });

  it('skal håndtere token invalid', async () => {
    const mockToken = Promise.resolve({
      status: 401,
      json: {},
    } as Response);
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockToken);
    expect(await ArbeidsgiverAPI.GetArbeidsgivere('')).toStrictEqual({
      status: 401,
      organisasjoner: []
    });
  });

  it('skal håndtere responser vi ikke har tenkt på enda', async () => {
    const mockToken = Promise.resolve({
      status: 1234,
      json: {},
    } as Response);
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockToken);
    expect(await ArbeidsgiverAPI.GetArbeidsgivere('')).toStrictEqual({
      status: -2,
      organisasjoner: []
    });
  });

  it('skal håndtere timeout', async() => {
    jest.useFakeTimers();

    const mockTimeout = Promise.resolve({
      status: -3,
      json: () => Promise.reject({
      }),
    } as Response);

    jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockTimeout);
    const verdi = ArbeidsgiverAPI.GetArbeidsgivere('');
    jest.advanceTimersByTime(15000)
    expect(await verdi).toStrictEqual({
      status: Status.Timeout,
      organisasjoner: []
    });
  });

});
