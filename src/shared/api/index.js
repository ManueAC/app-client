import { Client } from '@8base/api-client';
const { REACT_APP_8BASE_API_ENDPOINT } = process.env;

/* Instantiate new instance with workspace endpoint */
export const client = new Client(REACT_APP_8BASE_API_ENDPOINT);
