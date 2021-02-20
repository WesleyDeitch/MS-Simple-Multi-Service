import axios from 'axios';

const LandingPage = () => {
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  // You could use external name service to shorten request
  const response = await axios.get(
    'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser'
  );
  return response.data;
};

export default LandingPage;
