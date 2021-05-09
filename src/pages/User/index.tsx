import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from 'src/services/api';
import { Container, Perfil, PerfilDetail, List, Buttons } from './styles';
import { FiStar, FiBox, FiList } from 'react-icons/fi';
import Button from 'src/components/Button';
import Respositories from '../Repositories';
import Starreds from '../Starreds';
import {handleFormatDate} from 'src/Tools/tools.date';

interface IParams {
  userLoginName : string;
}

interface IUser {
  avatar_url : string;
  created_at: string;
  followers: number;
  following: number;
  id: number;
  html_url: string;
  login: string;
  name: string;
  public_repos: number;
}

const User: React.FC = () => {
  const {userLoginName} = useParams<IParams>();
  const [userData, setUserData] = useState<IUser>();
  const [repositories, setRepositories] = useState(false);
  const [starred, setStarred] = useState(false);



  useEffect(() => {
      getUser(userLoginName).then( res => {
          setUserData(res.data);
      });
  }, [userLoginName]);

  return (
    <>
    <Container>
      <Perfil>
        <img
            src={userData?.avatar_url}
            alt=""
        />
        <span>{userData?.name}</span>
      </Perfil>
      <PerfilDetail>
        <div>
          <span>Pagina: <a href={userData?.html_url}>{userData?.html_url}</a></span>
          <span>Criado em: {userData && handleFormatDate(userData.created_at)}</span>
          <span>
              <FiBox/>Repositories: {userData?.public_repos}
          </span>
          <span>
              <FiStar/>Followers: {userData?.followers}
          </span>
          <span>
              <FiStar/>Following: {userData?.following}
          </span>
        </div>
      </PerfilDetail>
    </Container>
      <Buttons>
          <Button style={{height:'60px'}} onClick={ ()=> setRepositories(!repositories)}><FiBox/>Repositories</Button>
          <Button style={{height:'60px'}} onClick={ ()=> {setStarred(!starred)}}><FiList/>Starred</Button>
      </Buttons>
      <List>
          {userData && repositories && <Respositories userLoginName={userData.login}/> }
          {userData && starred && <Starreds userLoginName={userData.login}/> }
      </List>
    </>
)
}

export default User;
