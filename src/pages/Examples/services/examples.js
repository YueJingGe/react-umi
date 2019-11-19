import request from '../../../utils/request';

function getTypeList(payload) {
  const { id, key } = payload;
  return request(`/api/zuowen/typeList?id=${id}&key=${key}`, {
    method: 'GET'
  });
}

export { getTypeList };
