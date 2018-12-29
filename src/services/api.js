const handleError = (response) => {
  if (response.ok) {
    return response;
  }
  throw Error(`${response.statusText}. Status code: ${response.status}`);
};

export const requests = {
  get: async (url) => {
    const config = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    return fetch(url, config)
      .then(handleError)
      .then(response => response.json());
  },

  post: async (url, body) => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    return fetch(url, config)
      .then(handleError)
      .then(response => response.text())
      .then(text => text ? JSON.parse(text) : {});
  },
};

export const Game = {
  findOne: id => requests.get(`/games/${id}`),
  newGame: () => requests.post('/games/').then(body => body.id),
  makeMove: (id, move) => requests.post(`/games/${id}/moves`, move),
};
