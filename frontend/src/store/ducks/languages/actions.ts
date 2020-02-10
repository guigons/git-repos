import { action } from 'typesafe-actions';
import { LanguagesTypes, Language } from './types';

export const loadRequest = () => action(LanguagesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Language[]) => action(LanguagesTypes.LOAD_SUCCESS, { data });
export const loadFailure = (err: string) => action(LanguagesTypes.LOAD_FAILURE, { err });
