import React from 'react'

const SmallTableProduct = () => {
    return (
        <>
            <div className="col-sm-12 col-xl-6">
                <div className="bg-light-custom rounded table-responsive h-100 p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Recent Products</h6>
                        <a href="">Show All</a>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="10%">#</th>
                                <th scope="col" width="45%">Name</th>
                                <th scope="col" width="25%">Date</th>
                                <th scope="col" width="20%">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Java</td>
                                <td>01 jan 2024</td>
                                <td>Notes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SmallTableProduct