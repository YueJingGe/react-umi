import request from '../../../utils/request';

function getUser() {
  return request('/api/user', {
    method: 'GET',
  });
}

export { getUser };
