import React from 'react';
import Item1 from '../pages/Item1';
import Item2 from '../pages/Item2';

export const routes = [
  {
    path: '/item1',
    element: <Item1 />,
  },
  {
    path: '/item2',
    element: <Item2 />,
  },
];

export default routes;