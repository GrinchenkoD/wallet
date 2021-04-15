import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'Account Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/dashboard/Dashboard' /*webpackChunkName: "dashboard-page" */
      ),
    ),
  },
  {
    name: 'Account History',
    icon: 'history',
    path: '/history',
    exact: true,
    component: lazy(() =>
      import('../pages/history/History' /*webpackChunkName: "history-page" */),
    ),
  },
  {
    name: 'Deposits',
    icon: 'deposits',
    path: '/deposits',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/deposits/Deposits' /*webpackChunkName: "deposits-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'Withdrawals',
    icon: 'withdrawals',
    path: '/withdrawals',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/withdrawals/Withdrawals' /*webpackChunkName: "withdrawals-page" */
      ),
    ),
  },
];
export default mainRoutes;
