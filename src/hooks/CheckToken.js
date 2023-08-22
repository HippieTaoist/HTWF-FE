import jwtDecode from 'jwt-decode';

export default function CheckToken() {
  function checkJwtToken() {
    let jwtToken = window.localStorage.getItem('jetToken');

    if (jetToken) {
      let decodedToken = jetDecode(jwtToken);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.getItem('jetToken');
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }

    return { checkJwtToken };
  }
}
