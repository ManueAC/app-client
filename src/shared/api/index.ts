import { ApolloClient, InMemoryCache } from "@apollo/client";
import { REACT_API_DOMAIN } from "../constants/environment-constants";

/* Instantiate new instance with workspace endpoint */
// export const client = new Client(REACT_APP_8BASE_API_ENDPOINT);

export const client = new ApolloClient({
  uri: `${REACT_API_DOMAIN}`,
  cache: new InMemoryCache(),
});
