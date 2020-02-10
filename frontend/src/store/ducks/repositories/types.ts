export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  PREV_PAGE = '@repositories/PREV_PAGE',
  NEXT_PAGE = '@repositories/NEXT_PAGE',
}

export interface Repository {
  id: number
  name: string
  html_url: string,
  stargazers_count: number,
  forks: number,
  open_issues: number
}

export interface RepositoriesState {
  readonly data: {
    languageName: string,
    totalCount: number,
    page: number,
    items: Repository[]
  },
  readonly loading: boolean,
  readonly error: string
}
