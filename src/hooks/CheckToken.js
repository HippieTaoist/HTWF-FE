import jwtDecode from 'jwt-decode';

export default function CheckToken() {
  function checkJwtToken() {
    let jwtToken = window.localStorage.getItem('jwtToken');

    if (jwtToken) {
      let decodedToken = jwtDecode(jwtToken);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.getItem('jwtToken');
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  return { checkJwtToken };
}
