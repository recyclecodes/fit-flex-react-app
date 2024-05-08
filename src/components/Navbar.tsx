import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DumbbellIcon } from './ui/icons';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarOpacity = scrollY > 20 ? 'bg-opacity-80' : 'bg-opacity-100';

  return (
    <>
      <header
        className={`bg-gray-900 lg:px-36 px-4 py-3 flex items-center justify-between text-white fixed top-0 w-full z-50 ${navbarOpacity}`}
      >
        <Link to={'/'}>
          <div className="flex items-center gap-2">
            <DumbbellIcon className="h-6 w-6" />
            <span className="text-lg font-bold ">Fit Flex</span>
          </div>
        </Link>
        <nav className="flex items-center justify-center gap-5">
          <Link to={'/'}>
            <span className="text-lg font-semibold cursor-pointer hover:text-gray-300">
              Home
            </span>
          </Link>
          <Link to={'/exercises'}>
            <span className="text-lg font-semibold cursor-pointer hover:text-gray-300">
              Exercises
            </span>
          </Link>
        </nav>
      </header>
    <Outlet/>
    </>
  );
};

export default Navbar;
