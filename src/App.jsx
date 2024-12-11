import { useEffect, useState } from 'react';
import Loading from './pages/Loading';
import Layout from './Layout';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);
  return <h1>{isLoading ? <Loading /> : <Layout />}</h1>;
};

export default App;
