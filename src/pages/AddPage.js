import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AddPageInput from '../components/AddPageInput';
import Button from '../components/Button';
import useInput from '../hooks/useInput';
import {addNote} from '../utils/network-data';

const AddPage = () => {
  const navigate = useNavigate();
  const [title, onTitleChange] = useInput('');
  const [body, setBody] = useState('');

  const onInputBody = (e) => setBody(e.target.textContent);
  const onSave = async () => {
    const add = await addNote({title, body});
    if (add.error === true) {
      alert('Maaf terjadi error');
      return;
    };
    navigate('/');
  };
  return (
    <section className='add-new-page'>
      <AddPageInput title={title} onInputBody={onInputBody} onTitleChange={onTitleChange} />
      <div className='add-new-page__action'>
        <Button onSave={onSave} type='save' />
      </div>
    </section>
  );
};

export default AddPage;
