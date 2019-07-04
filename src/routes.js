import CadastroBar from './views/CadastroBar.jsx';
import SobreNos from 'views/SobreNos.jsx';
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
    path: '/sobre-nos',
    name: 'Sobre nós',
    icon: 'pe-7s-info',
    component: SobreNos,
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
    path: '/maps',
    name: 'Encontre o bar mais próximo de você',
    icon: 'pe-7s-map-marker',
    component: Maps,
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
