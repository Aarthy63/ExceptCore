import React, { useState } from 'react'
import PatternLock from 'react-pattern-lock'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNewPatternMutation, useOldPatternMutation } from '../../../redux/services/adminAPI'


const ForgotPattern = () => {
    const [sendOldPattern] = useOldPatternMutation()
    const [sendNewPattern] = useNewPatternMutation()
    const [oldPattern, setOldPattern] = useState([])
    const [newPattern, setNewPattern] = useState([])
    const [confirmNewPattern, setConfirmPattern] = useState([])
    const [status, setStatus] = useState(false)


    const adminId = localStorage.getItem("adminId")
    
    const handleOldPattern = (val) => {
        setOldPattern(val)
    }
    const handleNewPattern = (val) => {
        setNewPattern(val)
    }
    const handleConfirmPattern = (val) => {
        setConfirmPattern(val)
    }
    const handlenewPattern = async () => {

        try {
            if (newPattern.length !== confirmNewPattern.length) {
                return toast.error('Pattern is MisMatching')
            }
            for (let i = 0; i < newPattern.length; i++) {
                if (newPattern[i] !== confirmNewPattern[i]) {
                    return toast.error('Pattern is Wrong')
                }
            }
            const response = await sendNewPattern({ newPattern, adminId })
            // console.log(response)
            if (response.error) {
                // console.log(response.error.data.message);
                toast.error(response.error.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });

            }
            else {
                // console.log(response.data.status);
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                setNewPattern("")
                setConfirmPattern("")
                setOldPattern("")
                setStatus(!status)

            }
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleNewPasswordReset = () => {
        setNewPattern('')
        setConfirmPattern("")


    }
    const SubmitOldPattern = async () => {
        const response = await sendOldPattern({ oldPattern, adminId })

        if (response.error) {
            // console.log(response.error.data.message);

            toast.error(response.error.data.message, {
                position: toast.POSITION.TOP_CENTER,
            });

        }
        else {
            // console.log(response.data.status);

            toast.success(response.data.message, {
                position: toast.POSITION.TOP_CENTER,
            });
            setStatus(!status)
        }
        // localStorage.setItem("token", response.data.token)
        // localStorage.setItem("adminId", response.data.adminId
        // )
    }
    console.log(oldPattern, 'oldPattern');
    return (
        <div className='p-5'>
            <div className="row bg-body-secondary ">


                {status ? <>
                    <div className="col mt-3" >
                        <div className=""> <PatternLock
                            width={230}
                            pointSize={18}
                            size={3}
                            path={newPattern}
                            onChange={(val) =>
                                handleNewPattern(val)}
                            onFinish={() => {
                                // Handle pattern completion if needed
                            }}
                            className=" bg-danger ms-3 mt-3 text-center" // Add your custom class

                        />

                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className=""> <PatternLock
                            width={230}
                            pointSize={18}
                            size={3}
                            path={confirmNewPattern}
                            onChange={(val) =>
                                handleConfirmPattern(val)}
                            onFinish={() => {
                                // Handle pattern completion if needed
                            }}
                            className=" bg-danger ms-3 mt-3 text-center" // Add your custom class

                        />
                            <button className='btn btn-outline-dark' onClick={() => handleNewPasswordReset()}>reset</button>
                            <button className='btn btn-outline-dark' onClick={() => handlenewPattern()}>submit</button>
                        </div>
                    </div>
                </> :
                    <div className="col mt-3">
                        <div className="">
                            <h2>Enter old pattern </h2>
                            <PatternLock
                                width={230}
                                pointSize={18}
                                size={3}
                                path={oldPattern}
                                onChange={(val) =>
                                    handleOldPattern(val)}
                                onFinish={() => {
                                    // Handle pattern completion if needed
                                }}
                                className=" bg-danger ms-3 mt-3 text-center" // Add your custom class

                            />
                            <button className='btn btn-outline-dark' onClick={() => setOldPattern('')}>reset</button>
                            <button className='btn btn-outline-dark' onClick={() => SubmitOldPattern()}>submit</button>
                        </div>
                    </div>}
            </div>


        </div>
    )
}

export default ForgotPattern
