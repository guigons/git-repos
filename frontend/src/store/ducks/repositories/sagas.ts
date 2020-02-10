import { put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(action: AnyAction) {
  const { language, page } = action.payload;

  try {
    const response = yield api.get(`/search?language=${language}&page=${page}`);
    response.data.languageName = language;
    response.data.page = page;
    response.data.totalCount = response.data.total_count;
    yield put(loadSuccess(response.data));
  } catch (err) {
    let errResponse = err;
    if (err.toString().match(/403/)) {
      errResponse = 'Github rate limit exceeded, wait a few seconds and try again';
    }
    yield put(loadFailure(errResponse));
  }
}
