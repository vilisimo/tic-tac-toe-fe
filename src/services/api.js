const handleError = response => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}

export const requests = {
  get: (url) => {
    const config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    return fetch(url, config)
      .then(handleError)
      .then(response => response.json())
      .catch((error) => console.error(`GET on ${url} failed, error:\n`, error));
  },

  post: (url, body) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    return fetch(url, config)
      .then(handleError)
      .then(response => response.json())
      .catch(error => console.error(`POST on ${url} failed, error:\n`, error));
  },
}

export const Game = {
  findOne: id => requests.get(`/games/${id}`),
  newGame: () => requests.post(`/games/`).then((body) => body.id),
}
