// import React, { Component, Suspense } from 'react'
// import { Route, Routes, Navigate } from 'react-router-dom'
// import './scss/style.scss'
// import DefaultLayout from './layout/DefaultLayout'
// import Register from './views/pages/register/Register'
// import Page404 from './views/pages/page404/Page404'
// import Page500 from './views/pages/page500/Page500'
// import Login from './views/pages/login/Login'
// import LoginOtp from './views/pages/login/LoginOtp';
// import ForgotPasswordOtp from './views/pages/login/ForgotPasswordOtp'
// import ForgetPassword from './views/pages/login/Forgotpassword';
// import SetnewPassword from './views/pages/login/SetnewPassword';
// import Changepassword from './views/pages/ChangePassword/ChangePassword'; 
// import TwoFactorAuth from './views/pages/TwoFactor/TwoFactorAuth'
// import ForgotPattern from './views/pages/Forgotpattern/ForgotPattern';
// import UserList from './views/users/UserList';
// import ForgotPassword from './views/pages/TwoFactor/ForgetPassword'
// import EmailVerify from './views/pages/Forgotpattern/EmailVerify'
// import Forgot from './views/pages/Forgotpattern/Forgot'
// import FactorAuth from './views/pages/TwoFactor/FactorAuth';
// import KycSingleData from './views/Kyc/KycSingledata'
// import KycList from './views/Kyc/KycList'

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// class App extends Component {
//   render() {
//     return (
//           <Routes>
//             <Route exact path='*' element={<DefaultLayout />}/>
//             <Route exact path="/register" name="Register Page" element={<Register />} />
//             <Route exact path="/404" element={<Page404 />} />
//             <Route exact path="/500" element={<Page500 />} />
//             <Route exact path="/ForgotPasswordOtp" element={<ForgotPasswordOtp />} />
//             <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
//             <Route exact path="/500" element={<Page500 />} />
//             <Route exact path="/SetnewPassword" element={<SetnewPassword />} />
//             <Route path="/" element={<Login />} />
//             <Route path='/TwoFactorAuth' element = {<TwoFactorAuth />} />
//             <Route exact path="/LoginOtp" element={<LoginOtp />} />
//             <Route exact path = "/Changepassword" element = {<Changepassword />}/>
//             <Route exact path = "/ForgotPattern" element = {<ForgotPattern />}/>
//             <Route exact path='users/UserList/:id' element = {<UserList />} />
//             <Route path = "/ForgotPassword" element ={<ForgotPassword />}/>
//             {/* <Route exact path="/500" element={<Page500 />} /> */}
//             <Route path= '/EmailVerify' element = {<EmailVerify />}/>
//             <Route path= '/Forgot' element={<Forgot />}/>
//              <Route path='/FactorAuth' element={<FactorAuth />}/>
//              <Route path='KycSingleData/:id' element = {<KycSingleData />}/>
//              <Route path='/KycList' element= {<KycList />}/>
//           </Routes>
     
//     )
//   }
// }

// export default App

import React, { Component, Suspense } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import KycSingleData from './views/kyc/KycSingledata'
import KycList from './views/kyc/KycList'
import ChangePassword from './views/pages/ChangePassword/ChangePassword'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Forgotpassword=React.lazy(() => import('./views/pages/forgotpassword/ForgotPassword'))
const Forgotpattern=React.lazy(() => import('./views/pages/forgotpattern/ForgotPattern'))

const Changepattern=React.lazy(() => import('./views/pages/changepattern/ChangePattern'))
const Twofactor=React.lazy(() => import('./views/pages/TwoFactor/TwoFactorAuth'))
const Forgotmailpassword=React.lazy(() => import('./views/pages/mailverify/PasswordMail'))
const Forgotmailpattern=React.lazy(() => import('./views/pages/mailverify/PatternMail'))
const ForgetPasswordAuthCodeVerify=React.lazy(() => import('./views/pages/forgotpassword/ForgotPasswordAuthCodeverify'))
const ForgetPatternAuthCodeVerify=React.lazy(() => import('./views/pages/forgotpattern/ForgotPatternAuthCodeVerify'))


const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))


class App extends Component {
  render() {
    return (
      
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path='/forgotpassword' element={<Forgotpassword/>}/>
            <Route exact path='/forgotpattern' element={<Forgotpattern/>}/>
            <Route exact path='/changepattern' element={<Changepattern/>}/>
            <Route exact path='/passwordmail' element={<Forgotmailpassword/>}/>
            <Route exact path='/patternmail' element={<Forgotmailpattern/>}/>
            <Route exact path='/forgetPasswordAuthCodeVerify' element={<ForgetPasswordAuthCodeVerify/>}/>
            <Route exact path='/forgetPatternAuthCodeVerify' element={<ForgetPatternAuthCodeVerify/>}/>
            <Route exact path='/twofactor' element={<Twofactor/>}/>
            <Route path= '/ChangePassword' element= {<ChangePassword />}/>

            <Route path='KycSingleData/:id' element = {<KycSingleData />}/>
             <Route path='/KycList' element= {<KycList />}/>

            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
  
    )
  }
}

export default App

