import React, {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import useInput from '../hooks/useInput';

const InputLogin = () => {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const {onLogin} = useContext(UserContext);

  return (
    <div className='input-login'>
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' value={email} onChange={onEmailChange} />
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' value={password} onChange={onPasswordChange} />
      <button onClick={() => onLogin(email, password)} type='button'>Login</button>
    </div>
  );
};

export default InputLogin;
