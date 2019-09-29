import ApolloClient from 'apollo-boost';
import { API_URL, GITHUB_API_TOKEN } from 'react-native-dotenv';

const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
};

const client = new ApolloClient({
  uri: API_URL,
  headers: {
    authorization: `bearer ${GITHUB_API_TOKEN}`,
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      // eslint-disable-next-line no-console
      console.log('ERR: ', graphQLErrors);
    }
    if (networkError) {
      // eslint-disable-next-line no-console
      console.log('NET ERR: ', graphQLErrors);
    }
  },
});
client.defaultOptions = defaultOptions;
export default client;
