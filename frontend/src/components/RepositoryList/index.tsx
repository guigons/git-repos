import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import LeftIcon from '../../assets/images/left-arrow.png';
import RightIcon from '../../assets/images/right-arrow.png';
import Github from '../../assets/images/github.png';

import {
  Container, Header, Title, Pagination, Loading, Error, Table,
} from './styles';

const RepositoryList = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories,
  );
  const dispatch = useDispatch();

  function handlePrev() {
    const { languageName: language, page } = repositories.data;
    dispatch({ type: '@repositories/LOAD_REQUEST', payload: { language, page: page - 1 } });
  }

  function handleNext() {
    const { languageName: language, page } = repositories.data;
    dispatch({ type: '@repositories/LOAD_REQUEST', payload: { language, page: page + 1 } });
  }

  return repositories.data.languageName
    ? (
      <Container>
        <Header>
          <Title>
            <span>
              {repositories.data.languageName}
              {' '}
            </span>
            <span>
              Repositories
              {' '}
            </span>
            <span>
              (
              {repositories.data.totalCount}
              )
            </span>
          </Title>
          <Loading>
            { repositories.loading ? <span>Loading Respositories From GitHub ...</span> : null }
            { !repositories.loading && repositories.error ? (
              <Error>
                {repositories.error}
              </Error>
            ) : null }
          </Loading>
          <Pagination>
            <button type="button" onClick={handlePrev} disabled={repositories.data.page === 1}>
              <img src={LeftIcon} alt="prev" />
            </button>

            <span>
              Page
              {' '}
              {repositories.data.page}
            </span>

            <button type="button" onClick={handleNext} disabled={repositories.data.page * 30 > repositories.data.totalCount}>
              <img src={RightIcon} alt="next" />
            </button>
          </Pagination>

        </Header>
        { repositories.data.items.length ? (
          <Table>
            <tr>
              <th>Name</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Open Issues</th>
              <th>Github</th>
            </tr>
            {repositories.data.items.map((repository) => (
              <tr key={repository.id}>
                <td>
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repository.name}
                  </a>
                </td>
                <td>
                  <a
                    href={`${repository.html_url}/stargazers`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repository.stargazers_count}
                  </a>
                </td>
                <td>
                  <a
                    href={`${repository.html_url}/network/members`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repository.forks}
                  </a>
                </td>
                <td>
                  <a
                    href={`${repository.html_url}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repository.open_issues}
                  </a>
                </td>
                <td>
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="github" />
                  </a>
                </td>
              </tr>
            ))}
          </Table>
        ) : null}
      </Container>
    )
    : null;
};

export default RepositoryList;
