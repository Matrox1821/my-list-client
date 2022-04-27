import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const actionType = {
  SetUser: '[USERS] SET_USER',
};

export const initialState = {
  username: '',
};

export const reducer = persistReducer(
  { storage, key: 'user' },
  (state = initialState, action) => {
    switch (action.type) {
      case actionType.SetUser:
        return { ...(state as object), username: (action as any).payload };

      default:
        return state;
    }
  }
);

export const SetUser = (data: Object) => ({
  type: actionType.SetUser,
  payload: data,
});
