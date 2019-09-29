import PropTypes from 'prop-types';

export default {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    repositories: PropTypes.object,
  }),
  error: PropTypes.shape({
    status: PropTypes.bool,
    message: PropTypes.string,
  }),
};
