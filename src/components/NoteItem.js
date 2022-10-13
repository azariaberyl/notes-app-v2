import React from 'react';
import {Link} from 'react-router-dom';

const NoteItem = ({title, createdAt, body, id}) => {
  const showFormattedDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('id-ID', options);
  };
  return (
    <article className="note-item">
      <h3 className="note-item__title"><Link to={`notes/${id}`}> {title}</Link></h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
};

export default NoteItem;