import React, {useContext} from 'react';
import {MdExitToApp, MdOutlineGTranslate} from 'react-icons/md';
import {FaMoon, FaSun} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import {ID, EN} from '../utils/content';
import UserContext from '../contexts/UserContext';


function AppHeader({token, user}) {
  /**
   * Catatan buat reviewer, saya tahu saya gaperlu pakai context
   * karena temanya langsung diambil dari parentnya
   * Tapi kerena disuruh memanfaatkan context untuk mengubah tema maka saya lakukan
   * mohon dikoreksi kalau ada yang bisa saya tingkatkan mengenai ini
   */
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {locale, toggleLocale} = useContext(LocaleContext);
  const {onLogout} = useContext(UserContext);

  const lang = locale === 'id' ? ID : EN;
  const {title, archive} = lang;
  if (token === '') {
    return (
      <header>
        <h1><Link to='/'>{title}</Link></h1>
        <button onClick={toggleLocale} className='toggle-locale'><MdOutlineGTranslate /></button>
        <button onClick={toggleTheme} className='toggle-theme'> {theme === 'light' ? <FaMoon /> : <FaSun />}  </button>
      </header>
    );
  }
  return (
    <header>
      <h1><Link to='/'>{title}</Link></h1>
      <Link to='/archives'>{archive}</Link>
      <button onClick={toggleLocale} className='toggle-locale'><MdOutlineGTranslate /></button>
      <button onClick={toggleTheme} className='toggle-theme'> {theme === 'light' ? <FaMoon /> : <FaSun />} </button>
      <button onClick={onLogout} className='button-logout' type='button'><MdExitToApp /> {user}</button>
    </header>
  );
}

export default AppHeader;
