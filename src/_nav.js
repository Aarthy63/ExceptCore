import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilList,
  cilCalculator,
  cilChartPie,
  cilSettings,
  cilColorBorder,
  cilClipboard,
  cilDrop,
  cilGroup,
  cilPencil,
  cilColumns,
  cilSpeedometer,
  cilStar,
  cilCash,
  cilMonitor,
  cilContact,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'ADMIN',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/admin/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/admin/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  },
  {
    component: CNavItem,
    name: 'Projects',
    to: '/admin/projects',
    icon: <CIcon icon={cilMonitor} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  },
  
  {
    component: CNavTitle,
    name: 'Components',
  },

  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },

  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  },
  {
    component: CNavItem,
    name: 'StackingList',
    to: '/StackingList',
    icon: <CIcon icon={cilList} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Forgotpassword',
  //   to: '/Forgetpassword',
  //   icon: <CIcon icon={cilContact} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  // },
  {
    component: CNavItem,
    name: 'SiteSettings',
    to: '/sitesettings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}}/>,
  },
  {
    component: CNavItem,
    name: 'AddContent',
    to: '/addcontent',
    icon: <CIcon icon={cilColumns} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
  },
  {
    component: CNavItem,
    name: 'CKEditor',
    to: '/ckeditor',
    icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}}/>,
  },


  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" style={{'--ci-primary-color': 'green'}} />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
