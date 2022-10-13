import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../components/Button';
import {archiveNote, deleteNote, getNote, showFormattedDate, unarchiveNote} from '../utils/network-data';
import NotFoundPage from './NotFoundPage';

const DetailPage = () => {
  const {id} = useParams();
  const [note, setNote] = useState({loading: true});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNote() {
      setNote((await getNote(id)).data);
      if (!note) {
        return <NotFoundPage />;
      }
    }
    fetchNote();
  }, []);

  const onDeleteHandler = async () => {
    await deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = async () => {
    !note.archived ? await archiveNote(id) : await unarchiveNote(id);
    navigate('/');
  };

  if (note.loading) return;

  return (
    <section className='detail-page'>
      <h3 className='detail-page__title'>{note.title}</h3>
      <p className='detail-page__createdAt'>{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>
      <div className='detail-page__action'>
        {!note.archived ? <Button type='archive' onArchive={onArchiveHandler} /> : <Button type='unarchive' onArchive={onArchiveHandler} />}
        <Button type='delete' onDelete={onDeleteHandler} />
      </div>
    </section>
  );
};

export default DetailPage;
