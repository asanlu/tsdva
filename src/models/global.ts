import { Subscription, Effect } from "dva";
import { Reducer } from "redux";


interface GlobalModelState {
  [key: string]: any;
}

interface GlobalModelType {
  namespace: string;
  state: GlobalModelState;
  effects: {
    fetch: Effect;
  }
  reducers: {
    [key: string]: Reducer<any>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType =  {

  namespace: 'global',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ history }) {

    },
  },
};

export default GlobalModel;
