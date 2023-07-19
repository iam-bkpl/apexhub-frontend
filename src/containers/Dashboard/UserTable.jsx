import React from 'react'
import RowUser from './RowUser'

const UserTable = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light-custom text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">User Management</h6>
                        <a href="">Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-hover table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Joined&nbsp;Date</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RowUser />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserTable