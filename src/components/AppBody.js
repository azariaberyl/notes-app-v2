import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage.js';
import ArchivesPage from '../pages/ArchivesPage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import PropTypes from 'prop-types';

const AppBody = ({token}) => {
  if (token === '') {
    return (
      <main>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/archives' element={<ArchivesPage />} />
        <Route path='/notes/new' element={<AddPage />} />
        <Route path='/notes/:id' element={<DetailPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};


AppBody.propTypes = {
  token: PropTypes.string.isRequired,
};

export default AppBody;
