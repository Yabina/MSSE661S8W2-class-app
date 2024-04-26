const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:3000/api/auth
const USER_API = `${BASE_API_URL}/user`; // http://localhost:3000/api/user

const register = (formData) => _post(`http://localhost:3000/api/auth/register`, formData);

const login = (formData) => _post(`http://localhost:3000/api/auth/login`, formData);

const logout = () => {
  clearStorage('isAuth');
  clearStorage('access_token');
  clearStorage('refresh_token');
};