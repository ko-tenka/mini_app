import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        {/* Здесь будут рендериться дочерние маршруты */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
