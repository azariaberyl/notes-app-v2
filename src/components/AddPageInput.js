import React from 'react';
import PropTypes from 'prop-types';

const AddPageInput = ({title, onTitleChange, onInputBody}) => {
  return (
    <div className='add-new-page__input'>
      <input onChange={onTitleChange} className="add-new-page__input__title" placeholder="Catatan rahasia" value={title}></input>
      <div onInput={onInputBody} className="add-new-page__input__body" contentEditable="true" data-placeholder='Sebenarnya saya adalah ....'></div>
    </div>
  );
};

AddPageInput.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onInputBody: PropTypes.func.isRequired,
};

export default AddPageInput;
