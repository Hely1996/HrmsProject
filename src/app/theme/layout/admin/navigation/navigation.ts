import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      },
      {
        id: 'page-layouts',
        title: 'Edit Profile',
        type: 'item',
        // url: '/layout/horizontal',
        url: '/profile',
        target: true,
        icon: 'feather icon-layout'
      },
      {
        id: 'page-layouts',
        title: 'Leaves',
        type: 'item',
        // url: '/layout/horizontal',
        url: '/leave-requests',
        target: true,
        icon: 'feather icon-layout'
      },
      {
        id: 'page-layouts',
        title: 'Timesheet',
        type: 'item',
        // url: '/layout/horizontal',
        url: '/timesheet-requests',
        target: true,
        icon: 'feather icon-layout'
      },
      {
        id: 'page-layouts',
        title: 'Employees List',
        type: 'item',
        // url: '/layout/horizontal',
        url: '/employee-list',
        target: true,
        icon: 'feather icon-layout'
      }
    ]
  },
  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'feather icon-file-text',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'Sign up',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'Sign in',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'reset-password',
  //           title: 'Reset Password',
  //           type: 'item',
  //           url: '/auth/reset-password',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'change-password',
  //           title: 'Change Password',
  //           type: 'item',
  //           url: '/auth/change-password',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 'maintenance',
  //       title: 'Maintenance',
  //       type: 'collapse',
  //       icon: 'feather icon-sliders',
  //       children: [
  //         {
  //           id: 'error',
  //           title: 'Error',
  //           type: 'item',
  //           url: '/maintenance/error',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'coming-soon',
  //           title: 'Maintenance',
  //           type: 'item',
  //           url: '/maintenance/coming-soon',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'feather icon-align-left',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'leave-requests',
  //       title: 'Leave Requests',
  //       type: 'item',
  //       url: '/leave-requests',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'timesheet-requests',
  //       title: 'Timesheet Requests',
  //       type: 'item',
  //       url: '/timesheet-requests',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
  
}
