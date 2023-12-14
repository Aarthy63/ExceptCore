
import React from 'react'
import { useGetKycListQuery } from '../../redux/services/adminAPI'
import DataTable from 'react-data-table-component'
// import { useNavigate } from 'react-router-dom'

const Kyclist = () => {

    // const navigate = useNavigate();
    const { data, isLoading, isError } = useGetKycListQuery()
    // console.log(data);
    const userslist = data?.data ? data?.data : []
    console.log(userslist);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error...</div>
    }

    const columns = [
        {
            name: "S.No",
            cell: (row, index) => index + 1,
        },
        {
            name: "userId",
            selector: "userId",
            sortable: true,
        },
        {
            name: "aadhar Front",
            cell: (row) =>
                row.frontSideImg ? (
                    <img
                        src={`http://localhost:8080/${row.frontSideImg}`}
                        alt="Profile"
                        style={{ width: "50px", height: "50px" }}
                    />
                ) : null,
        },
        {
            name: "aadhar Back",
            cell: (row) =>
                row.backSideImg ? (
                    <img
                        src={`http://localhost:8080/${row.backSideImg}`}
                        alt="Profile"
                        style={{ width: "50px", height: "50px" }}
                    />
                ) : null,
        },
        {
            name: "aadhar Back",
            cell: (row) =>
                row.kycSelfieImg ? (
                    <img
                        src={`http://localhost:8080/${row.kycSelfieImg}`}
                        alt="Profile"
                        style={{ width: "50px", height: "50px" }}
                    />
                ) : null,
        },
        {
            name: "aadharNumber",
            selector: "aadharNumber",
            sortable: true,
        },
        
        // {
        //     name: "Actions/View",
        //     cell: (row) => (
        //         row._id ?
        //             <button
        //                 className="btn btn-info"
        //                 onClick={() => navigate(`/KycSingleData/${row._id}`)}
        //             >
        //                 View
        //             </button> : <></>
        //     ),
        // },
        // {
        //     name: "Actions/Edit",
        //     cell: (row) => (
        //         <button
        //             className="btn btn-info"
        //             onClick={() => navigate(`/Edituser/${row._id}`)}
        //         >
        //             Edit
        //         </button>
        //     ),
        // },
    ];

    return (
        <div>
            <h1>Users Kyc List</h1>
            <DataTable
                columns={columns}
                data={userslist}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 30]}
            />
        </div>
    )
}

export default Kyclist