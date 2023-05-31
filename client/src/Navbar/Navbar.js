import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from '@material-tailwind/react';

export default function Example({ user, data }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // dữ liệu header được truyền xuống từ App.js
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {data.map((data) => {
        return (
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to={data.link} className="flex items-center">
              <i className={data.icon}></i>
              {data.tag}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );
  // Khi người dùng bấm đăng xuất sẽ xoá LocalStorage và quay lại trang login
  const logout = () => {
    localStorage.clear();
    window.location.replace('http://localhost:3000/');
  };
  // Mã giao diện
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 max-w-7xl mx-auto">
          <div className="flex items-center justify-between text-blue-900">
            <img src="/img/logo.png" className="w-10 mr-3" />
            <Link
              to="/"
              className="mr-4 cursor-pointer py-1.5 text-lg font-medium flex"
            >
              {user.name}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="pt-3 mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              color="red"
              onClick={() => logout()}
              to={'/'}
              end
            >
              <span>Đăng xuất</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
            color="red"
            onClick={() => logout()}
            to={'/'}
            end
          >
            <span>Đăng xuất</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
