import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
//    Authorization: `Basic ${process.env.TOKEN}`,
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
});


 export async function getUsersPartial(username : String)  {
    return await api.get('/search/users',
    {
        params: {
          // eslint-disable-next-line prefer-template
          q: username + 'in:user',
          per_page: 10,
          sort: 'followers',
        }
    }
    );
}

  export function getUser(username: String) {
    return api({
      url: `/users/${username}`,
      method: 'get',
    });
  };

export async function getUserRepos(username : String) {
    return await api({
      url: `/users/${username}/repos`,
      method: 'get',
    });
};

export function getUserStarred(username: String) {
    return api({
      url: `/users/${username}/starred`,
      method: 'get',
    });
};
