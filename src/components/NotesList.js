import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NotesList = ({notes}) => {
  return (
    <section className="notes-list">
      {notes.map((note) => <NoteItem key={note.id} title={note.title} createdAt={note.createdAt} body={note.body} id={note.id} />)}
    </section>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NotesList;
