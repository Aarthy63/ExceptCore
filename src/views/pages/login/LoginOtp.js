
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { toast, ToastContainer } from 'react-toastify';
// import { useLoginverifyOtpMutation } from '../../../redux/services/adminAPI'
// import { useNavigate } from 'react-router-dom';

// const schema = Yup.object().shape({
//     otp: Yup.string().required('otp is required').min(6, 'Enter Six Digits Number').max(6, 'Invalid OTP').trim(),
// });


// const LoginOtp = () => {
//     const navigate = useNavigate()
//     const [verifyOtp] = useLoginverifyOtpMutation()
//     const adminId = localStorage.getItem('adminId')
//     const { register, handleSubmit, formState: { errors }, reset } = useForm({
//         resolver: yupResolver(schema),
//         mode: 'all'
//     });
//     const onSubmit = async (data) => {
//         console.log(data);
//         try {
//             const verifyotpNumber = await verifyOtp({ otp: data.otp, id: adminId })
//             console.log(verifyotpNumber);
//             if (verifyotpNumber.error) {
//                 const errorMessage = verifyotpNumber.error.data.message
//                 toast.error(errorMessage, {
//                     position: toast.POSITION.TOP_CENTER
//                 })
//                 return
//             }
//             toast.success(verifyotpNumber.data.message, {
//                 position: toast.POSITION.TOP_CENTER
//             })
//             const token = verifyotpNumber.data.token
//             localStorage.setItem('admintoken', token)
//             reset()
//             setTimeout(() => {
//                 navigate('/TwoFactorAuth')
//             }, 3000);
//         } catch (err) {
//             console.log(err.message);
//         }
//     }
//     return (
//         <div className='container mt-5'>
//             <h1>Enter OTP</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <input
//                         className={`form-control  ${errors?.otp ? 'is-invalid' : ''}`}
//                         type="text"
//                         name="otp"
//                         {...register('otp')}
//                         placeholder="Enter Your OTP" />
//                     <div className="invalid-feedback ">
//                         <span style={{ margin: "13px" }}>{errors?.otp?.message}</span>
//                     </div>
//                     <div className="text-center mb-4">
//                         <button className="btn btn-primary fs-16 fw-400" type="submit">Send</button>
//                     </div>
//                 </div>
//             </form>

//         </div>
//     )
// }

// export default LoginOtp
