import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
  {
    label: <Link to={"/home"}>Home</Link>,
    key: 'home',
  },
  {
    label: 'Gallery',
    key: 'gallery',
  },
  {
    label: 'Categories',
    key: 'categories',
    children: [
      {
        type: 'group',
        label: 'Electronics',
        children: [
          {
            label: 'Computers',
            key: 'computers',
          },
          {
            label: 'Phones',
            key: 'phones',
          },
        ],
      },
      {
        type: 'group',
        label: 'Clothes',
        children: [
          {
            label: 'Man',
            key: 'man',
          },
          {
            label: 'Woman',
            key: 'woman',
          },
        ],
      },
    ],
  },
  {
    label: <Link to={'/auth/login'}>Login</Link>,
    key: 'login',
    style:{
      position:"absolute",
      right:80
    }
  },
  {
    label: <Link to={'/auth/register'}>Register</Link>,
    key: 'register',
    style: {
      position:"absolute",
      right: 0
    }
  },

];
const Navbar = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return <Menu style={{position:"relative"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;