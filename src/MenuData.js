import React from 'react';
import { FaHome, FaPencilAlt, FaSeedling } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BsPinMapFill } from 'react-icons/bs';

export const MenuData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    color: '#878482',
    colorSelect: '#826658',
  },
  {
    title: 'Word Assembly',
    path: '/wordAssembly',
    icon: <FaPencilAlt />,
    color: '#de8d5f', 
    colorSelect: '#fc7021',
  },
  {
    title: 'Word Assembly (Seed) Coming Soon',
    path: '/wordAssemblySeed',
    icon: <FaSeedling />,
    color: '#69b56d',
    colorSelect: '#3feb48',
  },
  {
    title: 'Word Assembly (API) Coming Soon',
    path: '/wordAssemblyAPI',
    icon: <TbApi />,
    color: '#8476b5',
    colorSelect: '#6a55b5',
  },
  {
    title: 'LocateMe',
    path: '/locateMe',
    icon: <BsPinMapFill />,
    color: '#7ca6eb',
    colorSelect: '#498efc',
  },
];