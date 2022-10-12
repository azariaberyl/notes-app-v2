import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import InputRegister from '../components/InputRegister';
import LocaleContext from '../contexts/LocaleContext';
import {EN, ID} from '../utils/content';

const RegisterPage = () => {
  const {locale} = useContext(LocaleContext);

  const lang = locale === 'id' ? ID : EN;
  const {RegisterDesc, registerHaveAccount, registerLoginAccount} = lang;

  return (
    <section className='login-page'>
      <h2>{RegisterDesc}</h2>
      <InputRegister />
      <p>{registerHaveAccount}<Link to='/'>{registerLoginAccount}</Link> </p>
    </section>
  );
};

export default RegisterPage;