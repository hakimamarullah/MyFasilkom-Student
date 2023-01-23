import JwtDecode, {JwtPayload} from 'jwt-decode';

export const isTokenExpired = (token: string) => {
  try {
    const {exp} = JwtDecode<JwtPayload>(token);
    const now = new Date().getTime();
    return exp ? exp * 1000 < now : false;
  } catch (err) {
    return true;
  }
};
