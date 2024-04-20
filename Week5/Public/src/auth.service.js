const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:3000/api/auth
//const USER_API = `${BASE_API_URL}/user`; // http://localhost:3000/api/user

//const register = (formData) => _post(`${AUTH_API}/register`, formData);

const login = (formData) => _post(`${AUTH_API}/login`, formData);
//`${AUTH_API}/login`
const logout = () => {
  clearStorage('isAuth');
  clearStorage('access_token');
  clearStorage('refresh_token');
};
// module.exports = login;
// module.exports = logout;