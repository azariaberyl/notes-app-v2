import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '../contexts/ThemeContext';
import {LocaleProvider} from '../contexts/LocaleContext';
import AppBody from './AppBody';
import AppHeader from './AppHeader';
import {getAccessToken, getUserLogged, login, putAccessToken, register} from '../utils/network-data';
import {useNavigate} from 'react-router-dom';
import {UserProvider} from '../contexts/UserContext';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');
  const [accessToken, setAccessToken] = useState(getAccessToken() || '');
  const [user, setUser] = useState();

  useEffect(() => {
    async function checkUser() {
      if (accessToken == '') return;
      const getUser = await getUserLogged();
      if (getUser.error === true) {
        onLogout();
        return;
      }
      setUser(getUser.data.name || '');
    }
    checkUser();
  }, [accessToken]);

  const onLogin = async (email, password) => {
    const user = await login({email, password});
    if (!user.error) {
      putAccessToken(user.data.accessToken);
      setAccessToken(getAccessToken());
    }
  };

  const onRegister = async (name, email, password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      alert('Pasword tidak cocok');
      return;
    }
    const error = await register({name, email, password});
    if (!error.error) {
      navigate('/');
    }
  };

  const onLogout = () => {
    setAccessToken('');
    putAccessToken('');
    setUser('');
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevState) => {
      const newLocale = prevState === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const themeValue = React.useMemo(() => {
    return {
      theme, toggleTheme,
    };
  }, [theme]);

  const localeValue = React.useMemo(() => {
    return {
      locale, toggleLocale,
    };
  }, [locale]);

  const userValue = React.useMemo(() => {
    return {
      onLogin, onLogout, onRegister,
    };
  });

  return (
    <div className="app-container" data-theme={theme} >
      <ThemeProvider value={themeValue}>
        <LocaleProvider value={localeValue}>
          <UserProvider value={userValue}>
            <AppHeader user={user} token={accessToken} />
            <AppBody token={accessToken} />
          </UserProvider>
        </LocaleProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;
