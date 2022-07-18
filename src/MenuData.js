import React from 'react';
import { FaPencilAlt, FaSeedling } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BsPinMapFill } from 'react-icons/bs';

export const MenuData = [
  {
    title: 'Word Assembly',
    path: '/',
    icon: <FaPencilAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Word Assembly (Seed) Coming Soon',
    path: '/word-assembly-seed',
    icon: <FaSeedling />,
    cName: 'nav-text'
  },
  {
    title: 'Word Assembly (API) Coming Soon',
    path: '/word-assembly-api',
    icon: <TbApi />,
    cName: 'nav-text'
  },
  {
    title: 'LocateMe',
    path: '/locateme',
    icon: <BsPinMapFill />,
    cName: 'nav-text'
  },
];