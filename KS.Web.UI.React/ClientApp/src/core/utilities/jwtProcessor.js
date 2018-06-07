const queryString = require('query-string');

export default function getJWT() {
  let qs = queryString.parse(window.location.search);
  if (qs.jwt) {
    sessionStorage.setItem('cibToken', qs.jwt);
  }
}