import { FeatureToggles } from '../featureToggle/featureToggleInterface';

export const fetchFeatureToggles = (
    API_UNLEASH_PROXY_URL: string,
    featureToggles: FeatureToggles
) =>
    fetchToJson(
        `${API_UNLEASH_PROXY_URL}/feature-toggles${getFeatureToggleUrl(
            featureToggles
        )}`,
        { credentials: 'include' }
    );

export const getFeatureToggleUrl = (featureToggles: FeatureToggles) =>
    Object.keys(featureToggles)
        .map(
            (feature: string, i: number) => `${!i ? `?` : ``}feature=${feature}`
        )
        .join('&');

export async function fetchToJson<T>(
    url: string,
    config?: RequestInit
): Promise<T> {
    const respons = await fetch(url, config);
    const gyldigRespons = sjekkStatuskode(respons);
    return await toJson<T>(gyldigRespons);
}

class FetchError extends Error {
    public response: Response;

    constructor(reason: string, response: Response) {
        super(reason);
        this.response = response;
    }
}

function sjekkStatuskode(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new FetchError(response.statusText || response.type, response);
}

function toJson<T>(response: Response): Promise<T> {
    return response.json();
}

export default fetchFeatureToggles;
