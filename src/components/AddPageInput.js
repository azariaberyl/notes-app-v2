import React, {useState} from 'react';
import useInput from '../hooks/useInput';

const AddPageInput = ({title, onTitleChange, onInputBody}) => {
  return (
    <div className='add-new-page__input'>
      <input onChange={onTitleChange} className="add-new-page__input__title" placeholder="Catatan rahasia" value={title}></input>
      <div onInput={onInputBody} className="add-new-page__input__body" contentEditable="true" data-placeholder='Sebenarnya saya adalah ....'></div>
    </div>
  );
};

export default AddPageInput;
