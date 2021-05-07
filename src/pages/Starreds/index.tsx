import React, {useState, useEffect} from 'react'
import { getUserStarred } from 'src/service/api';
import { Container, ItemList } from './styles';
import ReactLoading from 'react-loading';

interface IStarredProps {
  userLoginName : string;
}

interface IStarred {
  name: string;
  description: string;
  owner: {
    avatar_url: string;
  }
}

const Starreds: React.FC<IStarredProps> = ({ children, userLoginName, ...rest }) => {

  const [starredData, setStarredData] = useState<IStarred[]>([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    getUserStarred(userLoginName).then( res => {
        setStarredData(res.data);
        setLoading(false);
    });
}, [userLoginName]);


  return (
    <>
      {loading && <div style={{display:"flex", width:'100%',justifyContent: "center"}}><ReactLoading type={'bubbles'} color={'#000000'} height={'5%'} width={'5%'}/></div> }
      <Container>
        {starredData && starredData.map(item => { return (
          <ItemList key={item.name}>
            <img
                src={item.owner.avatar_url}
                alt=""
            />
            <div>
              <span>{item.name}</span>
              <span>{item.description}</span>
            </div>
          </ItemList>
        )})}
      </Container>
    </>
  )
}

export default Starreds;
