import { Main, About, Counter, Todo } from 'pages';

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
  {
    path: '/todo',
    page: Todo,
    exact: true,
  },
];

export default routes;
