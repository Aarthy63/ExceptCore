import React from 'react'
import { useGetUsersQuery } from '../../redux/services/adminAPI'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const RegisterList = () => {
    const navigate = useNavigate()
    const { data, isLoading, isError } = useGetUsersQuery()
    console.log(data);
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
            style: {
                background: 'black',
              },
        },
        {
            name: "UserName",
            selector: "username",
            style: {
                background: 'black',
                color:'white'
              },
            sortable: true,
        },
        {
            name: "Email",
            selector: "email",
            style: {
                background: 'black',
              },
            sortable: true,
        },
        {
            name: "Actions/View",
            style: {
                background: 'black',
              },
            cell: (row) => (
                row._id ?
                <button
                    className="btn btn-info"
                    onClick={() => navigate(`/KycSingleData/${row._id}`)}
                >
                    View
                </button> : <></>
            ),
        },
    ];
    const customStyles = {
        rows: {
          style: {
            background: 'black',
            color: 'white',
          },
        },
        headCells: {
          style: {
            background: 'black',
            color: 'white',
          },
        },
      };

    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <h1 style={{textAlign:'center'}}>Register List</h1>
        <DataTable
          columns={columns}
          data={userslist}
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          customStyles={customStyles}
          style={{ background: 'black' }}
        />
      </div>
    )
}

export default RegisterList
