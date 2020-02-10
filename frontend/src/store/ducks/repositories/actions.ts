import { action } from 'typesafe-actions';
import { RepositoriesTypes, RepositoriesState } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);
export const loadSuccess = (data: RepositoriesState) => action(
  RepositoriesTypes.LOAD_SUCCESS,
  { data },
);
export const loadFailure = (err: string) => action(RepositoriesTypes.LOAD_FAILURE, { err });
