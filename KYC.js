// import React, { Fragment, useState } from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import termsBanner from '../../assets/images/termsBanner.png';
// import logo from '../../assets/images/logo.png';
// import aadar from '../../assets/images/aadar.png';
// import kyc from '../../assets/images/blu-bg-light.png';
// import Pencil from "../../assets/images/ext-link-icon.svg";
// import { useKycsubmitDataMutation } from "../redux/api";
// import * as yup from "yup"
// import { ToastContainer, toast } from 'react-toastify';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import Swal from 'sweetalert2';
// import { useNavigate } from "react-router-dom";


// const schema = yup.object().shape({
//     selectproof: yup.string()
//         .required("please select the proof")
//         .trim(),
//     pannumber: yup.string()
//         .matches(/^[a-zA-Z 0-9 ]*$/, "Enter a valid PanNumber")
//         .required("Enter a valid PanNumber")
//         .min(3, "Name must be at least 3 characters")
//         .max(20, "Name should not exceed 20 characters")
//         .trim(),
//     frontSideImg: yup
//         .mixed()
//         .test("fileRequired", "Profile Pic is Required", (value) => {
//             return value && value.length > 0;
//         })
//         .test("fileSize", "File size is too large", (value) => {
//             return value && value[0] && value[0].size <= 1024000;
//         })
//         .test("fileFormat", "Invalid file format", (value) => {
//             return (
//                 value &&
//                 value.length > 0 &&
//                 ["image/jpeg", "image/png"].includes(value[0].type)
//             );
//         }),
//     backSideImg: yup
//         .mixed()
//         .test("fileRequired", "Profile Pic is Required", (value) => {
//             return value && value.length > 0;
//         })
//         .test("fileSize", "File size is too large", (value) => {
//             return value && value[0] && value[0].size <= 1024000;
//         })
//         .test("fileFormat", "Invalid file format", (value) => {
//             return (
//                 value &&
//                 value.length > 0 &&
//                 ["image/jpeg", "image/png"].includes(value[0].type)
//             );
//         }),
//     kycSelfieImg: yup
//         .mixed()
//         .test("fileRequired", "Profile Pic is Required", (value) => {
//             return value && value.length > 0;
//         })
//         .test("fileSize", "File size is too large", (value) => {
//             return value && value[0] && value[0].size <= 1024000;
//         })
//         .test("fileFormat", "Invalid file format", (value) => {
//             return (
//                 value &&
//                 value.length > 0 &&
//                 ["image/jpeg", "image/png"].includes(value[0].type)
//             );
//         }),
// });



// const KYC = (props) => {
//     const navigate = useNavigate();
//     const [selectproof , setSelectProof] = useState(null);
//     const [ pannumber, setPannumber] = useState(null);
//     const [formData, setFormData] = useState({});
//     const [submitKyc] = useKycsubmitDataMutation()
//     const [frontSideImg, setFrontSideImg] = useState(null);
//     const [backSideImg, setBackSideImg] = useState(null);
//     const [kycSelfieImg, setKycSelfieImg] = useState(null);

//     const handleFileChange = (e) => {
//         // const file = event.target.files[0];
//         // if (file) {
//         //     setImgSrc(file);
//         // }
//         // console.log(e.target.files);
//         setFrontSideImg(e.target.files[0])
//       };
//       const handleFileBackChange = (e)=> {
//         setBackSideImg (e.target.files[0])
//       }
//       const handleFileselfieChange = (e)=> {
//         setKycSelfieImg (e.target.files[0])
//       }
    

//     const {
//         handleSubmit, formState, register, reset } = useForm({
//             resolver: yupResolver(schema),
//             mode: 'all'
//         });

//     const onSubmit = async (data) => {
//         console.log(data);
   
//         try {
//             const loginuserid = localStorage.getItem('verifyUserId');             const selectProof = selectproof;
//             const Pannumber = pannumber;
//             const frontimage = frontSideImg;
//             const backimage = backSideImg;
//             const selfie = kycSelfieImg;
           
           
//             const formData = new FormData();
//             formData.append("selectProof", data.selectproof);
//             formData.append("panNumber",data. pannumber);
//             formData.append("id", loginuserid);
//             formData.append("frontSideImg", frontimage);
//             formData.append("backSideImg", backimage );
//             formData.append("kycSelfieImg", selfie );
          

