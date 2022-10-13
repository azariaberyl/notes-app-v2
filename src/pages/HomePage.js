import React, {useContext, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Button from '../components/Button';
import NotesList from '../components/NotesList';
import NotesListEmpty from '../components/NotesListEmpty';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import {EN, ID} from '../utils/content';
import {getActiveNotes, getUserLogged} from '../utils/network-data';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {locale} = useContext(LocaleContext);
  const [searchValue, setSearchValue] = useState('');
  const [notes, setNotes] = useState([]);
  const [loadingBool, setLoading] = useState(true);
  const {homepage, search, loading} = locale === 'id' ? ID : EN;
  const [user, setUser] = useState();

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    async function fetchActiveNotes() {
      const fetchUser = await getUserLogged();
      const resNotes = await getActiveNotes();
      if (resNotes.error === true) {
        return;
      }
      setUser(fetchUser.data.name);
      setNotes(resNotes.data);
      setLoading(false);
    }
    setSearchValue(searchParams.get('keyword') || '');
    fetchActiveNotes();
  }, []);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    setSearchParams({keyword: e.target.value});
  };

  if (loadingBool) {
    return (
      < section className='homepage' >
        <h2>{homepage}</h2>
        <SearchBar value={searchValue} onSearchChange={onSearchChange} search={search} />
        <p>{loading}</p>
      </section >
    );
  }

  return (
    < section className='homepage' >
      <h2>{homepage}</h2>
      <SearchBar value={searchValue} onSearchChange={onSearchChange} search={search} />
      {notes.length === 0 ? <NotesListEmpty /> : <NotesList notes={filteredNotes} />}
      <div className='homepage__action'>
        <Button type='add' />
      </div>
    </section >
  );
};

export default HomePage;