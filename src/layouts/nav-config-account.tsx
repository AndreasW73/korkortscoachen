
import { Iconify } from 'src/components/iconify';
import type { AccountDrawerProps } from './components/account-drawer';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const _account: AccountDrawerProps['data'] = [
  { label: 'Hem', href: paths.dashboard.root, icon: <Iconify icon="solar:home-angle-bold-duotone" /> },
  // {
  //   label: 'Profile',
  //   href: '/profile',
  //   icon: <Iconify icon="custom:profile-duotone" />,
  // },
  // {
  //   label: 'Projects',
  //   href: '#',
  //   icon: <Iconify icon="solar:notes-bold-duotone" />,
  //   info: '3',
  // },
  // {
  //   label: 'Subscription',
  //   href: '#',
  //   icon: <Iconify icon="custom:invoice-duotone" />,
  // },
  // { label: 'Security', href: '#', icon: <Iconify icon="solar:shield-keyhole-bold-duotone" /> },
  // { label: 'Account settings', href: '/account-settings', icon: <Iconify icon="solar:settings-bold-duotone" /> },
];
