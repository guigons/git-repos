import { put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield api.get('languages');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure(err));
  }
}
