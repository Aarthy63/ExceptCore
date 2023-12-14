// // import React from 'react';
// // import { useNavigate, useParams } from "react-router-dom";
// // import { useGetSingleUserQuery } from '../../redux/services/adminAPI';

// // const Singleview = () => {
// //   const navigate = useNavigate();
// //   const params = useParams();
// //   const { data, isLoading } = useGetSingleUserQuery(params.id);

// //   const users = data?.data;

// //   const handleKycAccess = async () => {
// //     try {
// //          await (params.id, 'approved');
// //     //   navigate("/");
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleKycDenied = async () => {
// //     try {
// //            await (params.id, 'rejected');
// //     //   navigate("/");
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (isLoading) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="singleviewcon">
// //       <div className="container">
// //         <div className="row row-cols-sm-12 row-cols-md-3">
// //           <div className="col">
// //             <div className="card" style={{ height: "300px", padding: "10px", margin: "10px", width: "400px" }}>
// //               <div className="card-body" style={{ backgroundColor: "lavender", width: "auto", height: "200px", overflow: "auto" }}>
// //                 <h6>Id: {data._id}</h6>
// //                 <h6>Email Id: {data.email}</h6>
// //                 <h6>User Name: {data.username}</h6>
// //                 <h6>createdAt: {data.createdAt}</h6>

// //                 <div className="kyc-actions">
// //                   <button className="btn btn-success" onClick={handleKycAccess}>Kyc Access</button>
// //                   <button className="btn btn-danger" onClick={handleKycDenied}>Kyc Denied</button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <button className="btn btn-ghost-primary" type="button" onClick={() => navigate("/")}>
// //           Back
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Singleview;

// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useGetSingleUserQuery } from '../../redux/services/adminAPI';

// const SingleUserData = () => {
//     const { id } = useParams();
//     // const userid = id
//     const { data, isLoading } = useGetSingleUserQuery({ id })
//     const singleData = data?.data
//     console.log(data);
//     if (isLoading) {
//         return <div>Loading...</div>
//     }
//     return (
//         <div>
//             <h1 className='text-danger text-center'>{singleData?.username}s Details</h1>
//             {/* <div class="card-body">
//                 <h5 class="card-title">{singleData?.userName}</h5>
//                 <img src={`http://localhost:3800/${singleData?.profileImage}`} alt='some'></img>
//                 <p class="card-text">{singleData?.email}</p>
//             </div> */}
//             <div className="card">
//                 <div className="card-body">
//                     <h3 className="card-title text-center">userName: {singleData?.username}</h3><br />
//                     {/* <center><img src={`http://localhost:3800/${singleData?.profileImage}`} alt="Profile" /></center><br /> */}
//                     <h6 className="card-text text-center">email: {singleData?.email}</h6><br />


//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SingleUserData

