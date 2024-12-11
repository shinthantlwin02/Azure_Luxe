import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Paths from './routes/Paths';
import Footer from './components/Footer';

const Layout = () => {
  const location = useLocation();
  const excludePaths = ['/login', '/signup'];

  const hideNavAndFooter = excludePaths.includes(location.pathname);

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}
      <Paths />
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
