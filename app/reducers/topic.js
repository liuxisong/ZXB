import * as types from '../constants/ActionsTypes';

const initialState = {

};

export default function (state = initialState, action) {
  const {payload, error, meta = {}} = action;
  const topicType = meta.type;

  if (error) {
    return {
      ...state,
      alterMsg: 'error msg'
    }
  }

  switch (action.type) {
    case types.GET_TOPICS_BY_TYPE:
      return {
        ...state,
        [topicType]: state[topicType].concat(payload);
      };
    default:
      return state;
  }
  
}