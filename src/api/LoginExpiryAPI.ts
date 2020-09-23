import dayjs from 'dayjs';
import 'whatwg-fetch'

export interface LoginExpiryResponse {
  status: number,
  tidspunkt?: Date
}

export const ParseExpiryDate = (value: string) => dayjs(value.replace(/([+-]\d{2})(\d{2})$/g, '$1:$2'), 'YYYY-MM-DDTHH:mm:ssZ[Z]','no').toDate()

const LoginExpiryAPI = (): Promise<LoginExpiryResponse> => {
  return fetch('/api/v1/login-expiry', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then(response => {
    if (response.status === 200) {
      return response.json().then(data => {
        return {
          status: response.status,
          tidspunkt: ParseExpiryDate(data)
        };
      });
    }
    return {
      status: response.status
    };
  });
}

export default LoginExpiryAPI;
