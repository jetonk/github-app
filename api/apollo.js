import ApolloClient from 'apollo-boost';
import { API_URL, GITHUB_API_TOKEN } from 'react-native-dotenv';

const client = new ApolloClient({
  uri: API_URL,
  headers: {
    authorization: `bearer ${GITHUB_API_TOKEN}`,
  },
});
export default client;
