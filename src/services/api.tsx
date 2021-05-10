import axios from 'axios';
//  }
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
       Accept: 'application/json',
  }
});

 export async function getUsersPartial(pUsername : String)  {

  return await api.get('/search/users',
    {
        params: {
          // eslint-disable-next-line prefer-template
          q: pUsername + 'in:user',
          per_page: 18,
          sort: 'followers',
        }
    }
    );
}

  export async function getUser(pUsername: String) {
    return await api.get(`/users/${pUsername}`,{
      params: {
     }
  });
  };

export async function getUserRepos(pUsername : String) {
  return await api({
      url: `/users/${pUsername}/repos`,
      method: 'get',
    });
};

export async function getUserFollowers(pUsername : String) {
    return await api({
      url: `/users/${pUsername}/followers`,
      method: 'get',
    });
};

export async function getUserStarred(pUsername: String) {
    return await api({
      url: `/users/${pUsername}/starred`,
      method: 'get',
    });
};

export async function getAuth(pAuthCode: String) {

  return await axios.create({
    baseURL: 'http://localhost:3001',
  })
  .get('/my-oauth'+ pAuthCode).then( res => {
    return res.data;
  })
  // .catch((error)=> {

  //   console.log(error)})


};



export default api;
