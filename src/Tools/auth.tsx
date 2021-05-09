import api ,{getAuth} from '../services/api';

const signIn = async (pCode: string) => {
  const codeStorage = localStorage.getItem('@appCompasso:code');
  localStorage.setItem('@appCompasso:logged', 'não');

  if (codeStorage !== pCode) {

    getAuth( pCode ).then( res => {

      const {token} = res;

      localStorage.setItem('@appCompasso:token', token);
      localStorage.setItem('@appCompasso:code', pCode);
      localStorage.setItem('@appCompasso:logged', 'sim');

      api.defaults.headers.authorization = `Bearer ${token}`;


      return true;

    }).catch((error)=> {
      console.log('Servidor de autendicação não iniciado, execute: node src/services/auth.js');
      return false;
    });
  }


};


export { signIn };
