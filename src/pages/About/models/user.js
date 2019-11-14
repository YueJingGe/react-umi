import * as services from '../services/user';

export default {
  namespace: 'user',
  state: {
    loading: false,
    userInfo: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/about') {
          dispatch({
            type: 'getUser',
            payload: query,
          });
        }
      });
    },
  },
  effects: {
    *getUser({ payload }, { call, put }) {
      yield put({
        type: 'setLoading',
        payload: {
          loading: true,
        },
      });
      const { data } = yield call(services.getUser);
      yield put({
        type: 'setUser',
        payload: {
          data,
          loading: false,
        },
      });
    },
  },
  reducers: {
    setUser(state, { payload: { data: userInfo, loading } }) {
      return {
        ...state,
        userInfo,
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
