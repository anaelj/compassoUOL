import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from 'src/service/api';
import { Container, Perfil, PerfilDetail, List } from './styles';
import { format } from "date-fns";
import { FiStar, FiBox, FiList } from 'react-icons/fi';
import Button from 'src/components/Button';

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
  // const jsonTeste = new Object({
  //           avatar_url : 'avatarurl',
  //           created_at: '2020-12-02',
  //           followers: 'number',
  //           following: 'number',
  //           id: 'number',
  //           html_url: 'string',
  //           login: 'string',
  //           name: 'string',
  //           public_repos: 'number'
  //        }) as IUser;


  const handleFormatDate = (pDate : string) =>{
    const date = new Date(pDate);
    return format(date, "dd/MM/yyyy H:mm");
  }

  useEffect(() => {
      getUser(userLoginName).then( res => {
          setUserData(res.data);
      });
//      setUserData(jsonTeste);
  }, [userLoginName]);

  useEffect(() => {
      console.log(userData);
  }, [userData]);

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
      <List>
        <div style={{display:"flex", flexDirection:"column"}}>
          <Button style={{height:'60px'}}><FiBox/>Repositories</Button>
          <div className="classRepositories">
            <span>Reposiories</span>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"column"}}>
          <Button style={{height:'60px'}}><FiList/>Starred</Button>
          <div className="classStarred">
            <span>Reposiories</span>
          </div>
        </div>
      </List>

    </>
)
}

export default User;
