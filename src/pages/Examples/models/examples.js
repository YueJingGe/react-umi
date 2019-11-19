import * as services from '../services/examples';

export default {
  namespace: 'examples',
  state: {
    loading: false,
    typeList: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/examples') {
          dispatch({
            type: 'getTypeList',
            payload: {
              id: 2,
              key: '75d6b09546339041f7efd66ed97ed971',
            },
          });
        }
      });
    },
  },
  effects: {
    *getTypeList({ payload }, { call, put }) {
      yield put({
        type: 'setLoading',
        payload: {
          loading: true,
        },
      });
      const { data } = yield call(services.getTypeList, payload);
      if(data.reason == 'success') {
        yield put({
          type: 'setTypeList',
          payload: {
            data: data.result,
            loading: false,
          },
        });
      }
    },
  },
  reducers: {
    setTypeList(state, { payload: { data: typeList, loading } }) {
      return {
        ...state,
        typeList,
        loading,
      };
    },
    setLoading(state, { payload: { loading } }) {
      return {
        ...state,
        loading,
      };
    },
  },
};
