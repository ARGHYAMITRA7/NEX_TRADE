const AUTH_TOKEN_KEY = 'token';
const AUTH_USER_KEY = 'user';
const AUTH_COOKIE_NAME = 'nextrade_auth';
const AUTH_CHANGE_EVENT = 'auth:changed';

const emitAuthChange = () => {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
};

const readCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const writeCookie = (value) => {
  document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(value)}; path=/; max-age=86400`;
};

const clearCookie = () => {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`;
};

export const getStoredAuth = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const rawUser = localStorage.getItem(AUTH_USER_KEY);

  if (token && rawUser) {
    return { token, user: JSON.parse(rawUser) };
  }

  const cookieValue = readCookie(AUTH_COOKIE_NAME);
  if (!cookieValue) {
    return { token: null, user: null };
  }

  try {
    const parsed = JSON.parse(cookieValue);
    return { token: parsed.token || null, user: parsed.user || null };
  } catch (error) {
    return { token: null, user: null };
  }
};

export const setAuth = (token, user) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  writeCookie(JSON.stringify({ token, user }));
  emitAuthChange();
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  clearCookie();
  emitAuthChange();
};

export const isAuthenticated = () => Boolean(getStoredAuth().token);
export const AUTH_CHANGE_EVENT_NAME = AUTH_CHANGE_EVENT;
