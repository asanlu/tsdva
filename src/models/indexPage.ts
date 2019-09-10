import { Subscription, Effect } from 'dva';
import { Reducer } from 'redux';
import { getMoiveTop250 } from '@/services/example';


interface IndexPageModelState {
  [key: string]: any;
}

interface IndexPageModelType {
  namespace: string;
  state: IndexPageModelState;
  effects: {
    fetchTop250: Effect;
  }
  reducers: {
    [key: string]: Reducer<any>;
  };
  subscriptions: { setup: Subscription };
}

const IndexPageModel: IndexPageModelType = {

  namespace: 'indexPage',

  state: {},

  effects: {
    *fetchTop250({ payload }, { call, put }) {
      const response = yield call(getMoiveTop250, payload);
      yield put({ type: 'reducerData', payload: response });
    },
  },

  reducers: {
    reducerData(state, action) {
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ history }) {

    },
  },
};

export default IndexPageModel;
