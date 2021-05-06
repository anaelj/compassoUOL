import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './main';
import { getUsersPartial, getUserRepos } from './service/api';
import Input from './components/Input/index';
import Button from './components/Button';
import { Container, Lista } from './main';
import logoImg from './assets/logotipo-do-github.svg';
import { FiStar, FiBox } from 'react-icons/fi';


interface IUser {
  id: number
  login: string
  avatar_url: string;
  followersCount?: number;
  repositoriesCount?: number;
  repos_url: string;
  followers_url: string;
}

const App: React.FC = () => {

  const [dataApiGitHub, setDataApiGitHub] = useState<IUser[]>([]);
  const [textoPesquisa , setTextoPesquisa] = useState('anael');
//  const [loading, setLoading] = useState(false);

  const getUsers = () => {
//    setLoading(true);
    getUsersPartial(textoPesquisa).then( res =>
      {
        setDataApiGitHub(res.data.items);
      } );
  }

  useEffect(() => {
//    console.log(dataApiGitHub);
      const arrayTeste : Array<IUser> = [];
      dataApiGitHub.map(item => { return (
          getUserRepos(item.login)
            .then( res => {
                return ({...item, repositoriesCount : res.data.length})
            })
             //arrayTeste.push({...item, repositoriesCount : res.data.length});
          //})
     )
  }, [dataApiGitHub])});

  return (
   <>
   <Container>
    <img src={logoImg} alt="GitHub" style={{margin:10}} />
   </Container>
    <Container>
        <Input
          name="pesquisa"
          type="text"
          value={textoPesquisa}
          onChange={(e) => setTextoPesquisa(e.target.value) }
        />

        <Button onClick={getUsers}>Pesquisar</Button>
    </Container>
    <Lista>
                <ul className="items-grid">
                  { dataApiGitHub?.map( item => { return (
                    <li
                        key={item.id}
                        onClick={() => {}}
                     >
                      <img
                        src={item?.avatar_url}
                        alt=""
                      />
                      <div>
                        <span> {item.login} </span>
                        <div className="grid-flex">
                          <span> <FiStar/>Followers: {item.followersCount} </span>
                          <span> <FiBox/>Repositories: {item.repositoriesCount} </span>
                        </div>
                      </div>
                    </li>
                  )})}
                </ul>
    </Lista>



   </>
  );
}

export default App;
