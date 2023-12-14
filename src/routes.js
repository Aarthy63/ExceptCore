import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/admin/colors/Colors'))
const Typography = React.lazy(() => import('./views/admin/typography/Typography'))
const Projects = React.lazy(() => import('./views/admin/projects/Projects'))
const StackingPlanList = React.lazy(() => import('./views/admin/StackingPlanList/StackingPlanList'))
const UserList = React.lazy(()=> import ('./views/users/UserList'))

//Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Users = React.lazy(() => import('./views/users/Users'))
const SiteSetting = React.lazy(() => import('./views/siteSettings/SiteSetting'))
const CKEditor = React.lazy(() => import('./views/ckEditor/CkEditor'))
const AddContent = React.lazy(() => import('./views/addContent/AddContent'))
// const Forgetpassword = React.lazy(()=> import('./views/pages/login/Forgotpassword'))
// Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))


const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/Forgetpassword', name: 'Forgetpassword', element: Forgetpassword },
  { path: '/dash/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/sitesettings/EditModal', name: 'EditModal', element: SiteSetting },
  { path: '/UserList/:id', name: 'UserList', element: UserList },
  { path: '/admin', name: 'Admin', element: Colors, exact: true },
  { path: '/admin/colors', name: 'Colors', element: Colors },
  { path: '/admin/typography', name: 'Typography', element: Typography },
  { path: '/admin/projects', name: 'Projects', element: Projects },
  { path: '/users', name: 'Users', element: Users },
  { path: '/sitesettings', name: 'SiteSetting', element: SiteSetting },
  { path: '/ckeditor/:id', name: 'CKEditor', element: CKEditor },
  { path: '/addContent', name: 'AddContent', element: AddContent },
  { path: '/StackingPlanList', name: 'StackingPlanList', element: StackingPlanList },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
