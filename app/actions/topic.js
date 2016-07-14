import {createAction} from 'redux-actions';
import * as types from '../constants/ActionTypes';
import * as topicService from '../services/topicService';

export const getTopicsByType = createAction(
  types.GET_TOPICS_BY_TYPE, 
  async(type, params) => {
    return await topicService.getTopicsByType(type, params);
  },
  (type) => {return {type} }
);
