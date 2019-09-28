import { gql } from 'apollo-boost';
import client from './apollo';

const getUserQuery = async search => {
  return client.query({
    query: gql`
      {
        user(login: ${search}) {
          name
          avatarUrl
          bio
          repositories(first: 50, isFork: false) {
            nodes {
              name
              url
            }
          }
        }
      }
    `,
  });
};

const getUser = async search => {
  const result = await getUserQuery(search).catch(async err => {
    return { error: true, message: err.message };
  });
  return result;
};
export default getUser;
