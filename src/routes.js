import CadastroBar from './views/CadastroBar.jsx';
import UserProfile from 'views/UserProfile.jsx';
import Icons from 'views/Icons.jsx';
import Maps from 'views/Maps.jsx';
import Notifications from 'views/Notifications.jsx';
import Bares from 'views/Bares.jsx';
import BarProfile from 'views/BarProfile.jsx';

const dashboardRoutes = [
  {
    path: '/bares',
    name: 'Bares',
    icon: 'pe-7s-ribbon',
    component: Bares,
    layout: '/user'
  },

  {
    path: '/user',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: UserProfile,
    layout: '/admin'
  },

  {
    path: '/cadastro-bar',
    name: 'Cadastrar Bar',
    icon: 'pe-7s-note2',
    component: CadastroBar,
    layout: '/user'
  },

  {
    path: '/icons',
    name: 'Icons',
    icon: 'pe-7s-science',
    component: Icons,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'pe-7s-map-marker',
    component: Maps,
    layout: '/admin'
  },

  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'pe-7s-bell',
    component: Notifications,
    layout: '/admin'
  },

  {
    path: '/profile/:id',
    component: BarProfile,
    layout: '/user',
    stayInMenu: false
  },

  {
    path: '/',
    component: Bares,
    layout: '',
    stayInMenu: false
  }
];

export default dashboardRoutes;
