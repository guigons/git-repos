export enum LanguagesTypes {
  LOAD_REQUEST = '@languages/LOAD_REQUEST',
  LOAD_SUCCESS = '@languages/LOAD_SUCCESS',
  LOAD_FAILURE = '@languages/LOAD_FAILURE',
}

export interface Language {
  name: string
  aliases: string[]
}

export interface LanguagesState {
  readonly data: Language[],
  readonly loading: boolean,
  readonly error: boolean,
}
