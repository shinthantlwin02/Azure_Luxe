import { useEffect, useState } from 'react';
import Paths from './routes/Paths';
import Loading from './pages/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);
  return <h1>{isLoading ? <Loading /> : <Paths />}</h1>;
};

export default App;