//             let response = await submitKyc(formData);
//             if (response.data) {
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: `Kyc Sumbitted successfully..`,
//                     showConfirmButton: false,
//                     timer: 2500
//                 });
//             }
//             setTimeout (()=>{
//                 navigate('/planlist')
//             },3000)
//             reset();
          
//             console.log(response.data.message);
            
//         } catch (error) {
//             console.error('Error submitting KYC details:', error);
//         }
//     };

//     return (
//         <Fragment>
//             <Header />
//             <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
//                 <div className="container container-1200">
//                     <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="LgnPg">
//                                 <img src={logo} className="img-fluid d-block mx-auto" />
//                                 <h3>KYC</h3>
//                                 <div className="form-group">
//                                     <label>Select Proof</label>
//                                     <select className="form-control"   {...register("selectproof")}>
//                                         <option>Licence</option>
//                                         <option>Aadar Card</option>
//                                         <option>Pan Card</option>
//                                         <p className="text-danger"> {formState.errors.firstName?.message} </p>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label>PAN Number</label>
//                                     <input type="text" className="form-control" {...register("pannumber")}
//                                     />
//                                     <p className="text-danger"> {formState.errors.pannumber?.message} </p>
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Front Side ID Proof</label>
//                                     <div className="UpldDvPf">
                                      
//                                         {/* <img src={kyc} className="img-fluid " /> */}
//                                         <input
//                                             type="file"
//                                             id="frontSideImg"
//                                             {...register("frontSideImg")}
//                                             style={{
//                                                 position: "absolute",
//                                                 width: "100%",
//                                             }}
//                                             // role="button"
//                                             onChange={handleFileChange}
//                                         />
                                       
//                                         <label for="back-id">
//                                             <div class="choosefile-grid">
//                                                 <div class="kyc-previewbox">
//                                                     {/* <img src={kyc } /> */}
//                                                 </div>
//                                             </div>
//                                         </label>
//                                         <p className="text-danger"> {formState.errors.frontSideImg?.message} </p>
//                                     </div>
                                  
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Back Side ID Proof</label>
//                                     <div className="UpldDvPf">
                                   
//                                         {/* <img src={kyc} className="img-fluid " style={{ marginTop: '-42px' }} /> */}
//                                         <input
//                                             type="file"
//                                             id="backSideImg"
//                                             {...register("backSideImg")}
//                                             style={{
//                                                 position: "absolute",
//                                                 width: "100%",
//                                             }}
//                                             role="button"
//                                             onChange={handleFileBackChange}
//                                         />
                                       
//                                         <label for="back-id">
//                                             <div class="choosefile-grid">
//                                                 <div class="kyc-previewbox">
//                                                     {/* <img src={backSideImg} /> */}
//                                                 </div>
//                                             </div>
//                                         </label>
//                                         <p className="text-danger"> {formState.errors.backSideImg?.message} </p>
//                                     </div>

//                                 </div>
//                                 <div className="form-group">
//                                     <label>KYC Selfie With ID Proof</label>
//                                     <div className="UpldDvPf">
                                     
//                                         {/* <img src={kyc} className="img-fluid " style={{ marginTop: '-42px' }} /> */}
//                                         <input
//                                             type="file"
//                                             id="kycSelfieImg"
//                                             {...register("kycSelfieImg")}
//                                             style={{
//                                                 position: "absolute",
//                                                 width: "100%",
//                                             }}
//                                             role="button"
//                                             onChange={handleFileselfieChange}
//                                         />
                                        
//                                         <label for="back-id">
//                                             <div class="choosefile-grid">
//                                                 <div class="kyc-previewbox">
//                                                     {/* <img src={kycSelfieImg} /> */}
//                                                 </div>
//                                             </div>
//                                         </label>
//                                         <p className="text-danger"> {formState.errors.kycSelfieImg?.message} </p>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn LGn-btn">Submit</button>
//                             </div>
//                         </div>
//                     </div>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </Fragment>
//     );

