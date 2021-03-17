import React from 'react';
import Home from '../components/Home/Home';
import View from '../components/View/View';
export default [
  {
    path: '/home',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/view',
    component: () => <View />,
  },
];
