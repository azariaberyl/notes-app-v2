import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({notes}) => {
  return (
    <section className="notes-list">
      {notes.map(note => <NoteItem key={note.id} title={note.title} createdAt={note.createdAt} body={note.body} id={note.id} />)}
    </section>
  );

};

export default NotesList;