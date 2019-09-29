import { gql } from 'apollo-boost';
import client from './apollo';

const getUser = async search => {
  return client.query({
    query: gql`
      {
        user(login: ${search}) {
          name
          avatarUrl
          bio
          repositories(first: 100) {
            nodes {
              name
              description
              url
              pushedAt
            }
          }
    			followers {
            totalCount
          }
    			following {
            totalCount
          }
    			starredRepositories {
            totalCount
          }
        }
      }
    `,
  });
};
export default getUser;
