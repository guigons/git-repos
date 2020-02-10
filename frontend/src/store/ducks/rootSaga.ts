import { all, takeLatest } from 'redux-saga/effects';
import { RepositoriesTypes } from './repositories/types';
import { load as loadRepositories } from './repositories/sagas';
import { LanguagesTypes } from './languages/types';
import { load as loadLanguages } from './languages/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
    takeLatest(LanguagesTypes.LOAD_REQUEST, loadLanguages),
  ]);
}
