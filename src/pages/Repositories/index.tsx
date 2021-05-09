import React, {useState, useEffect} from 'react'
import { getUserRepos } from 'src/services/api';
import { Container, ItemList } from './styles';
import {handleFormatDate} from 'src/Tools/tools.date';
import ReactLoading from 'react-loading';

interface IRepositorieProps {
  userLoginName : string;
}

interface IRepositorie {
  name: string;
  description: string;
  updated_at: string;
  language: string;
  git_url: string;
}

const Repositories: React.FC<IRepositorieProps> = ({ children, userLoginName, ...rest }) => {

  const [repositorieData, setRepositorieData] = useState<IRepositorie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserRepos(userLoginName).then( res => {
        setRepositorieData(res.data);
        setLoading(false);
    });
}, [userLoginName]);


  return (
  <>
    {!loading && repositorieData.length === 0 && <label style={{margin: '16px'}}>Data is empty!</label>}
    {
      loading &&
        <div style={{display:"flex", width:'100%',justifyContent: "center"}}>
            <ReactLoading type={'bubbles'} color={'#000000'} height={'5%'} width={'5%'}/>
        </div>
    }
    <Container>
      {repositorieData && repositorieData.map(item => { return (
        <ItemList key={item.name}>
          <label>Name:
              <span>{item.name}</span>
          </label>
          <label>Description:
              <span>{item.description}</span>
          </label>
          <label>Language:
            <span>{item.language}</span>
            <label>updated_at:
              <span>{handleFormatDate(item.updated_at)}</span>
            </label>
          </label>
          <a href={item.git_url}>{item.git_url}</a>
        </ItemList>
      )})}
    </Container>
  </>
)
}

export default Repositories;
