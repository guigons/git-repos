import { Reducer } from 'redux';
import { LanguagesState, LanguagesTypes } from './types';

const INITIAL_STATE: LanguagesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<LanguagesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LanguagesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LanguagesTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case LanguagesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true,
      };
    default:
      return state;
  }
};

export default reducer;
