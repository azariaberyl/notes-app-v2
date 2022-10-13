import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';


const Button = ({type, onDelete, onArchive, onSave}) => {
  const navigate = useNavigate();
  if (type === 'delete') {
    return (
      <button onClick={onDelete} className='action' type='button' title='Hapus'>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z'></path>
        </svg>
      </button>
    );
  } else if (type === 'archive') {
    return (
      <button onClick={onArchive} className='action' type='button' title='Arsipkan'>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z'></path>
        </svg>
      </button>
    );
  } else if (type === 'unarchive') {
    return (
      <button onClick={onArchive} className='action' type='button' title='Aktifkan'>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z'></path>
        </svg>
      </button>
    );
  } else if (type === 'add') {
    function onAddHandler() {
      navigate('/notes/new');
    }
    return (
      <button onClick={onAddHandler} className='action' type='button' title='Tambah'>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
        </svg>
      </button>
    );
  } else if (type === 'save') {
    return (
      <button onClick={onSave} className="action" type="button" title="Simpan">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
        </svg>
      </button>
    );
  } else {
    console.warn('Button type not found');
  }
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onAdd: PropTypes.func,
  onSave: PropTypes.func,
};

export default Button;