// }

// export default KYC;


import React, { Fragment, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import termsBanner from '../../assets/images/termsBanner.png';
import logo from '../../assets/images/logo.png';
import aadar from '../../assets/images/aadar.png';
import kyc from '../../assets/images/blu-bg-light.png';
import Pencil from "../../assets/images/ext-link-icon.svg";
import { useKycsubmitDataMutation } from "../redux/api";
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    selectproof: yup.string()
        .required("please select the proof")
        .trim(),
    pannumber: yup.string()
        .matches(/^[a-zA-Z 0-9 ]*$/, "Enter a valid PanNumber")
        .required("Enter a valid PanNumber")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name should not exceed 20 characters")
        .trim(),
    frontSideImg: yup
        .mixed()
        .test("fileRequired", "Profile Pic is Required", (value) => {
            return value && value.length > 0;
        })
        .test("fileSize", "File size is too large", (value) => {
            return value && value[0] && value[0].size <= 1024000;
        })
        .test("fileFormat", "Invalid file format", (value) => {
            return (
                value &&
                value.length > 0 &&
                ["image/jpeg", "image/png"].includes(value[0].type)
            );
        }),
    backSideImg: yup
        .mixed()
        .test("fileRequired", "Profile Pic is Required", (value) => {
            return value && value.length > 0;
        })
        .test("fileSize", "File size is too large", (value) => {
            return value && value[0] && value[0].size <= 1024000;
        })
        .test("fileFormat", "Invalid file format", (value) => {
            return (
                value &&
                value.length > 0 &&
                ["image/jpeg", "image/png"].includes(value[0].type)
            );
        }),
    kycSelfieImg: yup
        .mixed()
        .test("fileRequired", "Profile Pic is Required", (value) => {
            return value && value.length > 0;
        })
        .test("fileSize", "File size is too large", (value) => {
            return value && value[0] && value[0].size <= 1024000;
        })
        .test("fileFormat", "Invalid file format", (value) => {
            return (
                value &&
                value.length > 0 &&
                ["image/jpeg", "image/png"].includes(value[0].type)
            );
        }),
});

