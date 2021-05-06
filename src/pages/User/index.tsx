import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from 'src/service/api';
import { Container, Perfil, PerfilDetail } from './styles';
import { format } from "date-fns";
import { FiStar, FiBox } from 'react-icons/fi';

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

  const handleFormatDate = (pDate : string) =>{
    const date = new Date(pDate);
    return format(date, "dd/MM/yyyy H:mm");
  }

  useEffect(() => {
      getUser(userLoginName).then( res => {
        setUserData(res.data);
    });
  }, [userLoginName]);

  useEffect(() => {
      console.log(userData);
  }, [userData]);

  return (
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
          <span><a href={userData?.html_url}>Pagina: {userData?.html_url}</a></span>
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
  )
}

export default User;
