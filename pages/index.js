import UAuth from '@uauth/js';

const uauth = new UAuth({
  clientID: '96266865-fb4c-4797-8d5c-becc9e94ec3f',
  redirectUri: 'http://localhost:3000',
  scope:
    'openid wallet email email:optional humanity_check humanity_check:optional profile profile:optional social social:optional social:twitter social:reddit social:youtube social:discord social:telegram social:instagram social:github offline_access offline',
});

export default function Home() {
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();

      console.log(authorization);
    } catch (error) {
      console.error(error);
    }
  };
  const logout = async () => {
    await uauth.logout();
    console.log('Logged out with Unstoppable');
  };
  return (
    <>
      <button onClick={login}>Login with Unstoppable</button>
      <button onclick={logout}>Logout</button>
    </>
  );
}
