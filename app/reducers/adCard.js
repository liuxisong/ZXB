import * as types from '../constants/ActionTypes';

const initialState = {
  ads: []
};

export default function (state = initialState, action) {
  const {payload, error, type} = action;
  switch (type) {
    case types.GET_INDEX_AD_CARDS:
      return {
        ...state,
        ads: payload
      };
    default:
      return state;
  }
}