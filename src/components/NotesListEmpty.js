import React, {useContext} from 'react';
import LocaleContext from '../contexts/LocaleContext';
import {EN, ID} from '../utils/content';

const NotesListEmpty = () => {
  const {locale} = useContext(LocaleContext);
  const {empty} = locale === 'id' ? ID : EN;
  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{empty}</p>
    </section>
  );
};

export default NotesListEmpty;
