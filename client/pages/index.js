import axios from 'axios';

const LandingPage = () => {
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // We are on the server!
    // request should be made to http://ingress-nginx.ingress-nginx
    const { data } = await axios.get(
      'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev',
        },
      }
    );
    return data;
  } else {
    // We are on the browser
    // requests should be made to base ''
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
  return response.data;
};

export default LandingPage;