const KYC = (props) => {
    const [selectproof, setSelectProof] = useState(null);
    const [pannumber, setPannumber] = useState(null);
    const [formData, setFormData] = useState({});
    const [submitKyc] = useKycsubmitDataMutation();
    const [frontSideImg, setFrontSideImg] = useState(null);
    const [backSideImg, setBackSideImg] = useState(null);
    const [kycSelfieImg, setKycSelfieImg] = useState(null);

    // Add state variables for image previews
    const [frontSideImgPreview, setFrontSideImgPreview] = useState(null);
    const [backSideImgPreview, setBackSideImgPreview] = useState(null);
    const [kycSelfieImgPreview, setKycSelfieImgPreview] = useState(null);

    const handleFileChange = (e) => {
        setFrontSideImg(e.target.files[0]);

        // Update the preview
        const reader = new FileReader();
        reader.onload = () => {
            setFrontSideImgPreview(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleFileBackChange = (e) => {
        setBackSideImg(e.target.files[0]);

        // Update the preview
        const reader = new FileReader();
        reader.onload = () => {
            setBackSideImgPreview(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleFileselfieChange = (e) => {
        setKycSelfieImg(e.target.files[0]);

        // Update the preview
        const reader = new FileReader();
        reader.onload = () => {
            setKycSelfieImgPreview(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const { handleSubmit, formState, register, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const onSubmit = async (data) => {
       
            console.log(data);
   
                    try {
                        const loginuserid = localStorage.getItem('verifyUserId')
                        console.log(loginuserid);
            
                         const selectProof = selectproof;
                         console.log(selectProof);
                        
                         const Pannumber = pannumber;
                         console.log(pannumber);
            
                        const frontimage = frontSideImg;
                        // console.log(frontImage);
            
                        const backimage = backSideImg;
                        // console.log(backImage);
                         
                        const selfie = kycSelfieImg;
                        // console.log(selfie);
                       
                        const formData = new FormData();
                        formData.append("selectProof", data.selectproof);
                        formData.append("panNumber",data. pannumber);
                        // formData.append("frontSideImg", data.frontSideImg[0]);
                        // formData.append("backSideImg", data.backSideImg[0]);
                        // formData.append("kycSelfieImg", data.kycSelfieImg[0]);
                        formData.append("id", loginuserid);
                        formData.append("frontSideImg", frontimage);
                        formData.append("backSideImg", backimage );
                        formData.append("kycSelfieImg", selfie );
                        //  console.log(formData);
            
                        // Other form data can be appended here if needed
            
                        let response = await submitKyc(formData);
                        console.log("userAdd",response);
            // Clear form and previews after successful submission
            reset();
            setSelectProof(null);
            setPannumber(null);
            setFrontSideImg(null);
            setBackSideImg(null);
            setKycSelfieImg(null);
            setFrontSideImgPreview(null);
            setBackSideImgPreview(null);
            setKycSelfieImgPreview(null);

            // Display success toast
            if (response.data) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        } catch (error) {
            console.error('Error submitting KYC details:', error);
        }
    };

    return (
        <Fragment>
            <Header />
            <div className="Main-section cmsSec" style={{ paddingTop: '80px' }}>
                <div className="container container-1200">
                    <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="LgnPg">
                                    <img src={logo} className="img-fluid d-block mx-auto" alt="Logo" />
                                    <h3>KYC</h3>
                                    <div className="form-group">
                                        <label>Select Proof</label>
                                        <select className="form-control" {...register("selectproof")}>
                                            <option>Licence</option>
                                            <option>Aadar Card</option>
                                            <option>Pan Card</option>
                                        </select>
                                        <p className="text-danger"> {formState.errors.firstName?.message} </p>
                                    </div>
                                    <div className="form-group">
                                        <label>PAN Number</label>
                                        <input type="text" className="form-control" {...register("pannumber")} />
                                        <p className="text-danger"> {formState.errors.pannumber?.message} </p>
                                    </div>
                                    <div className="form-group">
                                        <label>Front Side ID Proof</label>
                                        <div className="UpldDvPf">
                                            <input
                                                type="file"
                                                id="frontSideImg"
                                                {...register("frontSideImg")}
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                }}
                                                onChange={handleFileChange}
                                            />
                                            <p className="text-danger"> {formState.errors.frontSideImg?.message} </p>
                                            <label htmlFor="front-id">
                                                <div className="choosefile-grid">
                                                    <div className="kyc-previewbox">
                                                        {frontSideImgPreview && <img src={frontSideImgPreview} alt="Front Preview" />}
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Back Side ID Proof</label>
                                        <div className="UpldDvPf">
                                            <input
                                                type="file"
                                                id="backSideImg"
                                                {...register("backSideImg")}
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                }}
                                                onChange={handleFileBackChange}
                                            />
                                            <p className="text-danger"> {formState.errors.backSideImg?.message} </p>
                                            <label htmlFor="back-id">
                                                <div className="choosefile-grid">
                                                    <div className="kyc-previewbox">
                                                        {backSideImgPreview && <img src={backSideImgPreview} alt="Back Preview" />}
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>KYC Selfie With ID Proof</label>
                                        <div className="UpldDvPf">
                                            <input
                                                type="file"
                                                id="kycSelfieImg"
                                                {...register("kycSelfieImg")}
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                }}
                                                onChange={handleFileselfieChange}
                                            />
                                            <p className="text-danger"> {formState.errors.kycSelfieImg?.message} </p>
                                            <label htmlFor="selfie-id">
                                                <div className="choosefile-grid">
                                                    <div className="kyc-previewbox">
                                                        {kycSelfieImgPreview && <img src={kycSelfieImgPreview} alt="Selfie Preview" />}
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn LGn-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}


export default KYC;