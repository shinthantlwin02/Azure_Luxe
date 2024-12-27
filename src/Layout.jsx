import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Paths from './routes/Paths';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Layout = () => {
  const location = useLocation();
  const excludePaths = ['/login', '/signup', '/dashboard', '/notFound'];

  const hideNavAndFooter = excludePaths.some((path) =>
    location.pathname.startsWith(path)
  );
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}
      <div className={`${isDashboard ? 'flex' : 'block'}`}>
        {isDashboard && <Sidebar />}
        <div className={`${isDashboard ? 'grow' : ''}`}>
          <Paths />
        </div>
      </div>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
