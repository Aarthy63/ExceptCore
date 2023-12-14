
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useGetKycDataQuery, useApproveKycMutation, useRejectKycMutation } from '../../redux/services/adminAPI';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
//import { useGetSingleUserQuery } from '../../redux/services/adminAPI';

const schema = Yup.object().shape({
    message: Yup.string().required('message is required').min(3, 'Enter atleast 3 characters').trim(),
});

const KycSingleData = () => {

    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState("");

    const { id } = useParams();
    console.log(id);
    const [ApproveKyc] = useApproveKycMutation()
    const [RejectKyc] = useRejectKycMutation()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });
    const { data, isLoading } = useGetKycDataQuery( id)
    const singleKycData = data?.SingleKyc

    if (isLoading) {
        return <div>Loading...</div>
    }
    const toggle = () => {
        setModal(!modal);
        setMessage("");
    };

    const onSubmit = async () => {
        const approveResponse = await ApproveKyc({ id: id })
        // if (approveResponse.error) {
        //     return Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: approveResponse.error.data.message,
        //     })
        // }
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Kyc Approved`,
            showConfirmButton: false,
            timer: 2500
        });
    }

    const handleVerify = async (data) => {
        const Reason = data.message
        const rejectResponse = await RejectKyc({ id, Reason })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Kyc Rejected`,
            showConfirmButton: false,
            timer: 2500
        });
        setModal(false);
    }

    return (
        <div>
            <h1 className='text-danger text-center'>{singleKycData?.aadharName}s Details</h1>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center">aadharName: {singleKycData?.aadharName}</h3><br />
                    <center><img src={`http://localhost:8080/${singleKycData?.frontSideImg}`} alt="fronSideImg" /></center><br />
                    <center><img src={`http://localhost:8080/${singleKycData?.backSideImg}`} alt="backSideImg" /></center><br />
                    <center><img src={`http://localhost:8080/${singleKycData?.kycSelfieImg}`} alt="kycSelfieImg" /></center><br />
                    <h6 className="card-title text-center">userName: {singleKycData?.username}</h6><br />
                    {/* <center><img src={`http://localhost:3800/${singleData?.profileImage}`} alt="Profile" /></center><br /> */}
                    <h6 className="card-text text-center">email: {singleKycData?.email}</h6><br />
                    <center><button className='btn btn-info' onClick={() => onSubmit()}>Approve</button><span>  </span>
                        <button className='btn btn-warning' onClick={() => toggle()}>Reject</button></center>

                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} modalClassName="CmmnMdl" className="modal-md ">
                <form onSubmit={handleSubmit(handleVerify)}>
                    <ModalBody>
                        <div className="MdlHdr BrdBttm pb-3 mb-1 ">
                            <div className="StkMdlHdd ">
                                <h4 className="">
                                    <span>Enter</span> Reason
                                </h4>
                            </div>
                        </div>
                        <div className="modal-body">
                            <input type='text' className={`form-control  ${errors?.message ? 'is-invalid' : ''
                                }`}
                                placeholder='Enter Reason' {...register("message")} name='message' />
                            <div className="invalid-feedback ">
                                <span style={{ margin: "13px" }}>{errors?.message?.message}</span>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn BtnPrimry Btn-182-44 BtnInrpg">
                            Verify
                        </Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div >
    )
}

export default KycSingleData

