import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: {
    languageName: '',
    totalCount: 0,
    page: 1,
    items: [],
  },
  error: '',
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        data: { ...state.data, languageName: action.payload.language },
      };
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: '', data: action.payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: action.payload.err.toString(),
      };
    default:
      return state;
  }
};

export default reducer;
