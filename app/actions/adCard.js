import {createAction} from 'redux-actions';
import * as types from '../constants/ActionTypes';
import * as adService from '../services/adService';

export const getIndexAdCards = createAction(
  types.GET_INDEX_AD_CARDS,
  () => adService.getIndexAdCards(),
);

