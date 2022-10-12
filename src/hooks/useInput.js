import {useState} from 'react';

function useInput(defaultValue = '') {
  const [input, setInput] = useState(defaultValue);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onInputChange];
};

export default useInput;