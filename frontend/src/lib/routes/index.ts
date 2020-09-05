import { Main, About, Counter } from 'pages';

const routes = [
  {
    path: ['/'],
    page: Main,
    exact: true,
  },
  {
    path: '/about',
    page: About,
    exact: true,
  },
  {
    path: '/counter',
    page: Counter,
    exact: true,
  },
];

export default routes;
