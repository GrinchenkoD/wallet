import Dashboard from '../pages/dashboard/Dashboard';
import Deposits from '../pages/deposits/Deposits';
import History from '../pages/history/History';
import Withdrawals from '../pages/withdrawals/Withdrawals';

const mainRoutes = [
  {
    name: 'Account Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'Account History',
    icon: 'history',
    path: '/history',
    component: History,
  },
  {
    name: 'Deposits',
    icon: 'deposits',
    path: '/deposits',
    component: Deposits,
  },
  {
    name: 'Withdrawals',
    icon: 'withdrawals',
    path: '/withdrawals',
    component: Withdrawals,
  },
];
export default mainRoutes;
