interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Rome'
  },
  {
    name: 'The Old Empire',
    url: '/theme/colors',
    icon: 'icon-star'
  },
  {
    name: 'Western Empire',
    url: '/rome_west',
    icon: 'icon-star',
    children: [
      {
        name: 'Constans I (337-350)',
        url: '/rome_east/re_pg1',
        icon: 'icon-puzzle'
      },
      {
        name: 'Re-unified Empire (350-375)',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'East-West Conflict (375-395)',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Honorius (395-423)',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      },
      {
        name: 'Valentinian III (423-455)',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Final Collapse (455-476)',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Eastern Empire',
    url: '/rome_east',
    icon: 'icon-star',
    children: [
      {
        name: 'Constantius II(334-361)',
        url: '/rome_east/re_pg1',
        icon: 'icon-puzzle'
      },
      {
        name: 'Valentinian dynasty (361-379)',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Theodosius I (379-395)',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Arcadius & Pulcheria (395-421)',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Theodosius II (421-450)',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Early Leonid dynasty (450-474)',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Zeno (474-491)',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Rise of the Justinian dynasty (491-527)',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    title: true,
    name: 'Barbarian Tribes'
  },
    {
    name: 'Huns',
    url: '/charts',
    icon: 'icon-drop'
  },
    {
    name: 'Ostrogoths',
    url: '/charts',
    icon: 'icon-drop'
  },
  {
    name: 'Visagoths',
    url: '/charts',
    icon: 'icon-drop'
  },
    {
    name: 'Franks',
    url: '/charts',
    icon: 'icon-drop'
  },
    {
    name: 'Vandals',
    url: '/charts',
    icon: 'icon-drop'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    divider: true
  },
];
