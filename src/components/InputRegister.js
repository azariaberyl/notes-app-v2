import React, {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import useInput from '../hooks/useInput';

const InputRegister = () => {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [name, onNameChange] = useInput();
  const [passwordConfirm, onPasswordConfirmChange] = useInput();

  const {onRegister} = useContext(UserContext);

  return (
    <div className='input-login'>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' value={name} onChange={onNameChange} />
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' value={email} onChange={onEmailChange} />
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' value={password} onChange={onPasswordChange} />
      <label htmlFor='confirm'>Confirm Password</label>
      <input id='confirm' type='password' value={passwordConfirm} onChange={onPasswordConfirmChange} />
      <button onClick={() => onRegister(name, email, password, passwordConfirm)} type='button'>Register</button>
    </div>
  );
};

export default InputRegister;