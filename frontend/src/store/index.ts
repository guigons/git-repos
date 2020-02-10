import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { LanguagesState } from './ducks/languages/types';

import rootReducer from './ducks/rootReducers';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState,
  languages: LanguagesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
