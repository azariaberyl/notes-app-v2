import React, {useContext, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import NotesList from '../components/NotesList';
import NotesListEmpty from '../components/NotesListEmpty';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocaleContext';
import {EN, ID} from '../utils/content';
import {getArchivedNotes} from '../utils/network-data';

const ArchivesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {locale} = useContext(LocaleContext);
  const [searchValue, setSearchValue] = useState('');
  const [notes, setNotes] = useState([]);
  const [loadingBool, setLoading] = useState(true);
  const {archiveDesc, search, loading} = locale === 'id' ? ID : EN;

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    async function fetchNotes() {
      const resNotes = await getArchivedNotes();
      if (resNotes.error === true) {
        return;
      }
      setNotes(resNotes.data);
      setLoading(false);
    }
    setSearchValue(searchParams.get('keyword') || '');
    fetchNotes();
  }, []);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    setSearchParams({keyword: e.target.value});
  };

  if (loadingBool) {
    return (
      < section className='archives-page' >
        <h2>{archiveDesc}</h2>
        <SearchBar value={searchValue} onSearchChange={onSearchChange} search={search} />
        <p>{loading}</p>
      </section >
    );
  }

  return (
    < section className='archives-page' >
      <h2>{archiveDesc}</h2>
      <SearchBar value={searchValue} onSearchChange={onSearchChange} search={search} />
      {notes.length === 0 ? <NotesListEmpty /> : <NotesList notes={filteredNotes} />}
    </section >
  );
};

export default ArchivesPage;
