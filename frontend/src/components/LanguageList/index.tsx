import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container, Title, List, Loading, Input,
} from './styles';
import { ApplicationState } from '../../store';

const Sidebar = () => {
  const languages = useSelector((state: ApplicationState) => state.languages);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  useEffect(() => {
    dispatch({ type: '@languages/LOAD_REQUEST' });
  }, [dispatch]);

  function loadRepositories(language: string): void {
    dispatch({ type: '@repositories/LOAD_REQUEST', payload: { language, page: 1 } });
  }

  return (
    <Container>
      <Title>Github Languages</Title>
      { !languages.loading ? <Input onChange={(e) => { setInput(e.target.value); }} type="text" placeholder="Search" /> : null }
      { languages.loading ? (
        <Loading>
          <span>Loading Languages From GitHub ...</span>
        </Loading>
      ) : null }
      <List>
        { languages.data
          .filter((language) => input === '' || language.name.includes(input))
          .map((language) => (
            <li key={language.aliases[0]}>
              <button type="button" onClick={() => loadRepositories(language.aliases[0])}>
                {language.name}
              </button>
            </li>
          ))}
      </List>
    </Container>
  );
};

export default Sidebar;
