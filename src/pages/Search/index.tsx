import React, { useState, useEffect } from 'react';
import  { getUsersPartial, getUser } from '../../services/api';
import Input from '../../components/Input/index';
import Button from '../../components/Button';
import { Container, Lista, ContainerLogin } from './styles';
import logoImg from '../../assets/logotipo-do-github.svg';
import { FiStar, FiBox } from 'react-icons/fi';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
import {signIn} from '../../Tools/auth';


interface ISearchProps {
  code : string;
}

interface ITotals {
  id: number;
  followersCount?: number;
  repositoriesCount?: number;
}

interface IUser {
  id: number
  login: string
  avatar_url: string;
  repos_url: string;
  followers_url: string;
}

const SearchUser: React.FC<ISearchProps> = ({ children, code, ...rest }) => {

  const [dataApiGitHub, setDataApiGitHub] = useState<IUser[]>([]);
  const [dataTotals, setDataTotals] = useState<ITotals[]>([]);
  const [textSearch , setTextSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (code !== '') {
    signIn(code).then(res =>
        {
          setLogado(true)
        }).catch((error)=> {
          console.log(error)
        });
    }
  }, [code])

  const handleFindUsers = () => {
      setLoading(true);
      getUsersPartial(textSearch).then( res => {
          setDataApiGitHub(res.data.items);
          setLoading(false);
      }
      ).catch((error)=> {
        setLoading(false);
        console.log(error)
      });
  }

  useEffect(() => {
    dataApiGitHub.map(item => { return (
        getUser(item.login)
            .then( res => {
              const newTotal = {id: item.id, followersCount: res.data.followers , repositoriesCount: res.data.public_repos};
              dataTotals.push(newTotal);
              setDataTotals([...dataTotals])
            })

    )})


  }, [dataApiGitHub]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
   <>
      <ContainerLogin style={{marginTop: '16px'}}>
        <a href="https://github.com/login/oauth/authorize?client_id=a785333efeff6818cd65">{logado ? 'Logged' : 'Login' }</a>
      </ContainerLogin>
      <Container >
        <img src={logoImg} alt="GitHub" style={{margin:10}}  />
      </Container>
        <Container>
            <Input
              name="search"
              type="text"
              value={textSearch}
              onKeyUp={(e)=> {e.keyCode === 13 && handleFindUsers() }}
              onChange={(e) => setTextSearch(e.target.value) }
            />
            <Button onClick={handleFindUsers} loading={loading}>Search</Button>
        </Container>


       { loading && <div style={{display:"flex", width:'100%',justifyContent: "center"}}><ReactLoading type={'bubbles'} color={'#000000'} height={'5%'} width={'5%'}/></div> }

        <Lista>
              <ul className="items-grid">
                { dataApiGitHub?.map( item => { return (
                    <li
                      key={item.id}
                      onClick={() => {history.push(`/${item.login}`)}}
                    >
                    <img
                      src={item?.avatar_url}
                      alt=""
                    />
                    <div>
                      <span> {item.login} </span>
                      <div className="grid-flex">
                        <span>
                        <FiStar/>Followers: {dataTotals.find(find => find.id === item.id )?.followersCount}
                        </span>
                      </div>
                      <div className="grid-flex">
                        <span>
                          <FiBox/>Repositories: {dataTotals.find(find => find.id === item.id )?.repositoriesCount}
                        </span>
                      </div>
                    </div>
                  </li>
                )})}
              </ul>
        </Lista>
   </>
  );
}

export default SearchUser;
