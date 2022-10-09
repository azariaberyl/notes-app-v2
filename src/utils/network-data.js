
async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return {error: true, data: null};
  }

  return {error: false, data: responseJson.data};
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return {error: true, data: null};
  }

  return {error: false, data: responseJson.data};
}

async function getNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return {error: true, data: null};
  }

  return {error: false, data: responseJson.data};
}

async function archiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return {error: true, data: null};
  }

  return {error: false, data: responseJson.data};
}

async function unarchiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return {error: true, data: null};
  }

  return {error: false, data: responseJson.data};
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return {error: true, data: null};
  }

  return {error: false, data: responseJson.data};
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
};