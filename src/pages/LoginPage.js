import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import LocaleContext from '../contexts/LocaleContext';
import {EN, ID} from '../utils/content';

const LoginPage = () => {
  const {locale} = useContext(LocaleContext);

  const lang = locale === 'id' ? ID : EN;
  const {loginDesc, loginNoAccount, loginCreateAccount} = lang;

  return (
    <section className='login-page'>
      <h2>{loginDesc}</h2>
      <InputLogin />
      <p>{loginNoAccount}<Link to='/register'>{loginCreateAccount}</Link> </p>
    </section>
  );
};

export default LoginPage;