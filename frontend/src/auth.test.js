import { clearAuth, getStoredAuth, setAuth } from './auth';

describe('auth helpers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('stores and reads auth data from localStorage', () => {
    const user = { username: 'Alice', email: 'alice@example.com' };

    setAuth('demo-token', user);

    expect(getStoredAuth()).toEqual({ token: 'demo-token', user });
  });

  test('clears auth data from localStorage', () => {
    setAuth('demo-token', { username: 'Alice' });

    clearAuth();

    expect(getStoredAuth()).toEqual({ token: null, user: null });
  });
});
