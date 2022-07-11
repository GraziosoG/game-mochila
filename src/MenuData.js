import React from 'react';
import { FiHome, FiSettings } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';
/*import * as FiIcons from 'react-icons/fi';*/
// profile BsPersonFill, practice log BsFillJournalBookmarkFill, piece backpack BsFileMusicFill, imslp FiMusic, youtube BsYoutube
export const MenuData = [
  {
    title: 'Home',
    path: '/',
    icon: <FiHome />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FiSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <BiLogInCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <BsPencilFill />,
    cName: 'nav-text'
  },
];