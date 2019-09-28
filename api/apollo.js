import ApolloClient, { gql } from 'apollo-boost';
import { API_URL, GITHUB_API_TOKEN } from 'app/config';

const client = new ApolloClient({
  uri: API_URL,
  headers: {
    authorization: `bearer ${GITHUB_API_TOKEN}`,
  },
});
export default client;
